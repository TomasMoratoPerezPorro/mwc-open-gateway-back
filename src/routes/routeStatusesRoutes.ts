import express from 'express';
import { getRouteStatuses, getRouteStatusById } from '../controllers/routeStatusesController';

const router = express.Router();

router.get('/', getRouteStatuses);
router.get('/:id', getRouteStatusById);
// Add POST, PATCH, DELETE routes

export default router;
