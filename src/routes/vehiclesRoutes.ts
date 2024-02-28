import express from 'express';
import { getVehicles, getVehicleById, getVehicleByFestivalId } from '../controllers/vehiclesController';

const router = express.Router();

router.get('/', getVehicles);
router.get('/:id', getVehicleById);
router.get('/festival/:festId', getVehicleByFestivalId);
// Add POST, PATCH, DELETE routes

export default router;
