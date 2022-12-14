console.clear();
/*
FOR - ciklas (en. loop)
kartojame norima logka N kartu arba iki kol reikia (reikalinga patikrinimo salygos)

for () {
  logika, kuria reikia kartotoi N kartu
}

*/

//isspausdinti skaicius nuo 0 iki 5

console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

console.log("_______________________");

let i = 0;
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);

console.log("_______________________");

for (let i = 0; i <= 5; i++) {
  console.log("dirbu...", i);
}
console.log("End.");
console.log("_______________________");

// isspausdinti skaiciu nuo 5 iki 10

for (let i = 5; i <= 10; i++) {
  console.log("skaicius: ", i);
}
console.log("End.");
console.log("_______________________");

// isspausdinti skaiciu nuo -10 iki -5

for (let i = -10; i <= -5; i++) {
  console.log("skaicius: ", i);
}
console.log("End.");
console.log("_______________________");

// isspausdinti skaiciu nuo 10 iki 5

for (let i = 10; i >= 5; i--) {
  console.log("skaicius: ", i);
}
console.log("End.");
console.log("_______________________");

const marks = [10, 2, 8, 4, 6];
const count = marks.length;
let sum = 0;

for (let i = 0; i < count; i++) {
  sum += marks[i];
  console.log(i, "--->", marks[i], "--> ", sum);
}

const average = sum / count;
console.log("Pazymiu vidurkis: ", average);

console.log("End.");
console.log("_______________________");

const petras = [10, 8, 6];
const count2 = petras.length;
let sum2 = 0;

for (let i = 0; i < count2; i++) {
  sum2 += petras[i];
}
console.log("Petro vidurkis:", sum2 / count2);
console.log("End.");
console.log("_______________________");

const maryte = [10, 8, 6];
const count3 = maryte.length;
let sum3 = 0;

for (let i = 0; i < count3; i++) {
  sum3 += maryte[i];
}
console.log("Marytes vidurkis:", sum3 / count3);
console.log("End.");
console.log("_______________________");

function marksAverage(marksArray) {
  let sum = 0;

  for (let i = 0; i < marksArray.length; i++) {
    sum += marksArray[i];
  }
  return sum / marksArray.length;
  console.log(marksArray);
  return 0;
}

const student1 = {
  name: "Jonas",
  marks: [4, 6, 8, 10],
};

const student2 = {
  name: "Ona",
  marks: [2, 4, 6],
};

const student3 = {
  name: "Aloyzas",
  marks: [6, 8, 10, 7, 3],
};

const student4 = {
  name: "AMarijona",
  marks: [],
};

const vidurkis1 = marksAverage(student1.marks);
const vidurkis2 = marksAverage(student2.marks);
const vidurkis3 = marksAverage(student3.marks);
const vidurkis4 = marksAverage(student4.marks);

console.log(student1.name + " pazymiu vidurkis yra " + vidurkis1 + ".");
console.log(student2.name + " pazymiu vidurkis yra " + vidurkis2 + ".");
console.log(student3.name + " pazymiu vidurkis yra " + vidurkis3 + ".");
console.log(student4.name + " pazymiu vidurkis yra " + vidurkis4 + ".");

console.log("End.");
console.log("_______________________");

const currency = "EUR";
const prekes = [
  {
    name: "Banana",
    price: 2,
    inStock: 10,
  },

  {
    name: "Agurkas",
    price: 3,
    inStock: 10,
  },

  {
    name: "Pomidoras",
    price: 1.57,
    inStock: 30,
  },
];
function shop() {}

shop(prekes, currency);

console.log("<Musu Parduotuve:>");
console.log("_______________________");
console.log("1) Bananas kainuoja 2.00 EUR ir turime ju 10 vnt");
console.log("2) Agurkas kainuoja 3.00 EUR ir turime ju 10 vnt");
console.log("3) Bananas kainuoja 1.57 EUR ir turime ju 30 vnt");
console.log("_______________________");
console.log("Viso asortimento kaina: 97.1");
