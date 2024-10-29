import express from 'express';
import { handleSignup, handleLogin } from '../controllers/authController.js';

const router = express.Router();

// Signup Route
router.post('/signup', handleSignup);

// Login Route
router.post('/login', handleLogin);

export default router;