const products = require("../../products");

const getAllProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id == id);
  res.json(product);
};

const createProduct = (req, res) => {
  products.push(req.body);
  res.json(products);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};
