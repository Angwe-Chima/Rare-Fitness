import express from "express";
const router = express.Router();

import { register, login, logout , checkEmail, resetPassword} from "../controller/auth.js";

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/check-email', checkEmail);
router.post('/reset-password', resetPassword);


export default router;
