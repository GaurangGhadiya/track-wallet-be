import express from "express";
import { createUser, userProfile, verifyUser } from "../controllers/userController.js";
import { loginValidation, otpValidation, profileValidation } from "../validation/user.js";
import upload from "../common/upload.js";

const router = express.Router();

router.post("/sent-otp",loginValidation, createUser);
router.post("/verify-otp",otpValidation, verifyUser);
router.post("/update-profile",upload.single("profileImage"),profileValidation, userProfile);

export default router;
