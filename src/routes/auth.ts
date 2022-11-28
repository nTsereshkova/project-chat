import express from "express";
import bcrypt from "bcrypt";
import  { body, validationResult } from "express-validator";
import { addNewUser,logInUser } from "../controllers/userController";

const router = express.Router();

router.post(
  "/auth/sign",
  [
      body("data.login").notEmpty(),
      body("data.email").isEmail().normalizeEmail(),
      body("data.password").isLength({
        min: 6,
        max: 30,
      }),
    ],
  addNewUser
);

router.post(
  "/auth/login",
  [
      body("data.email").isEmail().normalizeEmail(),
      body("data.password").isLength({
        min: 6,
        max: 30,
      }),
    ],
logInUser
);

export default router;
