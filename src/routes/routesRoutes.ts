import express from 'express';
import { getRoutes, getRouteById } from '../controllers/routesController';

const router = express.Router();

router.get('/', getRoutes);
router.get('/:id', getRouteById);

export default router;
