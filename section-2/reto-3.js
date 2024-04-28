//Section 2 Reto 3
let products = [], id = 0, flag = true, product, blacklistedProducts =[], descriptionProduct, descriptionProducts, adminBadWords = ['palabra1', 'palabra2', 'palabra3', 'palabra4', 'palabra5'], productsFormatted = [];
function validateAlphabetNumeric(validator) {
  const validateAlphabetNumeric =
    /^[a-zA-ZñÑáéíóúüÁÉÍÓÚÜ][a-zA-ZñÑáéíóúüÁÉÍÓÚÜ\s0-9]*$/;
  if (validateAlphabetNumeric.test(validator)) {
    return true;
  } else {
    alert(`Opciòn invàlida, porfavor ingresa un valor correcto`);
    return false;
  }
}
function validateNumber(validator) {
  const validateNumber = /^\d*$/;
  validateNumber.test(validator);
  if (validateNumber.test(validator)) {
    return true;
  } else {
    alert(`Opciòn invàlida, porfavor ingresa un valor correcto`);
    return false;
  }
}
function showPrice(value){
  let valueFormatted=`${value}`;
  value > 999? valueFormatted = `${valueFormatted.slice(0,-3)}.${valueFormatted.slice(-3)}`: valueFormatted;
  value>999999? valueFormatted=`${valueFormatted.slice(0,-7)}'${valueFormatted.slice(-7)}` : valueFormatted;
  value>999999999? valueFormatted=`${valueFormatted.slice(0,-11)}.${valueFormatted.slice(-11)}` : valueFormatted;
  value>999999999999? valueFormatted=`${valueFormatted.slice(0,-15)}'${valueFormatted.slice(-15)}` : valueFormatted;
  return valueFormatted;
}
function showProductsConsole(arr) {
  productsFormatted=[];
  productsFormatted.push(
    arr.map(
      (e) =>
        `\n-- id: ${e.id},   nombre: ${e.name},   precio: $${e.price},   cantidad: ${e.amount},   descripciòn: ${hiddenBadWords(e.description)}`
    )
  );
  console.log(`Los productos disponibles son: \n${productsFormatted}`);
}
function showProductsAlert(arr) {
  productsFormatted=[];
  productsFormatted.push(
    arr.map(
      (e) =>
        `\n-- id: ${e.id},   nombre: ${e.name},   precio: $${e.price},   cantidad: ${e.amount},   descripciòn: ${hiddenBadWords(e.description)}`
    )
  );
  alert(`Los productos disponibles son: \n${productsFormatted}`);
}
function hiddenBadWords(userSrting){
  return userSrting.replace(new RegExp(`\\b(?:${adminBadWords.join('|')})\\b`, 'gi'),'*');
}
function createProducts() {
  let name, price, amount, description, product;
  function unicity(validator) {
    let flag = products.some((e) => e.name == validator);
    if (flag) {
      alert(
        `El producto: ${validator} ya existe en nuestra lista de productos, porfavor ingresa un nuevo nombre`
      );
      return flag;
    } else {
      return false;
    }
  }
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
  } while (!validateNumber(amount));
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
}
function duplicateProducts() {
  let product, duplicate, originalProduct, counter;
  do {
    product = prompt("Ingrese el nombre del producto que deseas duplicar");
    product = product.toLowerCase().trim();
  } while (!(validateAlphabetNumeric(product) && product));
  counter = 1;
  originalProduct = products.find((e) => e.name === product);
  if (originalProduct.name == product) {
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
    alert(`El producto ${product}, ha sido copiado con exito`);
  } else {
    alert("El producto ingresado no existe");
  }
  menu();
}
function searchProducts() {
  products.length != 0
    ? showProductsConsole(products)
    : console.log(`No existen productos disponibles`);
  if (products.length != 0) {
    showProductsAlert(products);
    while (flag) {
      let decision = prompt(
        `Busqueda y visualizaciòn de productos. \n\nElige una opciòn:\n1.Buscar producto por nombre \n2.Buscar productos por precio. \n\nEscribe 1 o 2.`
      );
      switch (decision) {
        case "1":
          do {
            product = prompt("Ingresa el nombre del producto a buscar");
          } while (!validateAlphabetNumeric(product));
          product = product.toLowerCase().trim();
          if (products.some((e) => e.name == product)) {
            let originalProduct = products.find((e) => e.name == product);
            alert(
              `El producto que buscas coincide con: \n$-- id: ${originalProduct.id}, nombre: ${originalProduct.name}, precio: $${originalProduct.price}, cantidad: ${originalProduct.amount}, descripciòn: ${hiddenBadWords(originalProduct.description)}`
            );
          } else {
            alert(`El producto que buscas no fue encontrado`);
          }
          flag = false;
          break;
        case "2":
          let priceMin, priceMax;
          do {
            priceMax = prompt(`Ingresa el precio màximo de busqueda`);
          } while (!validateNumber(priceMax));
          do {
            priceMin = prompt(`Ingresa el precio mìnimo de busqueda`);
          } while (!validateNumber(priceMin));
          priceMin = parseFloat(priceMin);
          priceMax = parseFloat(priceMax);
          if (
            products.some((e) => e.price >= priceMin && e.price <= priceMax)
          ) {
            let foundProducts = products.filter(
              (e) => e.price >= priceMin && e.price <= priceMax
            );
            showProductsAlert(foundProducts);
            showProductsConsole(foundProducts);
          } else {
            alert(
              `Lo sentimos no encontramos productos con los paràmetros de busqueda`
            );
          }
          flag = false;
          break;
        default:
          alert(`Opciòn invàlida, porfavor ingresa una opciòn vàlida`);
          break;
      }
    }
    menu();
  } else {
    alert(`No existen productos disponibles`);
    menu();
  }
}
function updateDescription(){
  if(products.length != 0) {
    showProductsAlert(products);
    do {
      product = prompt("Ingresa el id del producto que deseas modificar")
    } while (!validateNumber(product));
    product = parseFloat(product);
    if (products.some(e=>e.id == product)) {
      product = products.find(e=> e.id == product);
      let newDescription='';
      do {
        newDescription = prompt(`Ingresa una nueva descripciòn para el producto: ${product.name}, con id: ${product.id} y descripciòn: ${hiddenBadWords(product.description)}`);
      } while (!validateAlphabetNumeric(newDescription));
      console.log(newDescription)
      product.description = `${newDescription}`;
      alert(`La nueva decripciòn:\n\n${newDescription}\n\nHa sido agregada con èxito!`)
    } else {
      alert(`El id: ${product} no se encuentra en nuestra base de datos`)
    }

  } else {
    alert(`Nuestra base de datos no tiene productos agregados`);
    menu();
  }
}
function deleteProduct() {
  products.length != 0
    ? showProductsConsole(products)
    : console.log(`No existen productos disponibles`);
  if (products.length != 0) {
    showProductsAlert(products);
    do {
      product = prompt(`Ingresa el id del producto que deseas eliminar`);
    } while (!validateNumber(product));
    product = parseFloat(product);
    if (products.some((e) => e.id == parseFloat(product))) {
      let foundProducts = products.find((e) => e.id == product);
      alert(
        `El producto: \n\n${foundProducts.name} con precio $${foundProducts.price} y id(${foundProducts.id})\n\nHa sido eliminado correctamente!`
      );
      products = products.filter((e) => e.id !== product);
    } else {
      alert(`El id: ${product} no se ha encontrado en nuestra base de datos`);
    }
    menu();
  } else {
    alert(`No existen productos disponibles`);
    menu();
  }
}
function existenceProduct() {
  if (products.length != 0) {
    do {
      product = prompt(
        "Ingresa el nombre del producto del que deseas verificar existencias"
      );
    } while (!validateAlphabetNumeric(product));
    product = product.toLowerCase().trim();
    if (products.some((e) => e.name == product)) {
      let temProduct = products.find((e) => e.name == product);
      if (temProduct.amount > 0) {
        alert(
          `El producto ${product} existe en nuestra base de datos con ${temProduct.amount} unidad(es)`
        );
      } else {
        alert(
          `Error: el producto ${product} existe en nuestra base de datos pero no quedan existencias!`
        );
      }
    } else {
      alert(`El producto: ${product} no se encuentra en nuestra base de datos`);
    }
  } else {
    alert(`No existen productos agregados en nuestra base de datos`);
    menu();
  }
}
function sellProduct(){
  if(products.length !=0){
    do {
      product=prompt("Ingresa el id del producto que deseas vender")
    } while (!validateNumber(product));
    product = parseFloat(product);
    if (products.some(e=>e.id == product)) {
      product = products.find(e=>e.id == product);
      let amountSell = 0;
      do {
        amountSell = prompt(`Ingresa la cantidad de unidades de ${product.name} con id(${product.id}) que deseas vender`)
      } while (!validateNumber(amountSell));
      amountSell = parseFloat(amountSell);
      if (product.amount-amountSell>=0) {
        product.amount-=amountSell;
        alert(`Realizaste la venta de ${amountSell} unidad(es) de ${product.name} \n\nTe quedan: ${product.amount} unidad(es) del producto ${product.name}`)
      } else {
        alert(`El producto: ${product.name} con id(${product.id}) tiene ${product.amount} existencia(s) en nuestro inventario. No es posible realizar la venta!`)
      }
    } else {
      alert(`El id: ${product} no se encuentra en nuestra base de datos`)
    }
  }else{
    alert(`No existen productos agregados en nuestra base de datos`);
    menu();
  }
}
function buyProduct(){
  if(products.length !=0){
    do {
      product=prompt("Ingresa el id del producto que deseas comprar")
    } while (!validateNumber(product));
    product = parseFloat(product);
    if (products.some(e=>e.id == product)) {
      product = products.find(e=>e.id == product);
      let amountBuy = 0;
      do {
        amountBuy = prompt(`Ingresa la cantidad de unidades de ${product.name} con id(${product.id}) que deseas comprar`)
      } while (!validateNumber(amountBuy));
      amountBuy = parseFloat(amountBuy);
      product.amount+=amountBuy;
      alert(`Realizaste la venta de ${amountBuy} unidad(es) de ${product.name} \n\nTe quedan: ${product.amount} unidad(es) del producto ${product.name}`)
    } else {
      alert(`El id: ${product} no se encuentra en nuestra base de datos`)
    }
  }else{
    alert(`No existen productos agregados en nuestra base de datos`);
    menu();
  }
}
function totalInventory(){
  if (products.length != 0) { 
    let totalInventory = 0;
    for (let index = 0; index <products.length; index++) {
      totalInventory += parseFloat(products[index].price)*parseFloat(products[index].amount);
    } 
    console.log(`El valor total del inventario es $${showPrice(totalInventory)}`);
    alert(`El valor total del inventario es $${showPrice(totalInventory)}`)
  } else {
    alert(`No existen productos agregados en nuestra base de datos`)
  }
  menu();
}
function sortProducts(){
  if(products.length != 0){
    let sortPrice, sortAmount;
    flag = true;
    while(flag){
      let decision = prompt("¿Como deseas ordenar tus productos? \n\n1. Por precio (ascendente)\n2. Por precio (descendente)\n3. Por cantidad (ascendente)\n4. Por cantidad (descendente)\n\nEscribe 1, 2, 3 o 4");
    switch (decision) {
      case "1":
        sortPrice = products.sort((a,b)=>a.price-b.price);
        showProductsConsole(sortPrice);
        showProductsAlert(sortPrice);
        flag = false;
        break;
      case "2":
        sortPrice = products.sort((a,b)=>b.price-a.price);
        showProductsConsole(sortPrice);
        showProductsAlert(sortPrice);
        flag = false;
        break;
      case "3":
        sortAmount = products.sort((a,b)=>a.amount-b.amount);
        showProductsConsole(sortAmount);
        showProductsAlert(sortAmount);
        flag = false;
        break;
      case "4":
        sortAmount = products.sort((a,b)=>b.amount-a.amount);
        showProductsConsole(sortAmount);
        showProductsAlert(sortAmount);
        flag = false;
        break;
      default:
        alert(`Opción inválida, porfavor ingresa una opción válida`)
        break;
    }
    }
  }else{
    alert(`No existen productos agregados en nuestra base de datos para ordenar`);
  }
  products.sort((a,b)=>a.id-b.id);
  menu();
}
function badWords(){
if (products.length!=0) {
  if (products.some(e=>{
    userSrting = e.description.trim().toLowerCase().split(' ');
    return descriptionProduct.some(word=>adminBadWords.includes(word));
  })) {
    blacklistedProducts = products.filter(e=>{
      descriptionProduct = e.description.trim().toLowerCase().split(' ');
      return descriptionProduct.some(word=>adminBadWords.includes(word));
    });
    alert(`Encontramos ${blacklistedProducts.length} producto(s) con malas palabras. \n\nPresiona aceptar para ver los productos disponibles con malas palabras en su decripción`)
    showProductsConsole(blacklistedProducts);
    showProductsAlert(blacklistedProducts);
  } else {
    alert(`No existen productos con malas palabras en sus descripciones`)
  }
} else {
  alert(`No existen productos agregados en nuestra base de datos`)
}
menu();
}
function generalReport(){
  if(products.length!=0){
    let totalAmount =0,totalInventories = 0, limitAmount, limitPrice;
    do {
      limitPrice = prompt(`Ingresa el precio que deseas analizar`)
    } while (!validateNumber(limitPrice));
    do {
      limitAmount = prompt("Ingresa la cantidad que deseas analizar")
    } while (!validateNumber(limitAmount));
    limitPrice = parseFloat(limitPrice);
    limitAmount = parseFloat(limitAmount);
    blacklistedProducts = products.filter(e=>{
      descriptionProduct = e.description.trim().toLowerCase().split(' ');
      return descriptionProduct.some(word=>adminBadWords.includes(word));
    });
    products.forEach(e=>totalAmount+=e.amount);
    products.forEach(e=>totalInventories+=(e.price*e.amount));
    alert(`-----Reporte General de Productos-----\n\n-La cantidad de productos en el inventario es: ${totalAmount} unidad(es) de ${products.length} tipo(s) de producto(s)\n-El valor total del inventario es: $${showPrice(totalInventories)}\n-La cantidad de productos por encima de $${showPrice(limitPrice)} son: ${products.filter(e=>e.price > limitPrice).length} producto(s)\n-La cantidad de productos por debajo de $${showPrice(limitPrice)} son: ${products.filter(e=>e.price <= limitPrice).length} producto(s)\n-La cantidad de productos con existencias mayores a ${limitAmount} unidad(es) son: ${products.filter(e=>e.amount > limitAmount).length} producto(s)\n-La cantidad de productos con existencias menores a ${limitAmount} unidad(es) son: ${products.filter(e=>e.amount <= limitAmount).length} producto(s)\nLa cantidad de productos con posibles malas palabras en su descripción son: ${blacklistedProducts.length} producto(s)`);
    
    console.log(`-----Reporte General de Productos-----\n\n-La cantidad de productos en el inventario es: ${totalAmount} unidad(es) de ${products.length} tipo(s) de producto(s)\n-El valor total del inventario es: $${showPrice(totalInventories)}\n-La cantidad de productos por encima de $${showPrice(limitPrice)} son: ${products.filter(e=>e.price > limitPrice).length} producto(s)\n-La cantidad de productos por debajo de $${showPrice(limitPrice)} son: ${products.filter(e=>e.price <= limitPrice).length} producto(s)\n-La cantidad de productos con existencias mayores a ${limitAmount} unidad(es) son: ${products.filter(e=>e.amount > limitAmount).length} producto(s)\n-La cantidad de productos con existencias menores a ${limitAmount} unidad(es) son: ${products.filter(e=>e.amount <= limitAmount).length} producto(s)\nLa cantidad de productos con posibles malas palabras en su descripción son: ${blacklistedProducts.length} producto(s)`);
    
  }else{
  alert(`No existen productos agregados en nuestra base de datos`)
  }
  menu();
}
function menu() {
  flag = true;
  while (flag) {
    let decision = prompt(
      "1. Crear producto\n2. Duplicar producto\n3. Busqueda y visualizaciòn de productos \n4. Actualizar la descripciòn de un producto \n5. Eliminar un producto \n6. Verificar existencias de un producto \n7. Vender un producto \n8. Comprar productos \n9. Calcular el valor total del Inventario \n10. Ordenar productos \n11. Identificar malas palabras en la descripción de productos\n12. Reporte general de productos \n13. Salir\n\nElije una opción, escribe: 1,2,3,4,5,6,7,8,9, 10, 11, 12 o 13"
    );
    switch (decision) {
      case "1":
        createProducts();
        break;
      case "2":
        duplicateProducts();
        break;
      case "3":
        searchProducts();
        break;
      case "4":
        updateDescription();
        break;
      case "5":
        deleteProduct();
        break;
      case "6":
        existenceProduct();
        break;
      case "7":
        sellProduct();
        break;
      case "8":
        buyProduct();
        break;
      case "9":
        totalInventory();
        break;
      case "10":
        sortProducts();
        break;
      case "11":
        badWords();
        break;
      case "12":
        generalReport();
        break;
      case "13":
        alert("¡Hasta pronto!");
        flag = false;
        break;
      default:
        alert("Opción inválida, porfavor ingresa una opción válida");
        break;
    }
  }
}
menu();
