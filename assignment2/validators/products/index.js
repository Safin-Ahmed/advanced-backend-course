const { body, query, param } = require("express-validator");

// create user validator
exports.createProductValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .bail()
    .isString()
    .withMessage("Name must be a string"),

  body("price")
    .trim()
    .notEmpty()
    .withMessage("price is required")
    .bail()
    .isNumeric()
    .withMessage("Invalid price format"),
];

// update user validator
exports.updateProductValidator = [
  body("name")
    .optional()
    .trim()
    .isString()
    .withMessage("Name must be a string"),

  body("price")
    .optional()
    .trim()
    .isNumeric()
    .withMessage("Invalid price format"),
];
