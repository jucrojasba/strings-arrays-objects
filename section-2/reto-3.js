//Section 2 Reto 3
let products =[];

function validateAlphabet(validator){
    const validateAlphabet = /^[a-zA-ZñÑáéíóúüÁÉÍÓÚÜ]+$/;
    return validateAlphabet.test(validator);
}
function validateNumber(validator){
    const validateNumber = /^\d+$/;
    return validateNumber.test(validator);
}
function createProducts() {
    let name, price, amount, description, product;
        while(true){
            name = prompt("Ingresa el nombre del producto");
            if(validateAlphabet(name) && name){
                price = prompt("Ingresa el precio del producto");
            }
            if(validateNumber(price) && price){
                amount = prompt("Ingresa la cantidad");
                price=parseFloat(price);
            }
            if(validateNumber(amount) && amount){
                description = prompt("Ingresa una descripción");
                amount=parseFloat(amount);
            }
            if(description){
                break
            }else{
                alert("Valor inválido");
            }
        }
    product={
        name,
        price,
        amount,
        description
    }
    products.push(product)
    alert("Producto agregado con éxito");
    return product;
}
createProducts()
console.log(products);