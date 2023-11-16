import express from "express";
import router from express.Router();

router.post("/login", validateLogin, validationErrorHandler, login);
router.post("/signup", validateSignup, validationErrorHandler, signup);
router.post("/forgot-password", forgetPasswordValidator, validationErrorHandler, forgotPassword);  //For Sending the password reset request
router.post("/reset-password", resetPassword);   // For Reseting the password
export default router;
