import { Request, Response, NextFunction } from "express";
import { throwError, CustomError } from "../../config/ErrorHandler";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { log } from "console";
dotenv.config();

class AuthMiddleware {
  // VALIDATE USER TOKEN
  public async validateToken(req: any, res: Response, next: NextFunction) {
    try {
      let secretkey: any = process.env.JWT_SECRET_KEY;
      if (!req.headers.authorization) {
        return res.status(401).send({
          status: false,
          message: "Unauthorized Request",
        });
      }

      let token = req.headers.authorization.split(" ")[1];
      if (token == "null") {
        return res.status(401).send({
          status: false,
          message: "Unauthorized Request",
        });
      }
      let payload: any = jwt.verify(token, secretkey);
      if (!payload) {
        return res.status(401).send({
          status: false,
          message: "Unauthorized Request",
        });
      }

      req.userId = payload.subject;
      next();
    } catch (err) {
      const error: CustomError = throwError(
        "Something went Wrong , Please try again later !!",
        404
      );
      next(error);
    }
  }
}

export default new AuthMiddleware();
