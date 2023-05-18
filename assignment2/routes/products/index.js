const express = require("express");
const productController = require("../../controllers/products");
const productValidator = require("../../validators/products");
const { checkValidationResult } = require("../../middlewares/checkValidation");

const router = express.Router();

// get all products
router
  .route("/")
  .get(productController.getAllProducts)
  .post(
    productValidator.createProductValidator,
    checkValidationResult,
    productController.createProduct
  );

// get a product by id
router
  .route("/:id")
  .get(productController.getProductById)
  .patch(
    productValidator.updateProductValidator,
    checkValidationResult,
    productController.updateProduct
  )
  .delete(productController.deleteProduct);

module.exports = router;
