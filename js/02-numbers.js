/*

NUMBERS:
- tikri/netikri (Skaiciaus tipas, bet ne skaicius)
      - -Infinity, Infinity
      - NaN (Not-a-Number)
- sveikieji/desimtainiai
- teigiami/neigiami

INICIAVIMAS:
const - nekeiciama reiksme (default)
let - kintama reiksme (sekantis tinkamas pasirinkimas, jei netinka const)
var - niekada ne naudoti. (seniena)

*/

const PI = 3.14;
console.log(PI);

let wallet = 0;
console.log(wallet);

wallet = 5;
console.log(wallet);

const negative = -888;
console.log(negative);

const max = Infinity;
const min = -Infinity;

console.log(min, max);
console.log(0, 1, 2, 3.14);

console.log(NaN);

// Kintamuju uzvadinimas

const vienas = 1;

const antrasSkaicius = 2;

const PVM = 21; /*- abbriviations can start from capital letters. */

console.log("---------------------------------");

// Primityvios matematines operacines

const a = 5;
const b = 7;

//Suma
const suma = a + b;
console.log(a, b, suma);

//skirtumas

const skirtumas = a - b;
console.log(a, b, skirtumas);

//Dalmuo
const dalmuoAB = a / b;
const dalmuoBA = b / a;
console.log(a, b, dalmuoAB);
console.log(b, a, dalmuoBA);

//Sandauga
const sandauga = a * b;
console.log(a, b, sandauga);

//liekana
const liekanaAB = a % b; //tol'ko ostatki
const liekanaBA = b % a; //tol'ko ostatki
console.log(a, b, liekanaAB);
console.log(b, a, liekanaBA);

//laipsnis
const laipsnisAB = a ** b; // 5 v 7 = 5 * 5 * 5 * 5 * 5 * 5 * 5 stepeni
const laipsnisBA = b ** a; // 7 v 5 = 7 * 7 * 7 * 7 * 7 stepeni
console.log(a, b, laipsnisAB);
console.log(b, a, laipsnisBA);

console.log("---------------------------------");

const p1 = 10;
const p2 = 2;
const p3 = 8;
const p4 = 4;

let pazymiuSuma = 0;
console.log("Pazymiu suma", pazymiuSuma);

pazymiuSuma = pazymiuSuma + p1;
console.log("Pazymiu suma", pazymiuSuma);

pazymiuSuma = pazymiuSuma + p2;
console.log("Pazymiu suma", pazymiuSuma);

pazymiuSuma = pazymiuSuma + p3;
console.log("Pazymiu suma", pazymiuSuma);

pazymiuSuma = pazymiuSuma + p4;
console.log("Pazymiu suma", pazymiuSuma);
