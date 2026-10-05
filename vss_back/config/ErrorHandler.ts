import { Request, Response ,NextFunction } from "express";

// INTERFACE FOR ERROR
interface CustomError extends Error {
    statusCode?: number;
}
const throwError = (message: string, statusCode: number):CustomError => {
    const error: CustomError = new Error(message);
    error.statusCode = statusCode;
    return error;
};

const GlobalErrorHandler = (error:CustomError,req:Request,res:Response,next:NextFunction)=>{
    error.statusCode = error.statusCode ?? 500;

    // HANDLING ERROR FOR PRODUCTION
    if(process.env.NODE_ENV === 'production'){
        return res.status(error.statusCode).json({
            status: false,
            prod:true,
            message: "Something went Wrong , Please try again later !!",
        })
    }
    // HANDLING ERROR FOR DEVELOPMENT
    return res.status(error.statusCode).json({
        status: false,
        message: error.message,
        stack: error.stack
    })
}

export {throwError , CustomError , GlobalErrorHandler};