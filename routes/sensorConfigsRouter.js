import express from 'express';
import { cacheQuery } from '../caching/cacheMiddleware.js';
import { createSensorConfig, getAllSensorConfigs } from '../controllers/sensorConfigsController.js';
const router = express.Router();

router.route('/').get(getAllSensorConfigs).post(createSensorConfig);

router.route('/cache').get(cacheQuery);

export default router;
