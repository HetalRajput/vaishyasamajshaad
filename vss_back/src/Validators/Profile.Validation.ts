import { Request, Response ,NextFunction } from 'express'; 
import {throwError , CustomError} from "../../config/ErrorHandler";

class AuthValidation{
  public async validate_GetUserDetailById_Body(req:Request, res:Response, next:NextFunction){
    try{
      if(!req.body.userId){
          return res.status(400).json({
            status: false,
            message: 'Invalid Request Parameters'
          });
      }
      next();
    }catch(err){
      const error:CustomError = throwError("Something went Wrong , Please try again later !!",404);
      next(error);
    }
  }
 
  public async validate_updateProfile_Body(req:Request, res:Response, next:NextFunction){
    try{
      if(!req.body.userId || !req.body.userName || !req.body.userEmail || !req.body.userPhone || !req.body.userDob || !req.body.userLocation){
          return res.status(400).json({
            status: false,
            message: 'Invalid Request Parameters'
          });
      }
      next();
    }catch(err){
      const error:CustomError = throwError("Something went Wrong , Please try again later !!",404);
      next(error);
    }
  }
 
}

export default new AuthValidation();