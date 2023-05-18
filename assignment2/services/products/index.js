const { v4: uuid } = require("uuid");
const products = require("../../db/db");
const { createError } = require("../../utils/customError");

// get all products
exports.getProducts = () => {
  return products;
};

// get a product by id
exports.getProductById = (id) => {
  const product = products.find((user) => user.id === id);
  if (!product) createError("Product not found", 404);
  return product;
};

// create a new product
exports.createProduct = (newProduct) => {
  console.log(newProduct);
  const id = uuid();
  const product = { id, ...newProduct };
  products.push(product);
  console.log(products);
  return product;
};

// update a product
exports.updateProduct = (id, payload) => {
  const product = this.getProductById(id);

  // update product
  product.name = payload.name || product.name;
  product.email = payload.email || product.email;

  // return updated product
  return product;
};

// delete a product
exports.deleteProduct = (id) => {
  const index = products.findIndex((product) => product.id === id);

  // if product not found
  if (index === -1) createError("Product not found", 404);

  // delete product
  const deletedProduct = products.splice(index, 1);

  // return deleted product
  return deletedProduct;
};
