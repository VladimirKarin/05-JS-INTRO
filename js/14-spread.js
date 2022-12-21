console.clear();

// Destrukturizavimas - destructuring

//Masyvai
const pazymiai = [10, 9, 8, 7, 6];

const pirmas = pazymiai[0];
const antras = pazymiai[1];

console.log(pirmas);
console.log(antras);

const marks = [10, 2, 8, 4, 6];
const [first, second, third] = marks;

console.log(first);
console.log(second);
console.log(third);

const petras = ["petras", 99, true];
const vardas = petras[0];
const amzius = petras[1];
const arVedes = petras[2];

console.log(vardas, amzius, arVedes);

const ona = ["Ona", 87, false];
const [name, age, isMarried] = ona;
console.log(name, age, isMarried);

//Objektai

const car = {
  brand: "tesla",
  model: "S",
  color: "red",
};

// const brand = car.brand;
// const model = car.model;
// const color = car.color;

const { brand, model, color } = car;

console.log(brand, model, color);

//SPREAD

const numbers = [1, 2, 3];
const numbers2 = [...numbers, ...numbers];
const numbers3 = [...numbers2, 4];

console.log(numbers);
console.log(numbers2);
console.log(numbers3);


///Spread israsymas/iskopijavimas

const person = {
  name: "Maryte",
  age: 88,
  isMarried: true,
  childrenCount: 5,
  phone: 370666666666,
  adress: "Gatves g. 5, Miestas",
  favoriteColor: "yellow",
  height: 200,
  eyes: "YES",
};
console.log(person);

const person2 = {
  ...person,
  car: {
    ...car,
    price: 10000,
  },
  happy: true,
};
console.log(person2);

console.log(person2.car.brand);

const { childrenCount, happy, favoriteColor } = person2;
console.log(childrenCount, happy, favoriteColor);


console.clear();

const a = ['a', 'aa'];
const b = ['b', 'bb'];
const c = ['c', 'cc'];

const doubleABC = [...a, 111, ...b, ...c];
const doubleABC2 = [...c, ...b, 222, ...a];
console.log(doubleABC);
console.log(doubleABC2);

const ob = {b: 'b', bb:'bb'};
const oa = {a: 'a', aa:'aa'};
const oc = {c: 'c', cc:'cc'};
const oABC = {...oa, ...ob, gg: 'gg', ...oc, cc: 'nebe CC'};
console.log(oABC);
console.log(oABC.a);
console.log(oABC.gg);

const user = {
 name: 'Username',
 password: 'password12',
};

  console.log(user);

  const user2 = {...user, name: 'Petras'};
  console.log(user2);
  console.log(user2.name);

  