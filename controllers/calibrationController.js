import SensorCalibrations from '../models/CalibrationModelIdeas.js';

export const getAllCalibrations = async (req, res, next) => {
    try {
        const calibrations = await SensorCalibrations.find();
        res.json(calibrations);
    } catch (error) {
        next(error);
    }
};

export const createCalibration = async (req, res, next) => {
    const data = req.body;
    try {
        const calibration = new SensorCalibrations(data);
        const savedCalibration = await calibration.save();
        res.json(savedCalibration);
    } catch (error) {
        next(error);
    }
};

export const getLatestCalibration = async (req, res, next) => {
    try {
        const calibration = await SensorCalibrations.findOne().sort({ $natural: -1 });
        res.json(calibration);
    } catch (error) {
        next(error);
    }
};
