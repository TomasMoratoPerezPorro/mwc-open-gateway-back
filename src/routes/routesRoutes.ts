import express from 'express';
import { getRoutes, getRouteById, postRoute } from '../controllers/routesController';

const router = express.Router();

router.get('/', getRoutes);
router.get('/:id', getRouteById);
router.post('/', postRoute);

export default router;
