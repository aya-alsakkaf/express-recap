const express = require("express");
const productsRouter = require("./api/products/products.routes");

const app = express();

app.use(express.json());

app.use("/products", productsRouter);

app.listen(8000, () => {
  console.log("you are connected");
});
