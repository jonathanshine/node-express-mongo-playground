import SensorConfigs from '../models/SensorConfigs.js';

export const getAllSensorConfigs = async (req, res, next) => {
    try {
        const sensorConfigs = await SensorConfigs.find();
        res.json(sensorConfigs);
    } catch (error) {
        next(error);
    }
};

export const createSensorConfigs = async (req, res, next) => {
    const data = req.body;
    try {
        const sensorConfigs = new SensorConfigs(data);
        const savedSensorConfigs = await sensorConfigs.save();
        res.json(savedSensorConfigs);
    } catch (error) {
        next(error);
    }
};
