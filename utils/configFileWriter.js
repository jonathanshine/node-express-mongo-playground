import '../dbConnect.js';
import * as fs from 'fs';
import mongoose from 'mongoose';
import SensorConfigs from '../models/SensorConfigs.js';

async function getLatestSensorConfig() {
    try {
        const sensorConfig = await SensorConfigs.findOne().sort({ $natural: -1 });
        return sensorConfig;
    } catch (error) {
        console.log(error);
    }
}

const latestSensorConfig = await getLatestSensorConfig();

const filePath = `sensorConfigurations/version${latestSensorConfig.sensor_version}.json`;

// Check if file exists locally
if (fs.existsSync(filePath)) {
    // If it exists, open the file and parse the JSON into an object
    const sensorConfigFromLocalJSON = fs.readFileSync(filePath);
    const sensorConfigParsed = JSON.parse(sensorConfigFromLocalJSON);

    // Grab the dates as milliseconds so we can compare if the document fetched from MongoDB is more recent than our local file
    const dateFromMongo = latestSensorConfig.createdAt.getTime();
    const dateFromLocalJSON = new Date(sensorConfigParsed.createdAt).getTime();
    console.log('Mongo date is more recent? --> ', dateFromMongo > dateFromLocalJSON);

    if (dateFromMongo > dateFromLocalJSON)
        // If the Mongo document is newer, we (over)write the file locally to the repository
        try {
            fs.writeFileSync(filePath, JSON.stringify(latestSensorConfig, null, 4), 'utf8');
            console.log(`File was saved to ${filePath}`);
        } catch (err) {
            console.err('An error has ocurred while saving the file.');
        }
} else {
    try {
        fs.writeFileSync(filePath, JSON.stringify(latestSensorConfig, null, 4), 'utf8');
        console.log(`File was saved to ${filePath}`);
    } catch (err) {
        console.err('An error has ocurred while saving the file.');
    }
}

mongoose.connection.close();
