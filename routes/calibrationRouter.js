import express from 'express';
import { createCalibration, getAllCalibrations, getLatestCalibration } from '../controllers/calibrationController.js';

const router = express.Router();

router.route('/').get(getAllCalibrations).post(createCalibration);

router.route('/cache').get(getLatestCalibration);

export default router;
