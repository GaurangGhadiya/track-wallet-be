import express from "express";
import { createUser, userProfile, verifyUser } from "../controllers/userController.js";
import { loginValidation, otpValidation, profileValidation } from "../validation/user.js";

const router = express.Router();

router.post("/sent-otp",loginValidation, createUser);
router.post("/verify-otp",otpValidation, verifyUser);
router.post("/update-profile",profileValidation, userProfile);

export default router;
