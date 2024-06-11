const express = require("express");
const productsRouter = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
} = require("./products.controller.js");

// Get all products /products
productsRouter.get("/", getAllProducts);

// Get one product by ID
productsRouter.get("/:id", getProductById);

// Create a new product
productsRouter.post("/", createProduct);

module.exports = productsRouter;
