import express from 'express';
import { getUsers, getUserById } from '../controllers/usersController';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
// Add POST, PATCH, DELETE routes

export default router;
