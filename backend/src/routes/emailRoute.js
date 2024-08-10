import express from "express";
import { createEmail, getEmails, deleteEmail } from '../controller/emailController.js'; // Adjust the import path as necessary

const router = express.Router();

// POST: Create a new email entry
router.post('/', createEmail);

// GET: Retrieve all email entries
router.get('/', getEmails);

// DELETE: Delete a specific email entry by ID
router.delete('/:id', deleteEmail);

export default router;
