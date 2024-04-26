//Section 2 Reto 3
let products = [];
let id = 0;
function validateAlphabetNumeric(validator) {
  const validateAlphabetNumeric = /^[a-zA-ZñÑáéíóúüÁÉÍÓÚÜ][a-zA-ZñÑáéíóúüÁÉÍÓÚÜ\s0-9]*$/;
  if(validateAlphabetNumeric.test(validator)) {
    return true;
  }else{
    alert(`Opciòn invàlida, porfavor ingresa un valor correcto`);
    return false;
  }
}
function validateNumber(validator) {
  const validateNumber = /^\d*$/;
  validateNumber.test(validator);
  if (validateNumber.test(validator)) {
    return true;
  }else{
    alert(`Opciòn invàlida, porfavor ingresa un valor correcto`);
    return false;
  }
}
function unicity(validator){
  let flag = products.some(e=> e.name == validator);
  if(flag){
    alert(`El producto: ${validator} ya existe en nuestra lista de productos, porfavor ingresa un nuevo nombre`)
    return flag;
  }else{
    return false;
  } 
}
function createProducts() {
  let name, price, amount, description, product;
  do {
    name = prompt("Ingresa el nombre del producto");
    name = name.toLowerCase().trim();
  } while (!(validateAlphabetNumeric(name) && name && !unicity(name)));
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
  menu();
  return product;
  
}
function duplicateProducts() {
  let product, duplicate, originalProduct, counter;
  do {
    product = prompt("Ingrese el nombre del producto que deseas duplicar");
    product = product.toLowerCase().trim();
  } while (!(validateAlphabetNumeric(product) && product));
  counter = 1;
  originalProduct = products.find((e) => e.name === product);
  if ((originalProduct.name == product)) {
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
    alert(`El producto ${product}, ha sido copiado con exito`)
  } else {
    alert("El producto ingresado no existe");
  }
  menu();
}
function menu(){
  let flag = true;
  while(flag){
    let decision = prompt("1. Crear producto\n2. Duplicar producto \n\nElije una opción, escribe: 1,2 o 3")
    switch (decision) {
      case '1':
        createProducts();
        break;
      case '2':
        duplicateProducts();
        break;
      case '3':
        alert('¡Hasta pronto!');
        flag = false;
        break;
      default:
      alert('Opción inválida, porfavor ingresa una opción válida');
      break;
    }
  }
}
menu();
