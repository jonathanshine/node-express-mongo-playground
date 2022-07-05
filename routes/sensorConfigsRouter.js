import express from 'express';
import { createSensorConfigs, getAllSensorConfigs } from '../controllers/sensorConfigsController.js';
const router = express.Router();

router.route('/').get(getAllSensorConfigs).post(createSensorConfigs);

export default router;
