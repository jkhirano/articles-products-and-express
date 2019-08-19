let productList = [
  {
    id: 1,
    name: "Bacon",
    price: 5,
    inventory: 10
  }
];

let productId = 2;

function all() {
  return productList;
}

function add(name, price, inventory) {
  let product = {};
  product.id = productId++;
  product.name = name;
  product.price = Number(price);
  product.inventory = Number(inventory);
  productList.push(product);
  return product;
}

module.exports = {
  all,
  add
  // getByTitle: _getByTitle,
  // editByTitle: _editByTitle
};
