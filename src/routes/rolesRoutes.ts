import express from 'express';
import { getRoles, getRoleById } from '../controllers/rolesController';

const router = express.Router();

router.get('/', getRoles);
router.get('/:id', getRoleById);
// Add POST, PATCH, DELETE routes

export default router;
