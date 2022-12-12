/*
ARRAY (List, sarasas, matrix, matrica, masyvas)
"supaprastintas objektas"

[]- lauztines skliaustai
*/

const emptyArray = [];
console.log(emptyArray);

const marks = [10, 2, 8, 4, 6];
console.log(marks);

const usersNames = ["Peter", "Marry", "John", "Jane"];
console.log(usersNames);

const boolList = [true, false, true, true, false, false];
console.log(boolList);

//LABAI NEREKOMENDUOTINA MIKSUOTI SKIRTINGO TIPO REIKSMES MASYVE
//NEBENT ZINOT KA DAROM IR NORIM TAUPYTI VIETA (RAM)

const combo1 = ["John", 99, true];
const combo2 = ["Mary", 87, false];
console.log(combo1 + " " + combo2);

//Geriau kad masyvas butu vieno tipo (tik string, tik number).

const marksCount = marks.length; //Skaiciuoja KOKS yra masyvo dydis.
console.log(marksCount);

const userCount = usersNames.length;
console.log(userCount);

const boolCount = boolList.length;
console.log(boolCount);

const comboCount = combo1.length;
console.log(comboCount);

const emptySize = emptyArray.length;
console.log(emptySize);
// 0   1   2  3  --Pozicijos indeksas
const money = [5, 10, 20, 5];
console.log("Kupiuros: ", money);
let wallet = 0;

wallet += money[0];
wallet += money[1];
wallet += money[2];
wallet += money[3];
console.log("Wallet: ", wallet, "pinigu");

const marks2 = [10, 2, 8, 4, 6];
let marksSum = 0;
marksSum += marks2[0];
marksSum += marks2[1];
marksSum += marks2[2];
marksSum += marks2[3];
marksSum += marks2[4];
//makrsSum += marks2[5]; -- Rezultatas - NaN.

console.log("Marks sum: ", marksSum);

const x = 30 + undefined;
console.log(x);

// console.log(marks2[5]); --undefined

const abc = ["a", "b", "c", "d", "e", "f"];
//Abecele: a, b, c, d ,e ,f.
const separator = ", ";
const ending = ".";
let abcString = "Abecele: ";

abcString += abc[0] + separator;
abcString += abc[1] + separator;
abcString += abc[2] + separator;
abcString += abc[3] + separator;
abcString += abc[4] + separator;
abcString += abc[5] + ending;

console.log(abcString);
