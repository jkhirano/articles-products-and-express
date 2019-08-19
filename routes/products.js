const express = require("express");
// this creates a brand new router just for this file
const router = express.Router();
// this pulls info from db/products.js
const collection = require("../db/products.js");
// console.log(">> collection: ", collection.all());

// localhost:8080/products
// returns the entire productList
router.get("/", (req, res) => {
  let allProducts = collection.all();
  // res.render = handlebar installation
  res.render("products", { products: allProducts });
});

// localhost:8080/products
// adds a new item to the productList
// products.add({ ...});
router.post("/", (req, res) => {
  console.log(req.body);
  let body = req.body;
  let adddProducts = collection.add(body.name, body.price, body.inventory);
  //   if (
  //     typeof name === "string" ||
  //     typeof price === "number" ||
  //     typeof inventory === "number"
  //   ) {
  //     res.redirect("/products");
  //   } else {
  //     res.redirect("/products/new");
  //   }
  res.send("Product added!");
});

// returns the correct object from the productList
// products.getByTitle
router.get("/:id", (req, res) => {
  //
});

// finds an article in the collection by its title, if found - updates the article based on object passed as the second parameter then returns `true`
// in the example below, it would change the title.
// if the article is not found, returns `false`
// products.editByTitle("The%20Best%20Magpie%20Developer%20of%202016", {
//   title: "..."
// });

//localhost:8080/products/:id
router.delete("/:id", (req, res) => {
  //   console.log(req.params.id);
  products = products.filter(current => {
    return current !== req.params.id;
  });
  //   console.log(products);

  res.send(products);
});

module.exports = router;
