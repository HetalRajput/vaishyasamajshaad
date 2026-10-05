import { Request, Response ,NextFunction } from 'express'; 
import {throwError , CustomError} from "../../config/ErrorHandler";

class AuthValidation{
  public async validateSignupBody(req:Request, res:Response, next:NextFunction){
    try{
      // if(!req.body.userName || !req.body.userEmail || !req.body.userPhone || !req.body.userPassword){
      //     return res.status(400).json({
      //         status: false,
      //         message: 'Invalid Request Parameters'
      //     });
      // }
      if(req.body.oAuthSts){
        if(!req.body.userName || !req.body.userEmail){
          return res.status(400).json({
              status: false,
              message: 'Invalid Request Parameters'
          });
      }
      }else{
        if(!req.body.userName || !req.body.userEmail || !req.body.userPhone || !req.body.userPassword){
            return res.status(400).json({
                status: false,
                message: 'Invalid Request Parameters'
            });
        }
      }

      next();
    }catch(err){
      const error:CustomError = throwError("Something went Wrong , Please try again later !!",404);
      next(error);
    }
  }
  public async validateLoginBody(req:Request, res:Response, next:NextFunction){
    try{
      // if(!req.body.userEmail || !req.body.userPassword){
      //     return res.status(400).json({
      //       status: false,
      //       message: 'Invalid Request Parameters'
      //     });
      // }

      if(req.body.oAuthSts){
        if(!req.body.userEmail){
          return res.status(400).json({
            status: false,
            message: 'Invalid Request Parameters'
          });
        }
      }else{
        if(!req.body.userEmail || !req.body.userPassword){
          return res.status(400).json({
            status: false,
            message: 'Invalid Request Parameters'
          });
        }
      }
      
      next();
    }catch(err){
      const error:CustomError = throwError("Something went Wrong , Please try again later !!",404);
      next(error);
    }
  }
}

export default new AuthValidation();