/*
TYPEOF - nustato reiksme ir tipa
*/

const n = 5; //number
const s = "hi"; //string
const b = true; // boolean

const nType = typeof n;
const sType = typeof s;
const bType = typeof b;

console.log(n, nType);
console.log(s, sType);
console.log(b, bType);
console.log(typeof 5);
console.log(typeof -5);
console.log(typeof 3.14);
console.log(typeof " ");
console.log(typeof "a");
console.log(typeof "asdasfasf");
console.log(typeof true);
console.log(typeof false);

const marks = [10, 2, 8];
const marksType = typeof marks;
console.log(marks, marksType);

console.log(typeof []);
console.log(typeof [1]);
console.log(typeof [1, -8]);

console.log("____________________");

const x = "" + 5;
console.log(x);

const y = typeof ("" + 5);
console.log(y);
