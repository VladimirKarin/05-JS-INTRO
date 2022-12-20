//Function declaration
console.clear();

const n1 = 7;
const n2 = 5;

function sum(a, b) {
  return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

function minusas(a, b) {
  return a - b;
}

console.log(`${n1} - ${n2} = ${minusas(n1, n2)}`);

//function expression
// kintamajam priskirta anonimine funkcia

const minus = function (a, b) {
  return a - b;
};

console.log(`${n1} - ${n2} = ${minusas(n1, n2)}`);

//Arrow Function

const multiply = (a, b) => {
  return a * b;
};

console.log(`${n1} * ${n2} = ${multiply(n1, n2)}`);

//Arrow Function
//Jeigu logikos bloke yra tik vienas statement'as.
// Galime nerasyti {} ir return

const divide = (a, b) => a / b;

console.log(`${n1} / ${n2} = ${divide(n1, n2)}`);

//Arrow Function
//Jeigu parametru bloke yra tik 1 parametras
// galim nerasyte
//negalima naudoti jei () skliaustose yra kazkas keisto

const sqrt = (a) => a * a;

console.log(`${n1} ** 2 = ${sqrt(n1)}`);

//PVZ

function hi() {
  return "Hi there";
}

const hello = () => "Hello kitty ";

console.log(hi());

console.log(hello());
