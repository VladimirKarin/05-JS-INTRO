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
