console.clear();
console.log("Class...");

import Student from "./Student.js";

//Alternativa
// const Student = require("./Student");

const petras = new Student("Petras", 2000);
const maryte = new Student("Maryte", 1980);

console.log(petras);
console.log(petras, petras.name, petras.marks);
console.log(maryte);
console.log(maryte, maryte.name, maryte.marks);
console.log(Student);
