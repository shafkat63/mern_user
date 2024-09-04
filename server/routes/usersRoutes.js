import express from 'express';
import { getAllUsers, createUser, updateUser, deleteUser } from '../controllers/usersControllers.js';  // Import the controller functions

const router = express.Router();

// Define routes and their corresponding controller functions
router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
