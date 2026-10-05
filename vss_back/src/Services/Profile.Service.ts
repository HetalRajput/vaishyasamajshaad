import { CustomError, throwError } from '../../config/ErrorHandler';
import db from '../../config/db.connection'
import { NextFunction, Request, Response } from 'express';
import Utils from '../Helpers/Utils';
import multer from 'multer';
import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads'); // specify the destination folder
    },
    filename: function (filename, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // rename the file with a timestamp and original name
    }
});
const upload = multer({ storage: storage });
class Profile {
    public async getUserDetailsById(req: Request, res: Response, next: NextFunction) {
        try {
            let userId = req.body.userId;
            let user = await Utils.getUserDetailById(userId, next);
            user[0].Email = Utils.Decode(user[0].Email,next)
            user[0].Phone = Utils.Decode(user[0].Phone,next)
            if (user.length > 0) {
                let userfamily = await Utils.getUserFamilyDetailById(userId, next);
                user[0].familyDetails = userfamily;
                if(userfamily.length>0){
                    userfamily[0].FatherPhone = Utils.Decode(userfamily[0].FatherPhone,next)
                }
                return res.status(200).json({
                    status: true,
                    message: "User Fetch Successfully !!",
                    data: user
                })
            }
            return res.status(200).json({
                status: true,
                message: "User not found!!",
                data: user
            })
        } catch (e: any) {
            const error: CustomError = throwError(e, 404);
            next(error);
        }
    }

    public async updateProfile(req: Request, res: Response, next: NextFunction) {
        try {

            let { userId, userName, userEmail, userPhone, ImageName, userGovermentDocId, userDob, userGender, userLocation, userBirthTime, userGotra, userBirthPlace, userHeight, userBodyType, userComplexion, highestEducation, userDegreeType, userOccupation, userDesignation, userAnnual_Income, userWorkPlaceAddress, userFatherName, userFatherPhone, userFatherOccupation, userMotherName, userMotherOccupation, userFamilyAddress, userAnnualIncome, Brother, Sister, BrotherMarried, SisterMarried, MaternalGrandFather, MaternalUncle, AdditionalDetails,Facebook,Instagram,Whatsapp,TransactId,AppSts,LifeType,NanaGotra } = req.body;


            let checkuser = await Utils.getUserDetailById(userId, next);

            if (!checkuser.length) {
                return res.status(404).json({
                    status: false,
                    message: "User Not Found !!",
                });
            }
            if(TransactId){
                await db.query(
                   "INSERT INTO TransactionMaster(UserId, UserName, TransactionId) VALUES(?,?,?)",
                   [userId, userEmail, TransactId]
               );
           }

            let prevUserEmail = checkuser[0].Email;
            let prevUserPhone = checkuser[0].Phone;

            userEmail = Utils.Encode(userEmail.trim(), next);
            userPhone = Utils.Encode(userPhone.trim(), next);

            if (prevUserEmail != userEmail) {
                let checkEmail = await Utils.CheckUserEmail(userEmail, next);
                if (checkEmail) {
                    return res.status(200).json({
                        status: false,
                        message: "User Email Already Exists !!",
                    })
                }
            }

            if (prevUserPhone != userPhone) {
                let checkPhone = await Utils.CheckUserPhone(userPhone, next);
                if (checkPhone) {
                    return res.status(200).json({
                        status: false,
                        message: "User Phone Already Exists !!",
                    })
                }
            }

            const [updateuserquery, __] = await db.query("UPDATE UsersMaster SET Name=?,Email=?,Phone=?,Photo=?,GovermentDocId=?,DOB=?,Gender=?,Location=?,BirthTime=?,Gotra=?,BirthPlace=?,Height=?,BodyType=?,Complexion=?,HighestEduction=?,DegreeType=?,Occupation=?,Designation=?,Annual_Income=?,WorkPlaceAddress=?,Annual_Income=?,Additional_Details=?,Facebook=?,Instagram=?,Whatsapp=?,FirstEdit=?,ApproverStatus=?,LifeType=? WHERE Id = ?", [userName, userEmail, userPhone, ImageName, userGovermentDocId, userDob, userGender, userLocation, userBirthTime, userGotra, userBirthPlace, userHeight, userBodyType, userComplexion, highestEducation, userDegreeType, userOccupation, userDesignation, userAnnual_Income, userWorkPlaceAddress, userAnnualIncome, AdditionalDetails,Facebook,Instagram,Whatsapp,0,AppSts,LifeType, userId]);
            
            if (updateuserquery.affectedRows) {
                userFatherPhone = Utils.Encode(userFatherPhone.trim(), next);

                const [userfamily, _] = await db.query("Select Id from FamilyDetails where UserId = ?", [userId])
                if (userfamily.length > 0) {
                    const [updatefamilyquery, __] = await db.query("UPDATE FamilyDetails SET FatherName = ?,FatherPhone = ?,FatherOccupation =? ,MotherName =?,MotherOccupation=?,FamilyAddress = ?,Brothers=?,Sisters=?,MaternalUncle=?,MaternalGrandFather=?,Married_Brother=?,Married_Sister=?,NanaGotra=? WHERE UserId = ?", [userFatherName, userFatherPhone, userFatherOccupation, userMotherName, userMotherOccupation, userFamilyAddress, Brother, Sister, MaternalUncle, MaternalGrandFather, BrotherMarried, SisterMarried,NanaGotra, userId]);
                    if (updatefamilyquery.affectedRows) {
                        return res.status(200).json({
                            status: true,
                            message: "User Profile Upated Successfully !!"
                        })
                    }
                }
               
                const [insertfamilyquery, __] = await db.query(
                    "INSERT INTO FamilyDetails(UserId, FatherName, FatherPhone, FatherOccupation, MotherName, MotherOccupation, FamilyAddress, Brothers, Sisters, MaternalUncle, MaternalGrandFather, Married_Brother, Married_Sister,NanaGotra) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    [userId, userFatherName, userFatherPhone, userFatherOccupation, userMotherName, userMotherOccupation, userFamilyAddress, Brother, Sister, MaternalUncle, MaternalGrandFather, BrotherMarried, SisterMarried,NanaGotra]
                );

                if (insertfamilyquery.affectedRows) {
                    return res.status(200).json({
                        status: true,
                        message: "User Profile Upated Successfully !!"
                    })
                }

               
            }

            const error: CustomError = throwError("There is some problem while Updating Profile !!", 404);
            next(error);
        } catch (e: any) {
            const error: CustomError = throwError(e, 404);
            next(error);
        }
    }

    public async register(req: Request, res: Response, next: NextFunction) {
        try {
            let data = req.body;
            //    let user = await Utils.getUserDetailById(userId,next);
            //    if(user.length > 0){
            //        let userfamily = await Utils.getUserFamilyDetailById(userId,next);
            //        user[0].familyDetails = userfamily;
            //         return res.status(200).json({
            //             status:true,
            //             message:"User Fetch Successfully !!",
            //             data:user
            //         })
            //    }
            return res.status(200).json({
                status: true,
                message: "Data Found!!",
                data: data
            })
        } catch (e: any) {
            const error: CustomError = throwError(e, 404);
            next(error);
        }
    }

    public async getGroomBride(req: Request, res: Response, next: NextFunction) {
        try {
            let user = await Utils.getGroomBrideUser(next);
            if (user && user.length > 0) {
                return res.status(200).json({
                    status: true,
                    message: "User Fetch Successfully !!",
                    data: user
                })
            }
            return res.status(200).json({
                status: true,
                message: "User not found!!",
                data: user
            })
        } catch (e: any) {
            const error: CustomError = throwError(e, 404);
            next(error);
        }
    }
    public async getrecommenduser(req: Request, res: Response, next: NextFunction) {
        try {
            const Sex = req.params.val
            let user = await Utils.getrecommenduser(Sex, next);
            if (user.length > 0) {
                return res.status(200).json({
                    status: true,
                    message: "User Fetch Successfully !!",
                    data: user
                })
            }
            return res.status(200).json({
                status: true,
                message: "User not found!!",
                data: user
            })
        } catch (e: any) {
            const error: CustomError = throwError(e, 404);
            next(error);
        }
    }
    public async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const Status = req.params.id;
            let user = await Utils.getAllUsers(Status, next);
            if (user.length > 0) {
                return res.status(200).json({
                    status: true,
                    message: "User Fetch Successfully !!",
                    data: user
                })
            }
            return res.status(200).json({
                status: true,
                message: "User not found!!",
                data: user
            })
        } catch (e: any) {
            const error: CustomError = throwError(e, 404);
            next(error);
        }
    }
    public async getTransaction(req: Request, res: Response, next: NextFunction) {
        try {
            const [user,_]=await db.query(`Select * from TransactionMaster`)

            if (user.length > 0) {
                return res.status(200).json({
                    status: true,
                    message: "User Fetch Successfully !!",
                    data: user
                })
            }
            return res.status(200).json({
                status: true,
                message: "User not found!!",
                data: user
            })
        } catch (e: any) {
            const error: CustomError = throwError(e, 404);
            next(error);
        }
    }
    public async getVisitors(req: Request, res: Response, next: NextFunction) {
        try {
            const [user,_]=await db.query(`Select * from UsersMaster WHERE GovermentDocId = ''`)

            if (user.length > 0) {
                return res.status(200).json({
                    status: true,
                    message: "User Fetch Successfully !!",
                    data: user
                })
            }
            return res.status(200).json({
                status: true,
                message: "User not found!!",
                data: user
            })
        } catch (e: any) {
            const error: CustomError = throwError(e, 404);
            next(error);
        }
    }

    public async ChnageStatus(req: Request, res: Response, next: NextFunction) {
        try {
            const Id = req.params.id;
            const status: any = req.params.status;
            const SendMSg = status == 1 ? 'User active' : 'Deleted Successfully !!'
            const user = await db.query(`UPDATE UsersMaster SET IsActive=${status} WHERE Id =${Id}`)
            return res.status(200).json({
                status: true,
                message: SendMSg,
                data: user
            })
        } catch (e: any) {
            const error: CustomError = throwError(e, 404);
            next(error);
        }
    }
    public async UserApprove(req: Request, res: Response, next: NextFunction) {
        try {
            const Id = req.params.id;
            const user = await db.query(`UPDATE UsersMaster SET IsActive=1 , ApproverStatus=1 WHERE Id =${Id}`)
            return res.status(200).json({
                status: true,
                message: 'Approved',
                data: user
            })
        } catch (e: any) {
            const error: CustomError = throwError(e, 404);
            next(error);
        }
    }
    public async addToWishlist(req: Request, res: Response, next: NextFunction) {
        try {
            const Id = req.body.id;
            const userId = req.body.userId;

            // Check if the entry already exists
            const [existingEntry] = await db.query("SELECT * FROM wishlist WHERE UserId = ? AND AddedBy = ?", [Id, userId]);

            if (existingEntry.length > 0) {
                return res.status(201).json({
                    status: false,
                    message: "Already added to wishlist"
                });
            }

            // Insert the new entry if it does not already exist
            const [insertwishlistquery] = await db.query("INSERT INTO wishlist(UserId, AddedBy) VALUES(?,?)", [Id, userId]);

            if (insertwishlistquery.affectedRows) {
                return res.status(200).json({
                    status: true,
                    message: "Added to wishlist !!"
                });
            }

            return res.status(200).json({
                status: true,
                message: 'Added',
                data: userId
            });
        } catch (e: any) {
            const error = throwError(e, 404);
            next(error);
        }

    }
    public async removewishlist(req: Request, res: Response, next: NextFunction) {
        try {
            const Id = req.body.id;
            const userId = req.body.userId;

            // Check if the entry already exists
            const [DeletedEntry] = await db.query("DELETE FROM wishlist WHERE UserId = ? AND AddedBy = ?", [Id, userId]);
            if (DeletedEntry.affectedRows> 0) {
                return res.status(200).json({
                    status: true,
                    message: "Removed from wishlist"
                });
            }
        } catch (e: any) {
            const error = throwError(e, 404);
            next(error);
        }

    }

    public async getWishList(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.body.userId;

            // Check if the entry already exists
            const [existingEntry] = await db.query("SELECT UserId FROM wishlist WHERE AddedBy = ?", [userId]);
            const userIds = existingEntry.map((item: { UserId: any; }) => item.UserId).join(',');
            if (existingEntry.length > 0) {
                // Fetch user data from UsersMaster table using the UserId from the existing entry
                const existingUserId = existingEntry[0].UserId;
                const [userDetails] = await db.query(`SELECT Id,Name,DOB,Photo,Occupation FROM UsersMaster WHERE Id IN (${userIds})`, [existingUserId]);

                return res.status(200).json({
                    status: false,
                    message: "Data found",
                    data: userDetails // Assuming userDetails is not empty and contains user data
                });
            }

            return res.status(201).json({
                status: true,
                message: "No existing entry found"
            });
        } catch (e: any) {
            const error = throwError(e, 404);
            next(error);
        }


    }

    public async searchBySpecifications(req: Request, res: Response, next: NextFunction) {
        try {
            let { AgeFrom , AgeTo, Gender, City, Gotra } = req.body;
                const FromDate = Utils.getDateYearsAgo(AgeFrom);
                const ToDate = Utils.getDateYearsAgo(AgeTo);
            // Use parameterized queries to prevent SQL injection
            const query = `
            SELECT Id, Occupation, Photo, Gender, Name, DOB
            FROM UsersMaster 
            WHERE Gender =  ?
              AND DOB BETWEEN ? AND ?`
                    
            const queryParams = [ Gender,ToDate,FromDate];

            const [userDetails] = await db.query(query, queryParams);
                    
            if (userDetails.length > 0) {
                return res.status(200).json({
                    status: true,
                    message: "Entry found",
                    data: userDetails
                });
            } else {
                return res.status(201).json({
                    status: false,
                    message: "Entry not found",
                    data: null
                });
            }
        } catch (e: any) {
            const error = throwError(e, 500);
            next(error);
        }



    }
    public async uploadFile(req: Request, res: Response, next: NextFunction) {
        upload.single('file')(req, res, (err) => {
            if (err) {
                res.status(400).send({ status: false, message: err.message });
            } else {
                res.send({ status: true, message: 'File uploaded successfully', file: req.file });
            }
        });
    }
    public async getallprofile(req: Request, res: Response, next: NextFunction) {
        try {
            let user = await Utils.getallprofile(next);
            if (user.length > 0) {
                return res.status(200).json({
                    status: true,
                    message: "User Fetch Successfully !!",
                    data: user
                })
            }
            return res.status(200).json({
                status: true,
                message: "User not found!!",
                data: user
            })
        } catch (e: any) {
            const error: CustomError = throwError(e, 404);
            next(error);
        }
    }

    public async SendMail(req: Request, res: Response, next: NextFunction){
        const mailOptions = {
            from: process.env.SMTP_USER,
            replyTo: req.body.from,
            to: process.env.SUPPORT_EMAIL,
            subject:req.body.Msg,
            text:`Email from ${req.body.Name} - ${req.body.Msg}`,
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send(error.toString());
            }
            res.status(200).send('Email sent: ' + info.response);
        });
        
    }

    public async OnUpdateMails(req: Request, res: Response, next: NextFunction){
        const mailOptions = {
            from: req.body.from,
            to:req.body.to, 
            subject:'Email for Approve After Update Profile',
            text:req.body.Msg,
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send(error.toString());
            }
            res.status(200).send('Email sent: ' + info.response);
        });
    }
    public async SendMailToUser(req: Request, res: Response, next: NextFunction){
        const mailOptions = {
            from: req.body.from,
            to:req.body.to, 
            subject:'Email for Approve After Update Profile',
            text:req.body.Msg,
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send(error.toString());
            }
            res.status(200).send('Email sent: ' + info.response);
        });
    }

    public async getPerfectMatches(req: Request, res: Response, next: NextFunction){
        const Gotra = atob(req.params.gotra)
        const DOB = atob(req.params.dob)
        const Gender:any = req.params.gender
        const SearchSex:any = Gender==1 ?2 :1; 
        let AgeVal = DOB.split('T')[0]
        const AgoDate = Utils.getPastAndFutureYears(AgeVal)
        const DatePast = `${AgoDate[0]}-01-01`;
        const DateAhead = `${AgoDate[1]}-12-31`;
        try {
            // Use parameterized queries to prevent SQL injection
            const query = `
            SELECT Id, Occupation, Photo, Gender, Name, DOB
            FROM UsersMaster 
            WHERE Gender = ?
              AND DOB BETWEEN ? AND  ?`;
                    
            const queryParams = [ SearchSex,DatePast,DateAhead];

            const [userDetails] = await db.query(query, queryParams);
                    
            if (userDetails.length > 0) {
                return res.status(200).json({
                    status: true,
                    message: "Entry found",
                    data: userDetails
                });
            } else {
                return res.status(201).json({
                    status: false,
                    message: "Entry not found",
                    data: null
                });
            }
        } catch (e: any) {
            const error = throwError(e, 500);
            next(error);
        }
        
    }


}
export default new Profile();
