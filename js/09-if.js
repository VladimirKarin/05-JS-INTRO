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

LOGINIAI OPERATORIAI:
&& - AND - turi tenkinti visas salygas
|| - OR  - turi tenkinti bent viena salyga

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

console.clear();
console.log("Clear: 80");

// Code Nesting

const day = 1;

if (day === 1) {
  console.log("pirmadienis");
} else if (day === 2) {
  console.log("antradienis");
} else if (day === 3) {
  console.log("treciadienis");
} else if (day === 4) {
  console.log("ketvirtadienis");
} else if (day === 5) {
  console.log("penktadienis");
} else if (day === 6) {
  console.log("sestadienies");
} else if (day === 7) {
  console.log("sekmadienies");
} else {
  console.log("tokia diena savaiteje neegzistoja: :( ");
}

// Atrakcionu parkas

const parkasDirba = true;
const bijauAukscio = false;

// if (parkasDirba) {
//   if (bijauAukscio) {
//   console.log("Einu i parka, nes dirba");
// } else {
//   console.log("Parkas ne dirba. Bandykite kita karta.");
// } else {
//   if (bijauAukscio) {
//     console.log("Parkas nedirba - man pasiseke - liksiu sausomis kelnemis.");
//   } else {
//     console.log("Parkas nedirba. Man liudna, nes norejau nueiti:( ");
//   }
// }

if (parkasDirba && bijauAukscio) {
  console.log("Maaaaamaaaaa!");
} else if (parkasDirba && !bijauAukscio) {
  console.log("Einu i parka - bus smagu");
} else if (!parkasDirba && bijauAukscio) {
  console.log("parkas nedirba- man pasiseke - liksiu sausomis kelnemis");
} else if (!parkasDirba && !bijauAukscio) {
  console.log("Parkas ne dirba. Man liudna nes labai norejau nueiti");
} else {
  console.log("Neimanomas pasiekti atvejis!");
}
