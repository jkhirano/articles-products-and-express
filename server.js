// brings express into this framework
const express = require("express");
// middleware
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
// creates new instance of express
const app = express();
const productsRoutes = require("./routes/products");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

const PORT = 8080;

// app.use(express.static("./public/"));

// application middleware = this function is run before any of the function below (ex: app.get)
app.use(bodyParser.urlencoded({ extended: false }));
// "extname" lets you shorten the extension name
app.engine(".hbs", exphbs({ extname: ".hbs" }));
// allows you to set variable to ".hbs"
// lets you do res.render
app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  console.log(req.method);
  console.log(req.url);

  // always need res.send or res.end to end it
  // when you type "node server.js" in the terminal, the localhost:8080 will show "Hello World"
  res.send("Hello World");
});

app.use("/products", productsRoutes);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
