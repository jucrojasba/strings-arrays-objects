let marks, average, addMarks;
const validateMarks = /^\d+(\.\d+)*(\,\d+(\.\d+)*)*$/;
function stadisticsMark(marks) {
  marks = marks.split(",");
  console.log(marks);
  average =
    marks.reduce(
      (accumulator, currentValue) =>
        parseFloat(accumulator) + parseFloat(currentValue)
    ) / marks.length;

  return average;
}
function menu() {
  while (true) {
    addMarks = confirm("¿Deseas calcular las estadisticas de tu grupo?");
    if (addMarks) {
      marks = prompt(
        "Ingresa las calificaciones separadas por coma Ej: 5,4.5,3,2.1"
      );
      if (validateMarks.test(marks)) {
        continue;
      } else {
        alert("Ingresaste caracteres invàlidos");
        continue;
      }
    } else {
      alert("Hasta pronto!");
      break;
    }
  }
}
menu();
