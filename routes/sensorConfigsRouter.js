import express from 'express';
import { createSensorConfig, getAllSensorConfigs } from '../controllers/sensorConfigsController.js';
const router = express.Router();

router.route('/').get(getAllSensorConfigs).post(createSensorConfig);

export default router;
