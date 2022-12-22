// NEXT LEVEL (HOF- higher order function)

//MAP - grazinamas naujas to paciu dydzio masyvas su modifikuotomis reiksmemis.
//yra primitivys kintamieji ir compleksiniai.
//primitiv- laiko info
//compleksiniai- laiko nuoroda, adresa i info

console.clear();

console.log("--------------");
console.log("COPY SPREAD");
console.log("");

const marks = [10, 2, 8, 4, 6];
const a = marks;

console.log(a);
console.log(marks);

marks[0] = 1;

console.log(a);
console.log(marks);

const b = [1, 2, 3, [4, 5, 6]];
const c = [...b];

//spread padaro kopija tik pirmo lygio.

b[0] = 7;
console.log(b);
console.log(c);

c[3][0] = 99;
console.log(b);
console.log(c);

console.log("--------------");
console.log("COPY FOR");
console.log("");

const f = [9, 8, [7, 4, 3, 2], 6, 5];
const g = [];
for (let i = 0; i < f.length; i++) {
  if (Array.isArray(f[i])) {
    const innerArray = [];
    for (let j = 0; j < f[i].length; j++) {
      if (Array.isArray(f[i][j])) {
        const innerArray2 = [];
        for (let k = 0; k < f[i][j][k].length; k++) {
          innerArray2.push(f[i][j][k]);
        }
      }
      innerArray.push(f[i][j]);
    }
    g.push([innerArray]);
  }
  g.push(f[i]);
}
console.log(f);
console.log(g);

f[0] = 99;
f[2][0] = 77;
f[2][1][0] = 44;
console.log(f);
console.log(g);

// Auksciau pateikta koda reiketu perrasyti su rekursija

console.clear();
console.log("--------------");
console.log("MAP");
console.log("");

const kiausiniai = [2, 4, 6, 8, 10];
// const eggs = [3, 5, 7, 9, 11];
const eggs = [];
for (let i = 0; i < kiausiniai.length; i++) {
  eggs.push(kiausiniai[i] * 2 - 1);
}
console.log(kiausiniai);
console.log(eggs);

function priceConvert(price) {
  return price * 1.5;
}

console.log("--------------");

const didmenineKaina = [10, 20, 50, 100];
const mazmenineKaina = [];

//1
for (let i = 0; i < didmenineKaina.length; i++) {
  mazmenineKaina.push(didmenineKaina[i] * 1.5);
}
//2
for (const kaina of didmenineKaina) {
  mazmenineKaina.push(priceConvert(kaina));
}
console.log(didmenineKaina);
console.log(mazmenineKaina);

console.log("--------------");
//3

const retailPrice1 = didmenineKaina.map((price) => price * 1.5);
console.log(retailPrice1);

const retailPrice2 = didmenineKaina.map(priceConvert);
console.log(retailPrice2);

const aaa = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
const bbb = aaa.map((n) => n * 2);
const ccc = aaa.map((n) => 0);
const ddd = aaa.map((n) => (n > 0 ? n : 0));

console.log(aaa);
console.log(bbb);
console.log(ccc);
console.log(ddd);

const names = ["Petras", "Maryte", "Jonas", "Ona"];
const abbr = names.map((s) => s[0]);
console.log(names);
console.log(abbr);

const students = [
  { name: "Petras", age: 99, isMarried: true },
  { name: "Maryte", age: 88, isMarried: false },
  { name: "Jonas", age: 77, isMarried: false },
  { name: "Ona", age: 66, isMarried: true },
];

const studentsNames = students.map((s) => s.name);
const studentsAge = students.map((s) => s.age);
const studentsIsMarried = students.map((s) => s.isMarried);

console.log(students);
console.log(studentsNames);
console.log(studentsAge);
console.log(studentsIsMarried);

const extra = { children: 0, phone: null };
const studentExtra = students.map((s) => ({ ...s, ...extra }));
console.log(studentExtra);
