import express from "express";
const router = express.Router();
import ProfileService from "../Services/Profile.Service";
import AuthenticationValidation from "../Validators/Authentication.Validation";
import ProfileValidation from "../Validators/Profile.Validation";
import AuthMiddleware from "../Middlewares/Auth.Middleware";

router.route('/getUserdetailsById').post(ProfileValidation.validate_GetUserDetailById_Body,ProfileService.getUserDetailsById);
router.route('/updateProfile').post(ProfileValidation.validate_updateProfile_Body, ProfileService.updateProfile)

router.route('/register').post(ProfileService.register)
router.route('/gettransaction').get(ProfileService.getTransaction)
router.route('/getVisitors').get(ProfileService.getVisitors)
router.route('/getGroomBride').get(ProfileService.getGroomBride)
router.route('/getallprofile').get(ProfileService.getallprofile)
router.route('/:val/getrecommenduser').get(ProfileService.getrecommenduser)
router.route('/:id/getAllUsers').get(ProfileService.getAllUsers)
router.route('/:id/:status/ChnageStatus').get(ProfileService.ChnageStatus)
router.route('/wishlist').post(ProfileService.addToWishlist)
router.route('/removewishlist').post(ProfileService.removewishlist)
router.route('/getwishlist').post(ProfileService.getWishList)
router.route('/api/search').post(ProfileService.searchBySpecifications)
router.route('/api/uploadFile').post(ProfileService.uploadFile);
router.route('/vss/support').post(ProfileService.SendMail);
router.route('/vss/OnUpdateMails').post(ProfileService.OnUpdateMails);
router.route('/vss/SendMailToUser').post(ProfileService.SendMailToUser);
router.route('/:id/userapprove').get(ProfileService.UserApprove);
router.route('/getperfectmatches/:gender/:gotra/:dob').get(ProfileService.getPerfectMatches);

export default router;