console.clear();
console.log("Class...");

import { Student } from "./Student.js";
//Jeigu is vieno failo kelis dalykus - (import {Student, Teacher} from "./blablabla.js")

//Alternativa
// const Student = require("./Student");

const petras = new Student("Petras", 2000);
const maryte = new Student("Maryte", 1980);
const jonas = new Student("Jonas", 1990);

petras.addMark(10);
petras.addMark(0);
petras.addMark(2);
petras.addMark(22);
petras.addMark(-22);
petras.addMark(8);
petras.addMark(3.14);
petras.addMark(-3.14);
petras.addMark(4);
petras.addMark(6);

maryte.addMark(9);
maryte.addMark(6);

console.log(petras.name, petras.marks);
console.log(maryte.name, maryte.marks);
console.log(jonas.name, jonas.marks);

console.log(petras.name, petras.marksAverage());
console.log(maryte.name, maryte.marksAverage());
console.log(jonas.name, jonas.marksAverage());
