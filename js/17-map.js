// NEXT LEVEL (HOF- higher order function)

//MAP - grazinamas naujas to paciu dydzio masyvas su modifikuotomis reiksmemis.
//yra primitivys kintamieji ir compleksiniai.
//primitiv- laiko info
//compleksiniai- laiko nuoroda, adresa i info

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

const f = [9, 8, 7];
const g = [];
for (let i = 0; i < f.length; i++) {
  g.push(f[i]);
}
console.log(f);
console.log(g);

f[0] = 99;
console.log(f);
console.log(g);
