import express from 'express';
import { getVehicles, getVehicleById } from '../controllers/vehiclesController';

const router = express.Router();

router.get('/', getVehicles);
router.get('/:id', getVehicleById);
// Add POST, PATCH, DELETE routes

export default router;
