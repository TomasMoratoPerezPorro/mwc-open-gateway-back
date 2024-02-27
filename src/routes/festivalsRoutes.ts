import express from 'express';
import { getFestivals, getFestivalById } from '../controllers/festivalsController';

const router = express.Router();

router.get('/', getFestivals);
router.get('/:id', getFestivalById);
// Add POST, PATCH, DELETE routes

export default router;
