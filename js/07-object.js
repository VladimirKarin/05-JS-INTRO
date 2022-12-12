/*
OBJECT (objektas
  "tikras objektas"
  */
// [vardas, amzius, vedes\susituoke]
const user1 = ["Petras", 99, true];
const user2 = ["Maryte", 87, false];

// Petras yra 99 metu amziaus.
// Maryte yra 87 metu amzius

const user1Name = user1[0];
const user1Age = user1[1];
const user1Intro = "${user1Name[0]} yra ${user1Age[1]} metu amzius.";
console.log(user1Intro);

const user2Name = user2[0];
const user2Age = user2[1];
const user2Intro = "${user2Name[0]} yra ${user2Age[1]} metu amzius.";
console.log(user2Intro);

const emptyObject = {};
console.log(emptyObject);

const student1 = {
  name: "John",
  age: 99,
  isMarried: true,
  marks: [],
};

console.log(student1);

const student2 = {
  name: "Jenny",
  age: 69,
  isMarried: false,
  marks: [10, 2, 8, 4, 6],
};

console.log(student2);

//Standartinis reiksmes istraukymas is objekto-> obj['key']
const stud1Name = student1["name"];
const stud1Age = student1["age"];
const stud1marks = student1["marks"];
const stud1married = student1["isMarried"];
console.log(stud1Name);
console.log(stud1Age);
console.log(stud1marks);
console.log(stud1married);

//Supaprastinta objekto reiksmes istraukimo sintakse -> obj.key

const car = {
  brand: "Tesla",
  model: "S",
  price: "100000",
  currency: "EUR",
  color: "red",
};
console.log(car);

console.log(car.brand);
console.log(car["brand"]);
console.log(car.model);
console.log(car["model"]);
console.log(car.price);
console.log(car["price"]);

const obj = {
  simple: "paprasta reiksme",
  "child-name": "Johny boy",
  childName: "Johny boy",
};
console.log(obj.simple);
console.log(obj.childName);
// console.log(obj.child-name);

console.log(obj["simple"]);
console.log(obj["child-name"]);

const student3 = {
  name: "Jenny",
  age: 69,
  isMarried: false,
  marks: [10, 2, 8, 4, 6],
};

const marks = student3.marks;
console.log(marks);

let sum = 0;
sum += marks[0];
sum += marks[1];
sum += marks[2];
sum += marks[3];
sum += marks[4];
const count = marks.length;

const average = sum / count;
console.log("Marks average: ", average);

const person = {
  name: "Petras",
  age: 99,
  children: [
    {
      name: "Maryte",
      age: 13,
    },
    {
      name: "Jonas",
      age: 27,
    },
    {
      name: "Ona",
      age: 41,
    },
  ],
};
console.log(person.children);
console.log(person.children[1].age);
console.log(person.children[1].name);
console.log("Asmens vaiku kiekie: " + person.children.length);
