import express from 'express';
import { registerUser, loginUser, getProfile } from "../controllers/users.controllers.js"
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware, getProfile);

export default router;