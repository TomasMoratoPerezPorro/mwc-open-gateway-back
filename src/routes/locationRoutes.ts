import express from 'express';

import { getLocation, verifyLocation } from '../controllers/locationController';

const router = express.Router();

router.get('/get', getLocation);
router.get('/verify', verifyLocation);
// Add POST, PATCH, DELETE routes

export default router;
