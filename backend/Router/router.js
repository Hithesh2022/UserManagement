
import Router from "express";
const router = Router();

import { isApiAuthenticated } from "../middlewares/authMiddleware.js";
import { showdetails } from "../controllers/showdetail.js"
import { login } from "../controllers/login.js"
import { signup } from "../controllers/signup.js"
import { forgotPassword } from "../controllers/forgotPassword.js"
import { resetPassword } from "../controllers/reset.js"
//import { verifyEmail } from "../controllers/login.js"
import { validateLogin, validateSignup, forgetPasswordValidator } from '../validators/AuthValidators.js';
import { validationErrorHandler } from '../middlewares/validationErrorHandler.js';

    
router.post("/login", validateLogin, validationErrorHandler, login);
router.get("/login/getdetails", isApiAuthenticated, showdetails);
router.post("/signup", validateSignup, validationErrorHandler, signup);
router.post("/forgot-password", forgetPasswordValidator, validationErrorHandler, forgotPassword);  //For Sending the password reset request
router.post("/reset-password", resetPassword);   // For Reseting the password
export default router;
