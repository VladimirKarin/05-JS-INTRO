console.clear();

//Kiek duotame (imtinai) intervale yra skaiciu, kurie dalijasi be liekanos is duoto daliklio.

function rangeDivide(from, to, devider) {
  if (typeof from !== "number" || !isFinite(from)) {
    return "ERROR: pirmas parametras turi buti normalus skaicius";
  }
  if (typeof to !== "number" || !isFinite(to)) {
    return "ERROR: antras parametras turi buti normalus skaicius";
  }
  
  }
  if (devider <= 0) {
    return "ERROR trecias parametras ne gali buti mazesnis uz viena";
  }

  let count = 0;

  for (let i = from; i <= to; i++) {
    if (i % devider === 0) {
      count++;
    }
  }

  // return count;
  return `Skaiciu intervale tarp ${from} ir ${to}, besidalijanciu be liekanos is ${devider} yra ${count} vienetai`;
}

console.log(
  rangeDivide(0, 11, 3),
  "--->",
  "Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 3 yra 4 vienetai"
);
console.log(
  rangeDivide(0, 11, 5),
  "--->",
  "Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 5 yra 3 vienetai"
);
console.log(
  rangeDivide(0, 11, 7),
  "--->",
  "Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 7 yra 2 vienetai"
);
console.log(
  rangeDivide(8, 31, 3),
  "--->",
  "Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 3 yra 8 vienetai"
);
console.log(
  rangeDivide(8, 31, 5),
  "--->",
  "Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 5 yra 5 vienetai"
);
console.log(
  rangeDivide(8, 31, 7),
  "--->",
  "Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 7 yra 3 vienetai"
);
console.log(
  rangeDivide(-18, 18, 3),
  "--->",
  "Skaiciu intervale tarp -8 ir 18, besidalijanciu be liekanos is 3 yra 13 vienetai"
);
console.log(
  rangeDivide(-18, 18, 5),
  "--->",
  "Skaiciu intervale tarp -8 ir 18, besidalijanciu be liekanos is 5 yra 7 vienetai"
);
console.log(
  rangeDivide(-18, 18, 7),
  "--->",
  "Skaiciu intervale tarp -8 ir 18, besidalijanciu be liekanos is 7 yra 5 vienetai"
);
// console.log(rangeDivide(0, 11, undefined));
// console.log(rangeDivide(0, undefined, 3));
// console.log(rangeDivide(undefined, 11, 3));
// console.log(rangeDivide(0, 11, null));
// console.log(rangeDivide(0, null, 3));
// console.log(rangeDivide(null, 11, 3));
// console.log(rangeDivide(0, 11, [3]));
// console.log(rangeDivide(0, [11], 3));
// console.log(rangeDivide([0], 11, 3));
// console.log(rangeDivide(0, 11, true));
// console.log(rangeDivide(0, true, 3));
// console.log(rangeDivide(true, 11, 3));
// console.log(rangeDivide(0, 11, ""));
// console.log(rangeDivide(0, "", 3));
// console.log(rangeDivide("", 11, 3));
// console.log(rangeDivide(0, 11, NaN));
// console.log(rangeDivide(0, NaN, 3));
// console.log(rangeDivide(NaN, 11, 3));
// console.log(rangeDivide(-Infinity, 11, 3));
// console.log(rangeDivide(0, Infinity, 3));
// console.log(rangeDivide(0, 11, Infinity));
