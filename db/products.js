let productList = [];

let productId = 1;

function getAll() {
  return productList;
}

function addProduct(name, price, inventory) {
  // if (!isNaN(name) || isNaN(price) || isNaN(inventory)) {
  //   return false;
  // }

  let product = {};
  product.id = productId++;
  product.name = name;
  product.price = parseInt(price);
  product.inventory = parseInt(inventory);
  productList.push(product);
  return product;
}

function getProduct(id) {
  let productId = id;
  // console.log(productId);
  let product = productList.find(item => {
    return item.id === parseInt(productId);
  });
  // console.log(product);
  return product;
}

function editProduct(id, data) {
  let product = getProduct(id);
  // console.log(product);

  if (!product) {
    return false;
  }

  for (var key in data) {
    product[key] = data[key];
  }
}

function deleteProduct(id) {
  if (!product) {
    false;
  }
  productList = productList.filter(current => {
    return current.id !== parseInt(id);
  });
  return getAll();
}

module.exports = {
  getAll,
  addProduct,
  getProduct,
  editProduct,
  deleteProduct
};
