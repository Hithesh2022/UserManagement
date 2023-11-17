
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
import { Adminlogin } from "../controllers/Admin/Adminlogin.js"
import { Adminsignup } from "../controllers/Admin/Adminsignup.js"
import { isAdmin } from "../middlewares/isAdmin.js"
router.post("/login", validateLogin, validationErrorHandler, login);

router.post("/signup", validateSignup, validationErrorHandler, signup);
router.post("/forgot-password", forgetPasswordValidator, validationErrorHandler, forgotPassword);  //For Sending the password reset request
router.post("/reset-password", resetPassword);   // For Reseting the password


router.get("/Admin/login/getdetails", isApiAuthenticated, isAdmin,showdetails);
router.post("/Admin/login", validateLogin, validationErrorHandler, Adminlogin);
router.post("/Admin/signup", validateSignup, validationErrorHandler, Adminsignup);
export default router;
