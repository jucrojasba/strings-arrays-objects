//Section 1 - Reto 3
let email, confirmEmail;

function validateEmail(email) {
    let message ='';
    const validateEmail=/^[^\s@]+[^\.\s]@[^\s@\.]+\.[^\s@]+$/;
    validateEmail.test(email)? message = "Correo electrónico validado" : message="Corre inválido"
    return message;
}
function menu(){
    while(true){
        confirmEmail = confirm("¿Deseas validar un correo electronico?")
        if(confirmEmail){
            email=prompt("Ingresa un correo electrónico");
            if(email){
                alert(validateEmail(email));
                console.log(`El correo: ${email} es un ${validateEmail(email).toLocaleLowerCase()}`)
                continue
            }else{
                continue
            }
        }else{
            alert("Hasta pronto");
            break
        }
    }
}
menu()  