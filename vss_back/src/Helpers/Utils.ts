import { CustomError, throwError } from '../../config/ErrorHandler';
import db from '../../config/db.connection'
import { NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

class Utils{

    public async CheckUserEmail(userEmail:string,next:NextFunction){
        try{
            const [user,_]=await db.query("Select Id from UsersMaster where Email = ?",[userEmail])
            if(user.length > 0){
                return true;
            }
            return false;
        }catch(e:any){
            const error:CustomError = throwError(e,404);
            next(error);
        }       
    }
    public async CheckUserPhone(userPhone:string,next:NextFunction){
        try{
            const [user,_]=await db.query("Select Id from UsersMaster where Phone = ?",[userPhone])
            if(user.length > 0){
                return true;
            }
            return false;
        }catch(e:any){
            const error:CustomError = throwError(e,404);
            next(error);
        }       
    }

    public  getSecretKey(next:NextFunction){
        try{
            let secretkey:any = process.env.JWT_SECRET_KEY
            return secretkey;   
        }catch(e:any){
            const error:CustomError = throwError(e,404);
            next(error);
        }
       
    }

    public async getUserDetailById(userId:string,next:NextFunction){
        try{
            const [user,_]=await db.query("Select * from UsersMaster where Id = ?",[userId])
            return user;
        }catch(e:any){
            const error:CustomError = throwError(e,404);
            next(error);
        }       
    }

    public async getUserFamilyDetailById(userId:string,next:NextFunction){
        try{
            const [userfamily,_]=await db.query("Select * from FamilyDetails where UserId = ?",[userId])
            return userfamily;
        }catch(e:any){
            const error:CustomError = throwError(e,404);
            next(error);
        }       
    }

    public async getUserDetailByEmail(userEmail:string,next:NextFunction){
        try{
            const [user,_]=await db.query("Select * from UsersMaster where Id = ?",[userEmail])
            return user;
        }catch(e:any){
            const error:CustomError = throwError(e,404);
            next(error);
        }       
    }

    public async getUserNameById(userId:string,next:NextFunction){
        try{
            const [user,_]=await db.query("Select Name from UsersMaster where Id = ?",[userId])
            if(user.length > 0){
                return user[0].Name;
            }
        }catch(e:any){
            const error:CustomError = throwError(e,404);
            next(error);
        }       
    }

    public async getUserEmailById(userId:string,next:NextFunction){
        try{
            const [user,_]=await db.query("Select Email from UsersMaster where Id = ?",[userId])
            if(user.length > 0){
                return user[0].Email;
            }
        }catch(e:any){
            const error:CustomError = throwError(e,404);
            next(error);
        }       
    }

    public async getUserPhoneById(userId:string,next:NextFunction){
        try{
            const [user,_]=await db.query("Select Phone from UsersMaster where Id = ?",[userId])
            if(user.length > 0){
                return user[0].Phone;
            }
        }catch(e:any){
            const error:CustomError = throwError(e,404);
            next(error);
        }       
    }

    public async getName(Id:string | number,TableName:string,next:NextFunction){
        try{
            const [user,_]=await db.query(`Select Name from ${TableName} where Id = ?`,[Id])
            if(user.length > 0){
                return user[0].Name;
            }
        }catch(e:any){
            const error:CustomError = throwError(e,404);
            next(error);
        }       
    }

    public Encode(str: string,next:NextFunction) {
        try{
            for (let i = 0; i <= 3; i++) {
                str = Buffer.from(str).toString("base64");
                str = str.split("").reverse().join("");
            }
            return str;
        }catch(e:any){
            const error:CustomError = throwError(e,404);
            next(error);
        }    
    }
    
    public Decode(str: string,next:NextFunction) {
        try{
            for (let i = 0; i <= 3; i++) {
                str = str.split("").reverse().join("");
                str = Buffer.from(str, "base64").toString("utf-8");
            }
            return str;
        }catch(e:any){
            const error:CustomError = throwError(e,404);
            next(error);
        }    
    }

    public async getGroomBrideUser(next:NextFunction){
        try{
            const [user,_]=await db.query(`SELECT Id, Occupation, Photo,Gender, Name, Location 
            FROM UsersMaster 
            WHERE Location IS NOT NULL AND Location <> '' 
              AND Occupation IS NOT NULL AND Occupation <> '' AND IsActive =1
            LIMIT 10;
            `)
            return user;
        }catch(e:any){
            const error:CustomError = throwError(e,404);
            next(error);
        }       
    }
    public async getallprofile(next:NextFunction){
        try{
            const [user,_]=await db.query(`SELECT Id, Occupation, Photo,Gender, Name,DOB ,Location
            FROM UsersMaster WHERE IsActive = 1 AND ApproverStatus=1
            `)
            return user;
        }catch(e:any){
            const error:CustomError = throwError(e,404);
            next(error);
        }       
    }
    public async getrecommenduser(Sex:any,next:NextFunction){
    
        try{
            let Cond:any = '';
            if(Sex!=3){
                Cond = `AND Gender = ${Sex}`
            }
            const [user,_]=await db.query(`SELECT Id,DOB, Occupation, Photo,Gender, Name, Location 
            FROM UsersMaster 
            WHERE ApproverStatus=1  ${Cond} AND IsActive=1 LIMIT 4
            `)
            return user;
        }catch(e:any){
            const error:CustomError = throwError(e,404);
            next(error);
        }       
    }

    public async getAllUsers(Status:any,next:NextFunction){
        try{
            let Condition = `IsActive = ${Status} AND ApproverStatus <>0`;
            if(Status==2){

                Condition = `ApproverStatus = 0 AND GovermentDocId <> ''`;
            }
            const [user,_]=await db.query(`Select Id,Occupation,Photo,Name,Location,IsActive,ApproverStatus,JoinedOn from UsersMaster where ${Condition}`)
            return user;
        }catch(e:any){
            const error:CustomError = throwError(e,404);
            next(error);
        }       
    }

    public getDateYearsAgo(ago:any) {
        const currentDate = new Date();
        const pastDate = new Date(currentDate.setFullYear(currentDate.getFullYear() - ago));
      
        const year = pastDate.getFullYear();
        const month = String(pastDate.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
        const day = String(pastDate.getDate()).padStart(2, '0');
      
        return `${year}-${month}-01`;
      }
      public getPastAndFutureYears(dateString:any) {
        // Parse the input date string
        let [year, month, day] = dateString.split('-').map(Number);
        
        // Create a Date object based on the input date
        let date = new Date(year, month - 1, day); // Note: month - 1 because months are 0-indexed in JavaScript
        
        // Get the current year
        let currentYear = date.getFullYear();
        
        // Calculate 2 years past and 1 year ahead
        let twoYearsPast = currentYear - 2;
        let oneYearAhead = currentYear + 1;
        
        // Return the results in an array
        return [twoYearsPast, oneYearAhead];
    }
    
}
export default new Utils();