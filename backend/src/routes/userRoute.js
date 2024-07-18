import express from 'express';
const router = express.Router();

import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controller/userController.js';

import authMiddleware from '../utils/authMiddleware.js';

// Route to create a new user
router.post('/', authMiddleware, createUser);

// Route to get all users (protected, admin only)
router.get('/', authMiddleware, getUsers);

// Route to get a user by ID (protected)
router.get('/:id', authMiddleware, getUserById);

// Route to update a user (protected)
router.put('/:id', authMiddleware, updateUser);

// Route to delete a user (protected)
router.delete('/:id', authMiddleware, deleteUser);

export default router;
