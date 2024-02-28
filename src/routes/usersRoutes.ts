import express from 'express';
import { getUsers, getUserById, getUsersByFestival } from '../controllers/usersController';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.get('/festival/:roleId/:festId', getUsersByFestival);
// Add POST, PATCH, DELETE routes

export default router;
