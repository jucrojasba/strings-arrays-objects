/* Section 1 - Reto 1 */
let userName, firstName, lastname, email, user, counter;
const validateAlphabet = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ-\s]+$/g;
const dataBase = {};

function assignEmail(userName) {
  userName = userName.toLowerCase().split(" ");
  firstName = userName[0].slice(0, 3);
  lastname = userName[userName.length - 1].slice(0, 3);
  user = firstName + lastname;
  counter = 1;
  while (user in dataBase) {
    user = user + String(counter);
    counter++;
  }
  email = user + "@myDomain.com";
  dataBase[user] = email;
  return;
}
function menu() {
  while (true) {
    addUser = confirm("Could you add an username?");
    if (addUser) {
      while (true) {
        userName = prompt("Type your full name");
        if (validateAlphabet.test(userName) && userName.trim().length != 0) {
          alert(
            `${validateAlphabet.test(userName)} y ${
              userName.trim().length != 0
            }`
          );
          assignEmail(userName);
          console.log(
            `Felicidades tu nombre de usuario es ${user} y tu email es ${email}`
          );
          alert(
            `Felicidades tu nombre de usuario es ${user} y tu email es ${email}`
          );

          break;
        } else {
          alert("You type an invalid character");
          continue;
        }
      }
    } else {
      console.log(dataBase);
      break;
    }
  }
}
menu();
