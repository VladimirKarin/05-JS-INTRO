/*
STRINGS (tekstas)
inicijavimas kabutemis:
      -viengubos(')
      -dvigubos(")
      -backtick/apostrofas (`)
*/

const hi = "Hello";
console.log(hi);

const morning = "world!";
console.log(morning);

const sentence = "Hello World!";
console.log(sentence);

const combo1 = hi + " " + morning;
const combo2 = hi + " " + morning;
console.log(combo1);
console.log(combo2);

const user = "John";

// hi, John!
const userHi = "Hi, " + user + "!";
console.log(userHi);

// Vienguba kabute (').
// Dviguba kabute (").
// Vienguba kabute (') ir dvigube kabute (").

const kabute1 = "Vienguba kabute (').";
console.log(kabute1);
const kabute2 = 'Dviguba kabute (").';
console.log(kabute2);

// escape (\)
const kabute112 = "Vienguba kabute (') ir dvigube kabute (\").";
console.log(kabute112);

const kabute212 = "Vienguba kabute (') ir dvigube kabute (\").";
console.log(kabute212);

const kabute3 = "Vienguba kabute (') ir dvigube kabute (\").";
console.log(kabute3);

console.log("---------------------");

const user2 = "John";

const user2Hi = "Hi ," + user2 + "!";
console.log(user2Hi);

//Vienguba kabute (') ir dviguba kabute (")
const kabuciuSakinys =
  "Vienguba kabute (" +
  viengubaKabute +
  ") ir dvygubakabute (" +
  dvygubaKabute +
  ").";

const kabutesBacktick = `Vienguba kabute (${viengubaKabute}) ir dvigube kabute (${dvygubaKabute}).)`;
console.log(kabutesBacktick);

// ${} - veikia tik su `
