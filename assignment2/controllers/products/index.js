const productServices = require("../../services/products");

const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = productServices;
// get all products
exports.getAllProducts = (_req, res) => {
  const products = getProducts();
  res.status(200).json(products);
};

// get a product by id
exports.getProductById = (req, res) => {
  const product = getProductById(req.params.id);
  res.status(200).json(product);
};

// create a new product
exports.createProduct = (req, res) => {
  const newProduct = createProduct(req.body);
  res.status(201).json(newProduct);
};

// update a product
exports.updateProduct = (req, res) => {
  const updatedProduct = updateProduct(req.params.id, req.body);
  res.status(200).json(updateProduct);
};

// delete a product
exports.deleteProduct = (req, res) => {
  const deletedProduct = deleteProduct(req.params.id);
  res.status(200).json(deletedProduct);
};
