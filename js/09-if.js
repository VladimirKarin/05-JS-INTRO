console.clear();
/*
IF

Palyginimo Operatoriai:
Visi: >, <, >=, <=, ===, !==, ==, !=
Naudotini: >, <, >=, <=, ===,!== 
Nenaudotini: ==, !=


IF () {}
IF () {} else {}
IF () {} else IF () {}
IF () {} else IF () {} else {}
IF () {} else IF () {} else IF () {}
IF () {} else IF () {} else IF () {} else IF () {} else {}..
*/
const a = 7;
const b = 5;
//jeigu a daugiau b tai spasudiname "A daugiau uz B"

// jeigu A nera daugiau uz B, tai spausdiname ' A nera daugiau uz B'
console.log("start");

console.log();
if (a >= b) {
  console.log(a + " daugiau arba lygu uz " + b);
} else {
  console.log(a + " nera daugiau arba lygu uz " + b);
}

console.log();
if (a <= b) {
  console.log(a + " maziau arba lygu uz " + b);
} else {
  console.log(a + " nera maziau arba lygu uz " + b);
}

console.log();
if (a == b) {
  console.log(a + " yra lygu " + b);
} else {
  console.log(a + " nera lygu " + b);
}

console.log();
if (a != b) {
  console.log(a + " ne lygu " + b);
} else {
  console.log(a + "  lygu " + b);
}

console.log("___________________________________");

const c = 11;
const d = 13;
console.log();
if (c > d) {
  console.log(c + " daugiau uz" + d);
} else if (c < d) {
  console.log(c + " maziau uz " + d);
} else if (c == d) {
  console.log(c + " lygu " + d);
} else {
  console.log("kazkas neaiskaus su C ir D");
}

console.log("end");

console.log("___________________________________");
if (5 === 5) {
  console.log("Ar lygu? " + "-Taip");
}

if (5 !== 3) {
  console.log("Ar ne lygu ?" + "-Taip");
}
