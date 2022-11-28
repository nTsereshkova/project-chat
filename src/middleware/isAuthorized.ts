import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import config from "config";

interface TokenInterface {
  userId: string;
  iat: number;
  exp: number;
}

const isAuthorized = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.headers.authorization) {
    try {
      const token: string = req.headers.authorization.split(" ")[1]; // Authorization: 'Bearer TOKEN'

      if (!token) {
        res.status(401).json({ message: "Authentication failed!" });
        return next(new Error("Authentication failed!"));
      }
      const decodedToken: string | jwt.JwtPayload = await jwt.verify(
        token,
        config.get("jwtSecretCode")
      );
      console.log(" operation is authorized");
      req.body.userData = { userId: (decodedToken as TokenInterface).userId };
      next();
    } catch (err) {
      return next(err);
    }
  } else {
    res.status(401).json({ message: "Authentication failed!" });
    console.log('Authentication failed!')
    return next(new Error("Authentication failed!"));
 
  }
};

export default isAuthorized;