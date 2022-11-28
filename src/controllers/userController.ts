import { Request, Response, NextFunction } from "express";
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
import { body, validationResult } from "express-validator";
import config from "config";
import * as jwt from "jsonwebtoken";
import User from "../models/userModel"


export const addNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
 
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log("validation failed");
      console.log(errors);
      return res.status(400).json({
        errors: errors.array(),
        message:
          "Enter username, email and password at least 6 characters long",
      });
    }

    const { login, email, password } = req.body.data;

    const hashedpassword = await bcrypt.hash(password, 12);

    const user = await new User({
      name: login,
      email: email,
      password: hashedpassword,
      role: "user",
    });
    await user.save();

    const token = await jwt.sign(
      { userId: user._id },
      config.get("jwtSecretCode"),
      {
        expiresIn: "8h",
      }
    );

    console.log("user have been created", email, password);
    res
      .status(201)
      .json({ token, userId: user._id, user:{login: user.name, email: user.email}})
      .end();
  } catch (err) {
    return res.status(400).json({
      message: "Such user already exists",
    });
  }
};

export const logInUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log("validation failed");
    console.log(errors);

    return res.status(400).json({
      errors: errors.array(),
      message:
        "Incorrect login data,enter email and password at least 6 characters long",
    });
  }

  const { email, password } = req.body.data;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "There is no such user" }).end();
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return res.status(400).json({ message: "Wrong password" });
  }

  const token = await jwt.sign(
    { userId: user._id },
    config.get("jwtSecretCode"),
    {
      expiresIn: "8h",
    }
  );
  console.log("user have been log in ", email, password);
  
  res
    .status(201)
    .json({ token,  user:{login: user.name, email: user.email, userId:user._id}})
    .end();
};

export const showUserInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) =>{
  //сначала проходим через isAuthorized
  const userId = req.body.userData.userId;

 const user = await User.findById(userId);


if (!user) {
  res.status(404).json({ message: "Could not found such user" });
  return next(new Error(`Could not found such user`));
}

res.status(200).json( {user: {
  id: user._id,
  name: user.name, 
  email: user.email
}}).end();

}