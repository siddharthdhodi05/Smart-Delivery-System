import express from 'express';
import { getPartners, createPartner } from '../controllers/partnerController.js';

const router = express.Router();

router.get('/', getPartners);      // Get all partners
router.post('/', createPartner);  // Add a new partner

export default router;
