console.clear();

/* 
TERNARY {Supaprastintas IF) 
  klausimas ? ka daryti kai true : ka daryti kai false
*/

const laimejo = false;
let pinigine = 10;

if (laimejo) {
  pinigine += 20;
} else {
  pinigine -= 1;
}

console.log(pinigine);

//IF supaprastintas variantas
const pergale = false;

let zinute = "Sveikinu tu laimejai";

if (!pergale) {
  zinute = "Ups... bandykite kita karta!";
}

console.log(zinute);

//TERNARY

const lotteryWin = true;
const wallet = 10 + (lotteryWin ? 20 : -1);
console.log(wallet);

const msgWin = lotteryWin;
const msg = msgWin ? "Sveikinu" : "Ups...";
console.log(msg);

//COMPLEX TERNARY

const a = 0 < 1 ? 2 : 3;
console.log(2);

// if (0 < 1) {
//  a = 2;
// } else {
//  a = 3;
// }

const b = 0 > 1 ? 2 : 3;
console.log(b);

const c = 0 === 1 ? 2 : 3;
console.log(c);

const d = 0 < 1 ? 2 : 3 ? 4 : 5;
console.log(d);

const e = 0 > 1 ? 2 : 3 ? 4 : 5;
console.log(e);

const f = 0 <
// if (0 < 1) {
//   a = 2;
// } else {
//   if (3) {
//     a = 4;
//   } else {
//     a = 5;
//   }
// }
