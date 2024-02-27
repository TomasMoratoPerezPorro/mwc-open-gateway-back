import express from 'express';
import { getUserRoutes, getUserRouteById } from '../controllers/userRouteController';

const router = express.Router();

router.get('/', getUserRoutes);
router.get('/:id', getUserRouteById);
// Add POST, PATCH, DELETE routes

export default router;
