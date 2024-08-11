import express from 'express';
import {
  addSubClass,
  getSubClassesByClassId,
  getSubClassById,
  updateSubClass,
  deleteSubClass,
} from '../controller/subClassController.js';

const router = express.Router({ mergeParams: true }); // mergeParams is used to access params from the parent router

// Add a subclass to a class
router.post('/', addSubClass);

// Get all subclasses within a class
router.get('/', getSubClassesByClassId);

// Get a subclass by ID
router.get('/:subClassId', getSubClassById);

// Update a subclass by ID
router.put('/:subClassId', updateSubClass);

// Delete a subclass by ID
router.delete('/:subClassId', deleteSubClass);

export default router;
