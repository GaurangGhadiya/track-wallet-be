import express from "express";
import { createUser, userProfile, verifyUser } from "../controllers/userController.js";
import { loginValidation, otpValidation, profileValidation } from "../validation/user.js";
import upload from "../common/upload.js";
import { addCategory, deleteCategory, getCategory, getCategoryById, updateCategory } from "../controllers/categoryController.js";
import { addCategoryValidation, subCategoryValidation, updateCategoryValidation, updateSubCategoryValidation } from "../validation/category.js";
import { addSubCategory, deleteSubCategory, getSubCategory, getSubCategoryById, updateSubCategory } from "../controllers/subCategoryController.js";

const router = express.Router();

router.post("/sent-otp",loginValidation, createUser);
router.post("/verify-otp",otpValidation, verifyUser);
router.post("/update-profile",upload.single("profileImage"),profileValidation, userProfile);

router.get("/get-category", getCategory);
router.get("/get-category/:id", getCategoryById);
router.post("/add-category",addCategoryValidation, addCategory);
router.get("/delete-category/:id",deleteCategory);
router.post("/update-category",updateCategoryValidation, updateCategory);

router.get("/get-sub-category", getSubCategory );
router.get("/get-sub-category/:id",getSubCategoryById);
router.post("/add-sub-category",subCategoryValidation, addSubCategory);
router.get("/delete-sub-category/:id",deleteSubCategory);
router.post("/update-sub-category",updateSubCategoryValidation, updateSubCategory);




export default router;
