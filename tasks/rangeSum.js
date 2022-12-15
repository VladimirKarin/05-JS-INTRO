console.clear();
/*
Susumuoti (sveikuosius) skaicius intervale "nuo" - "iki".

jeigu 'from' yra mazesnis uz 'to' tai:
  cirklas from-to
jeigu 'from' yra didesnis uz 'to;, tai
  ciklas to-from


  if (from < to), {
    ciklas from-to
  }

  if (from > to), {
    ciklas to-from
  }
*/

function rangeSum(from, to) {
  // parametru validacija
  // if (typeof from !== "number"
  //     || typeof to !== "number"
  //     || !isFinite(from)
  //     || !isFinite(to)
  //     || from % 1 !== 0
  //     || to % 1 !== 0  ) {
  //       return 'ERROR: visi parametrai turi buti sveikieji skaiciai.'
  //     }

  if (typeof from !== "number") {
    return "ERROR:", "Pirmasis parametras turi buti skaicius";
  }

  if (typeof to !== "number") {
    return "ERROR:", "Antrasis parametras turi  buti skaicius";
  }

  if (!isFinite(from)) {
    return "ERROR:", "Pirmasis parametras turi buti normalus skaicius";
  }

  if (!isFinite(to)) {
    return "ERROR:", "Antrasis parametras turi buti normalus skaicius";
  }

  if (from % 1 !== 0) {
    return "ERROR:", "Pirmasis parametras turi buti sveikasis skaicius";
  }

  if (to % 1 !== 0) {
    return "ERROR:", "Antrasis parametras turi buti sveikasis skaicius";
  }

  // if (from === -Infinity || from === Infinity || isNaN(from)) {
  //   return "ERROR:", "Pirmasis parametras turi buti normalus skaicius";
  // }

  // if (to === -Infinity || to === Infinity || isNaN(to)) {
  //   return "ERROR:", "Antrasis parametras turi buti normalus skaicius";
  // }

  // if (typeof from === "string") {
  //   return "ERROR:", "Pirmasis parametras ne gali buti string";
  // }

  // if (typeof to === "string") {
  //   return "ERROR:", "Antrasis parametras ne gali buti string";
  // }

  // if (to === Infinity) {
  //   return "ERROR:", "Pirmasis parametras turi buti normalus skaicius";
  // }
  // if (from === Infinity) {
  //   return "ERROR:", "Antrasis parametras turi buti normalus skaicius";
  // }
  //----------------------------------------------------------------------

  // Logika
  let sum = 0;

  if (from < to) {
    for (let i = from; i <= to; i++) {
      sum += i;
    }
  }

  if (from > to) {
    for (let i = from; i <= to; i++) {
      sum += i;
    }
  }

  if (from === to) {
    sum += from;
  }

  // Rezultato validacija

  // Grazinimas rezultato
  return sum;
}

console.log(rangeSum(0, 4), "--->", 10);
console.log(rangeSum(0, 100), "--->", 5050);
console.log(rangeSum(-50, 50), "--->", 0);
console.log(rangeSum(0, 0), "--->", 0);
console.log(rangeSum(574, 815), "--->", "large number");
console.log(rangeSum(-70, 30), "--->", 2020);

// console.log(rangeSum(0, Infinity));
// console.log(rangeSum(Infinity, 0));

// console.log(rangeSum(0, NaN));
// console.log(rangeSum(NaN, 0));
console.log(rangeSum("labas", 30), "--->", "ERROR");
console.log(rangeSum(-70, "labas"), "--->", "ERROR");
console.log(rangeSum("labas", "rytas"), "--->", "ERROR");

console.log(rangeSum(2.5, 10));
console.log(rangeSum(2, 10.5));
console.log(rangeSum(2.5, 10.5));
