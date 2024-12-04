// src/routes/orderRoutes.js

import express from 'express';
import { getOrders, createOrder, updateOrderStatus, assignOrder } from '../controllers/orderController.js';

const router = express.Router();

// Route to get all orders
router.get('/', getOrders);

// Route to create a new order
router.post('/', createOrder);

// Route to update order status
router.put('/:id/status', updateOrderStatus);

// Route to assign an order to a partner
router.put('/:id/assign', assignOrder);

export default router;
