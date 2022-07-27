// Brainstorming file for the sensor calibration JSON document structure

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const SensorCalibrationSchema = new Schema(
    {
        calibration_versions: [
            {
                _id: false,
                version_number: String,
                sensors: [
                    {
                        _id: false,
                        sensor_id: String,
                        parameters: [
                            {
                                _id: false,
                                parameter_name: String,
                                method: String,
                                factor: String,
                                offset: String,
                                backdated_to: { type: Date, required: false }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const SensorCalibrations = model('SensorCalibrations', SensorCalibrationSchema);

export default SensorCalibrations;
