//Section 2 Reto 3
let products = [];
let id = 0;
function validateAlphabetNumeric(validator) {
  const validateAlphabetNumeric = /^[a-zA-ZñÑáéíóúüÁÉÍÓÚÜ]+[\s\d]/;
  switch (validateAlphabetNumeric.test(validator)) {
    case true:
      return true;
    default:
      alert(`Opciòn invàlida, porfavor ingresa un valor correcto`);
      return false;
  }
}
function validateNumber(validator) {
  const validateNumber = /^\d*$/;
  validateNumber.test(validator);
  switch (validateNumber.test(validator)) {
    case true:
      return true;
    default:
      alert(`Opciòn invàlida, porfavor ingresa un valor correcto`);
      return false;
  }
}
function createProducts() {
  let name, price, amount, description, product;
  do {
    name = prompt("Ingresa el nombre del producto");
    name = name.toLowerCase().trim();
  } while (!(validateAlphabetNumeric(name) && name));
  do {
    price = prompt("Ingresa el precio del producto");
    price = parseFloat(price);
  } while (!(validateNumber(price) && price));
  do {
    amount = prompt("Ingresa la cantidad");
    amount = parseFloat(amount);
  } while (!(validateNumber(amount) && amount));
  do {
    description = prompt("Ingresa una descripción");
    description = description.trim();
  } while (!description);
  id++;
  product = {
    id,
    name,
    price,
    amount,
    description,
  };
  products.push(product);
  alert("Producto agregado con éxito");
  return product;
}
function duplicateProducts() {
  let product, duplicate, originalProduct, counter;
  do {
    product = prompt("Ingrese el nombre del producto que desea");
    product = product.toLowerCase().trim();
  } while (!(validateAlphabetNumeric(product) && product));
  counter = 1;
  originalProduct = products.find((e) => e.name === product);
  if ((originalProduct = product)) {
    id++;
    duplicate = {
      id,
      name: originalProduct.name + " Copy",
      price: originalProduct.price,
      amount: originalProduct.amount,
      description: originalProduct.description,
    };
    while (products.some((e) => e.name == duplicate.name)) {
      duplicate.name = `${originalProduct.name} Copy ${counter++}`;
    }
    products.push(duplicate);
  } else {
    alert("El producto ingresado no existe");
  }
}
createProducts();
duplicateProducts();
duplicateProducts();
duplicateProducts();
console.log(products);
