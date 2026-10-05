import { CustomError, throwError } from '../../../config/ErrorHandler';
import db from '../../../config/db.connection'
import { Request , Response , NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Utils from '../../Helpers/Utils';

class SignUp{
    public async register(req:Request,res:Response,next:NextFunction){
        try{
            let {userName,userEmail,userPhone,userPassword,oAuthSts} = req.body;
            userName = userName.trim();
            userEmail = Utils.Encode(userEmail.trim(),next);;
            userPhone = Utils.Encode(userPhone.trim(),next);;
            userPassword = Utils.Encode(userPassword.trim(),next);;
            // check Email and Phone already exists
            let checkEmail = await Utils.CheckUserEmail(userEmail, next);
            let checkPhone = await Utils.CheckUserPhone(userPhone,next);

            if(checkEmail){
                return res.status(200).json({
                    status:false,
                    message:"User Email Already Exists",
                })
            }

            if(checkPhone && !oAuthSts){
                return res.status(200).json({
                    status:false,
                    message:"User Phone Already Exists",
                })
            }


            const [insertquery,__]=await db.query("INSERT INTO UsersMaster(Name,Email,Phone,Password) VALUES(?,?,?,?)",[userName,userEmail,userPhone,userPassword]);

            if(insertquery.affectedRows){
                let payload = {subject : insertquery.insertId}
                let token = jwt.sign(payload,Utils.getSecretKey(next))
                return res.status(200).json({
                    status:true,
                    token:token,
                    isLogin:true
                })
             }

             const error:CustomError = throwError("There is some problem while Sign Up !!",404);
             next(error);
            
        }catch(e:any){
            const error:CustomError = throwError(e,404);
            next(error);
        }       
    }
}
export default new SignUp();