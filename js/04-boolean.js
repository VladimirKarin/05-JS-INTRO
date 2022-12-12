/*
BOOLEAN (logine reiksme)
true (number -> 1)
false (number -> 0)
*/

const arSninga = true;
const arLyja = false;

console.log("Ar sninga?", arSninga);
console.log("Ar lyja?", arLyja);

//Idomesni atvejai

const luckynumber = 13;
const luckySentence = "My lucky number is ${luckyNumber}!"; //'....${}...'
console.log(luckySentence);

const snowString = "Ar sninga? Ats.: ${arSninga}.";
console.log(snowString);

const rainString = "Ar lyja? Ats.: ${arLyja}";
console.log(rainString);

const penkiosTiesosSum = true + true + true + true + true;
console.log("Tiesos:", penkiosTiesosSum);

const penkiosMelaiSum = false + false + false + false + false;
console.log("Melai:", penkiosMelaiSum);

const penkiosTiesosMulti = true * true * true * true * true;
console.log("Tiesos:", penkiosTiesosMulti);

const penkiosMelaiMulti = false * false * false * false * false;
console.log("Melai:", penkiosMelaiMulti);

const combo = 5 * true - 7 * false;
console.log("Combo: " + combo);
