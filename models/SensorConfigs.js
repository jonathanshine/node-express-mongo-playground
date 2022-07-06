import mongoose from 'mongoose';
import dotenv from 'dotenv';

const { Schema, model } = mongoose;

dotenv.config();

const SensorConfigsSchema = new Schema(
    {
        sensor_version: {
            type: String,
            required: true
        },
        field_names: {
            raw: {
                type: Array
            },
            real: {
                type: Array
            }
        },
        base_formulas: Object,
        offsets: {
            raw: Object,
            real: Object
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const SensorConfigs = model('SensorConfigs', SensorConfigsSchema);

export default SensorConfigs;
