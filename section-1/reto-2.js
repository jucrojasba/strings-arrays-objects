//Section 1 - Reto 2
let password,createPassword, userMessage;

function validatePassword(password) {
    let message =[];
    const validateAlphabet=/[a-zA-ZñÑáéíóúÁÉÍÓÚ]/;
    const validateNumber =/[0-9]/;
    const validateSpecialCharacter=/[!@#$%^&*()+=_\-{}[\]:;"'?<>,.|/~\\]/;
    if (password.length >= 8 && validateAlphabet.test(password) && validateNumber.test(password) && validateSpecialCharacter.test(password)){
        message.push("Contraseña correcta")
    }else{
        message.push("Contraseña incorrecta:")
        if(password.length<8){
            message.push("\nLa contraseña debe contener al menos 8 caracteres")
        }
        if(!validateAlphabet.test(password)){
            message.push("\nLa contraseña debe contener al menos una letra")
        }
        if(!validateNumber.test(password)){
            message.push("\nLa contraseña debe contener al menos un número")
        }
        if(!validateSpecialCharacter.test(password)){
            message.push("\nLa contraseña debe contener al menos un carácter especial")
        }
    }
    return message;
}
function menu(){
    while(true){
        createPassword = confirm("¿Desea crear una contraseña?")
        if(createPassword){
            password=prompt("Ingresa una contraseña de minimo 8 cararcteres. \nLa contraseña debe incluir:\nAl menos una letra\nAl menos un número\nAl menos un caracter especial");
            if(password){
                userMessage = "";
                validatePassword(password).forEach(element => {
                    userMessage += `${element}`;
                });
                alert(userMessage)
                console.log(`Contraseña: ${password}`)
                continue
            }else{
                continue
            }
        }else{
            alert("Hasta pronto");
            return;
        }
    }
}
menu()  
