let marks, average, addMarks;
const validateMarks = /^\d+(\.\d+)*(\,\d+(\.\d+)*)*$/;
function averageMark(marks) {
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
    addMarks = confirm("¿Deseas calcular un promedio?");
    if (addMarks) {
      marks = prompt(
        "Ingresa las calificaciones separadas por coma Ej: 5,4.5,3,2.1"
      );
      if (validateMarks.test(marks)) {
        alert(`El promedio de las notas: ${marks} es ${averageMark(marks)}`);
        console.log(
          `El promedio de las notas: ${marks} es ${averageMark(marks).toFixed(
            2
          )}`
        );
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
