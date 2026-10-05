import { CustomError, throwError } from '../../../config/ErrorHandler';
import db from '../../../config/db.connection'
import { NextFunction, Request , Response  } from 'express';
import Utils from '../../Helpers/Utils';
import jwt from 'jsonwebtoken';

class Login{
    public async Login(req:Request,res:Response,next:NextFunction){
        try{
            let {userEmail,userPassword,oAuthSts} = req.body;
            userEmail = Utils.Encode(userEmail.trim(),next);
            userPassword = Utils.Encode(userPassword.trim(),next);
            // check Email and Phone already exists
            let checkEmail = await Utils.CheckUserEmail(userEmail, next);

            if(!checkEmail){
                return res.status(200).json({
                    status:false,
                    message:"User Email not registered",
                })
            }
            
            let squery = "";
            let dbparams:any = []
            if(oAuthSts){
                squery = "Select * from UsersMaster where Email = ?"
                dbparams = [userEmail]
            }else{
                squery = "Select * from UsersMaster where Email = ? and Password = ?"
                dbparams = [userEmail,userPassword]
            }
            const [user,_]=await db.query(squery,dbparams);

            if(user.length > 0){
                let payload = {subject : user.Id}
                let userfamily = await Utils.getUserFamilyDetailById(user[0].Id, next);
                user[0].familyDetails = userfamily;
                if(userfamily.length>0){
                    userfamily[0].FatherPhone = Utils.Decode(userfamily[0].FatherPhone,next)
                }
                let token = jwt.sign(payload,Utils.getSecretKey(next))
                return res.status(200).json({
                    status:true,
                    message:"User Fetch Successfully",
                    data:user,
                    token:token,
                    isLogin:true,
                })
            }

            return res.status(201).json({
                status:false,
                message:"Invalid Credentials",
            })
            
        }catch(e:any){
            const error:CustomError = throwError(e,404);
            next(error);
        }  
    }
}
export default new Login();