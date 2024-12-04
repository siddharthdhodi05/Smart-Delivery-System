import express from 'express';
import { createAssignment, getAssignments } from '../controllers/assignmentController.js';

const router = express.Router();

// Get all assignments
router.get('/', getAssignments);

// Create a new assignment
router.post('/', createAssignment);

export default router;
