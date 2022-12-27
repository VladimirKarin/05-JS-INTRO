console.clear();

/*
REDUCE- sutraukti/sumazinti.
procedura, kaip is saraso reiksmiu gauti viena galutine reiksme.
daugyskaite -> vienaskaita
*/

const numbers = [10, 2, 8, 4, 6];

// iprastas ciklas

let sum = 0;
for (const number of numbers) {
  sum += number;
}
console.log("For SUM: ", sum);

//paprastas reduce - logika vietoje

const reduceSum = numbers.reduce((sum, number) => sum + number);
console.log("REDUCE SUM: ", reduceSum);

function calcSum(sum, number) {
  return sum + number;
}
//paprastas reduce - logika isorineje funkcijoje

const reduceSum2 = numbers.reduce(calcSum);
console.log("REDUCE SUM FUNC: ", reduceSum2);

// KITI paprasti pavyzdziai

const reduceMinus = numbers.reduce((total, number) => total - number);
console.log("REDUCE MINUS: ", reduceMinus);

const reduceMulti = numbers.reduce((total, number) => total * number);
console.log("REDUCE Multi: ", reduceMulti);

const reduceDiv = numbers.reduce((total, number) => total / number);
console.log("REDUCE DiV: ", reduceDiv);

//reduce su nurodyta pradine akumuliatoriaus reiksme

const reduceSumm2 = numbers.reduce((sum, number) => sum + number, numbers[0]);
console.log("REDUCE SUM2: ", reduceSumm2);

const reduceMinus2 = numbers.reduce((total, number) => total - number, 0);
console.log("REDUCE MINUS2: ", reduceMinus2);

const reduceMulti2 = numbers.reduce(
  (total, number) => total * number,
  numbers[0]
);
console.log("REDUCE Multi2: ", reduceMulti2);

const reduceDiv2 = numbers.reduce((total, number) => total / number, 0);
console.log("REDUCE DiV2: ", reduceDiv2);

//100
//[2, 2, 5 ,5]

const atsGood = [2, 2, 5, 5].reduce((t, n) => t / n, 100);
console.log(atsGood);

const atsGood2 = [2, 2, 2, 2, 2, 2, 2].reduce((t, n) => t / n, 128);
console.log(atsGood2);

const students = [
  { name: "Petras", age: 99, isMarried: true },
  { name: "Maryte", age: 88, isMarried: false },
  { name: "Jonas", age: 77, isMarried: false },
  { name: "Ona", age: 66, isMarried: true },
  { name: "Simon", age: 7, isMarried: false },
  { name: "Itoleta", age: 17, isMarried: true },
  { name: "Allas", age: 47, isMarried: true },
  { name: "Eliza", age: 2, isMarried: false },
];

const averageAge = students.reduce((t, s) => t + s.age, 0) / students.length;
console.log("Students: ", +averageAge.toFixed(2));
console.log("Students: ", parseFloat(averageAge.toFixed(2)));
console.log("Students: ", parseInt(averageAge.toFixed(2)));

console.log(+"5", parseInt("5"), parseFloat("5"));
console.log(+"3.14", parseInt("3.14"), parseFloat("3.14"));
console.log(+"labas", parseInt("labas"), parseFloat("labas"));
console.log(+"Labas3.1415", parseInt("Labas3.1415"), parseFloat("Labas3.1415"));
console.log(+"3.1415Labas", parseInt("3.1415Labas"), parseFloat("3.1415Labas"));
console.log(
  +"3.1415Labas3.1415",
  parseInt("3.1415Labas3.1415"),
  parseFloat("3.1415Labas3.1415")
);
