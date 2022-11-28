
import { Request, Response, NextFunction, Errback } from "express";
interface Error {
  status?: number;
  message?: string;
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Something went wrong" });
};

export const pageNotFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404);
};