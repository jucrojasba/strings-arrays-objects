let marks,
  average,
  maxMark,
  minMark,
  approvedStudent,
  reprovedStudent,
  sortMarks,
  addMarks;
const validateMarks = /^\d+(\.\d+)*(\,\d+(\.\d+)*)*$/;
function stadisticsMark(marks) {
  marks = marks.split(",");
  average =
    marks.reduce(
      (accumulator, currentValue) =>
        parseFloat(accumulator) + parseFloat(currentValue)
    ) / marks.length;
  maxMark = parseFloat(marks.sort()[marks.length - 1]);
  minMark = parseFloat(marks.sort()[0]);
  approvedStudent = marks.filter((e) => e >= 70);
  reprovedStudent = marks.filter((e) => e < 70);
  sortMarks = marks.sort().reverse();
  return average, maxMark, minMark, approvedStudent, reprovedStudent, sortMarks;
}
function menu() {
  while (true) {
    addMarks = confirm("¿Deseas calcular las estadisticas de tu grupo?");
    if (addMarks) {
      marks = prompt(
        "Ingresa las calificaciones separadas por coma Ej: 5,4.5,3,2.1"
      );
      if (validateMarks.test(marks)) {
        stadisticsMark(marks);
        console.log(
          `El promedio de calificaciones fue: ${average.toFixed(
            2
          )}\nLa calificaciòn màxima fue: ${maxMark}\nLa calificaciòn mìnima fue: ${minMark}\nEl nùmero de estudiantes aprobados fue: ${
            approvedStudent.length
          }\nEl nùmero de estudiantes reprobados fue: ${
            reprovedStudent.length
          }\nLa lista de calificaciones es la siguiente: ${sortMarks}`
        );
        alert(
          `El promedio de calificaciones fue: ${average.toFixed(
            2
          )}\nLa calificaciòn màxima fue: ${maxMark}\nLa calificaciòn mìnima fue: ${minMark}\nEl nùmero de estudiantes aprobados fue: ${
            approvedStudent.length
          }\nEl nùmero de estudiantes reprobados fue: ${
            reprovedStudent.length
          }\nLa lista de calificaciones es la siguiente: ${sortMarks}`
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
