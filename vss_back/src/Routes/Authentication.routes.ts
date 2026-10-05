import express from "express";
const router = express.Router();
import LoginService from "../Services/Authentication/Login.Service";
import SignupService from "../Services/Authentication/Signup.Service";
import AuthenticationValidation from "../Validators/Authentication.Validation";
// import AuthMiddleware from "../Middlewares/Auth.Middleware";
// AuthMiddleware.validateToken,

router.route('/login').post(AuthenticationValidation.validateLoginBody,LoginService.Login);
router.route('/signup').post(AuthenticationValidation.validateSignupBody,SignupService.register);

export default router;