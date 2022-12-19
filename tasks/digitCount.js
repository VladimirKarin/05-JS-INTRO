console.clear();
/*
Skaitmenu kiekis skaiciuje.
*/

function digitCount(number) {
  if (typeof number !== "number" || !isFinite(number)) {
    return "ERROR";
  }
  // const numberAsString = number.toString();
  const numberAsString = "" + number;
  let count = numberAsString.length;

  if (number < 0) {
    count--;
  }

  if (number % 1 !== 0) {
    count--;
  }

  return count;
}

console.log(digitCount(0), "--->", 1);
console.log(digitCount(5), "--->", 1);
console.log(digitCount(781), "--->", 3);
console.log(digitCount(37061234567), "--->", 11);
console.log(true);
console.log("asd");
console.log(NaN);
// console.log(Infinity);
