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

//FOR-IN (simplified FOR) ~95% effective (ne massivams)
console.log();
console.log("FOR-OF");
console.log("----------------------");

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
