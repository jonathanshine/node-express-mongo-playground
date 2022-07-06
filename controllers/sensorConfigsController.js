import SensorConfigs from '../models/SensorConfigs.js';

export const getAllSensorConfigs = async (req, res, next) => {
    try {
        const sensorConfigs = await SensorConfigs.find();
        res.json(sensorConfigs);
    } catch (error) {
        next(error);
    }
};

export const createSensorConfig = async (req, res, next) => {
    const data = req.body;
    try {
        const sensorConfig = new SensorConfigs(data);
        const savedSensorConfig = await sensorConfig.save();
        res.json(savedSensorConfig);
    } catch (error) {
        next(error);
    }
};
