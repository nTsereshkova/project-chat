const express = require("express");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
// добавить контроллеры

const router = express.Router();

router.post(
  "/auth/sign"
  // [
  //     body("data.name").notEmpty(),
  //     body("data.email").isEmail().normalizeEmail(),
  //     body("data.password").isLength({
  //       min: 6,
  //       max: 30,
  //     }),
  //   ],
  // тут добавить контроллер
);

router.post(
  "auth/login"
  // [
  //     body("data.email").isEmail().normalizeEmail(),
  //     body("data.password").isLength({
  //       min: 6,
  //       max: 30,
  //     }),
  //   ],

  // тут добавить контроллер
);

module.exports = router;
