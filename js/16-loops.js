console.clear();
/*
LOOP- ciklas

tevas -> for
vaikai (isvestiniai) -> while, for-of, for-in, foreach, (efektyvumo prastejimo tvarka)

next-level -> map, sort, filter, reduce, ...
*/

const marks = [10, 2, 8, 4, 6];

//FOR 100% Effective
console.log();
console.log("For");
console.log("----------------------");
let sumFor = 0;
for (let iFor = 0; iFor < marks.length; iFor++) {
  sumFor += marks[iFor];
}
console.log("For: " + sumFor / marks.length);

//While ~99% effective
console.log();
console.log("While");
console.log("----------------------");

let sumWhile = 0;
let iWhile = 0;
while (iWhile < marks.length) {
  const mark = marks[iWhile];
  sumWhile += mark;
  iWhile++;
}
console.log("While: " + sumWhile / marks.length);

//FOR-OF (simplified FOR) ~95% effective
console.log();
console.log("FOR-OF");
console.log("----------------------");
let sumForOf = 0;
for (const mark of marks) {
  sumForOf += mark;
}
console.log("For-Of: " + sumForOf / marks.length);

//FOR-IN (simplified FOR) ~95% effective (ne massivams) iteruoja per objekta
console.log();
console.log("FOR-IN");
console.log("----------------------");

const user = {
  name: "Petras",
  age: 99,
  isMarried: true,
  favoriteNumber: 13,
  children: 5,
  grandChildren: 25,
  key: "geltonas",
  negative: -88,
};

let sumForObj = 0;
const userKeys = Object.keys(user);
console.log(userKeys);

for (let i = 0; i < userKeys.length; i++) {
  const key = userKeys[i];
  const value = user[key];
  console.log(value);
  if (typeof value === "number" && isFinite(value) && value > 0)
    sumForObj += value;
}

console.log("For in: ", sumForObj, "--->", 142);

//2
console.log("");
console.log("Nr2");
console.log("");
let sumForIn = 0;

for (const key in user) {
  const value = user[key];
  console.log(value);
  if (typeof value === "number" && isFinite(value) && value > 0)
    sumForIn += value;
}

console.log("For in: ", sumForIn, "--->", 142);

//FOR-EACH  ~70% effective
console.log();
console.log("FOR-EACH");
console.log("----------------------");

//1
let sumForEach1 = 0;
marks.forEach(function (mark, iForEach, list) {
  sumForEach1 += mark;
});
console.log("ForEach1: ", sumForEach1 / marks.length);

//2
let sumForEach2 = 0;
marks.forEach((mark) => (sumForEach2 += mark));
console.log("ForEach2: ", sumForEach2 / marks.length);

//3
let sumForEach3 = 0;
function sumavimasForeach(mark) {
  sumForEach3 += mark;
}
marks.forEach(sumavimasForeach);
console.log("ForEach3: ", sumForEach3 / marks.length);

// NEXT LEVEL (HOF- higher order function)

//MAP - grazinamas naujas to paciu dydzio masyvas su modifikuotomis reiksmemis.
