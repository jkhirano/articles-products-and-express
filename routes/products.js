const express = require("express");
// this creates a brand new router just for this file
const router = express.Router();
// this pulls info from db/products.js
const collection = require("../db/products.js");
// console.log(">> collection: ", collection.all());

// GET - RETURNS THE ENTIRE PRODUCTLIST
// localhost:8080/products
router.get("/", (req, res) => {
  let allProducts = collection.getAll();
  let msg = {};

  if (allProducts.length < 1) {
    msg.errorMessage = "No products available";
  }
  res.render("products/index", { products: allProducts, error: msg });
});

let msg = {};

// GET - RETURNS TEMPLATE FOR CREATING NEW PRODUCT
router.get("/new", (req, res) => {
  if (!msg) {
    res.render("products/new", { error: msg });
  } else {
    res.render("products/new", { error: msg });
  }
});

// GET - RETURNS ITEM BY ID
router.get("/:id", (req, res) => {
  let productId = req.params.id;
  let product = collection.getProduct(productId);
  res.render("products/product", { products: product });
});

// GET - RETURNS TEMPLATE FOR EDITING PRODUCT
router.get("/:id/edit", (req, res) => {
  let productId = req.params.id;
  let product = collection.getProduct(productId);
  res.render("products/edit", { products: product });
});

// POST - ADDS A NEW ITEM (OBJ) TO THE PRODUCTLIST
// localhost:8080/products
router.post("/", (req, res) => {
  let body = req.body;
  //   console.log(req.body);
  let addProducts = collection.addProduct(
    body.name,
    body.price,
    body.inventory
  );

  //   if (!isNaN(body.name) || isNaN(body.price) || isNaN(body.inventory)) {
  if (!req.body.name) {
    res.redirect("/products/new");
    msg.errorMessage = "Missing product name.";
  } else {
    msg = {};
    res.redirect("/products");
  }
});

// PUT - EDITS AN ITEM (OBJ)
router.put("/:id", (req, res) => {
  let product = collection.getProduct(req.params.id);
  //   console.log(product);
  //   console.log(req.body);
  collection.editProduct(req.params.id, req.body);
  res.redirect(`/products/${req.params.id}`);
});

// DELETE - DELETES AN ITEM (OBJ) BY ID
//localhost:8080/products/:id
router.delete("/:id", (req, res) => {
  collection.deleteProduct(req.params.id);
  res.redirect("/products");
});

module.exports = router;
