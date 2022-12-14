// Kintamuju inicijavimas
// 1
console.log("__________1.1__________");

const firstNum = 1;
console.log(firstNum);

const secondNum = 1.79;
console.log(secondNum);

const thirdNum = 15;
console.log(thirdNum);

// 2
console.log("__________1.2__________");

const firstString = "Hello there,";
console.log(firstString);

const secondString = "Little world!";
console.log(secondString);

const thirdString = "Can anyone here me?";
console.log(thirdString);

// 3
console.log("__________1.3__________");

const firstArray = [1, 2, 3, 4, 5];
console.log(firstArray);

const secondArray = [1.5, 2.5, 3.5, 4.5, 5.5];
console.log(secondArray);

const thirdArray = [1, 2.5, 3, 3.5, 4];
console.log(thirdArray);

// 4
console.log("__________1.4__________");

const firstStrArr = ["one", "two", "three", "four", "five"];
console.log(firstStrArr);

const secondStrArr = [
  "Good day",
  "Gutten tag",
  "Добрый день",
  "Laba diena",
  "Bon giorno",
];
console.log(secondStrArr);

const thirdStrArr = [
  "Poem about arrays",
  "Roses are red",
  "violets are blue",
  "I'm learning some arrays",
  "so can you",
];
console.log(thirdStrArr);

// VEIKSMAI SU KINTAMAISIAIS

// 1
console.log("__________2.1__________");

const sumNum = firstNum + secondNum + thirdNum;
console.log(sumNum);

// 2
console.log("__________2.2__________");

const sumString = firstString + " " + secondString + " " + thirdString;
console.log(sumString);

// 3
console.log("__________2.3__________");

const firstArrayType = typeof firstArray;
console.log(firstArrayType);

let value = 0;

value += firstArray[0];
value -= firstArray[1];
value += firstArray[2];
value -= firstArray[3];
value += firstArray[4];

console.log("Value of firstArray's all numbers sum: " + value);

// 4
console.log("__________2.4__________");

const thirdArrayType = typeof thirdstrArr;
console.log(thirdArrayType);

let secondValue = "From end to start with comas and spaces: ";
const separator = ", ";
const ending = ".";

secondValue += thirdStrArr[4] + separator;
secondValue += thirdStrArr[3] + separator;
secondValue += thirdStrArr[2] + separator;
secondValue += thirdStrArr[1] + separator;
secondValue += thirdStrArr[0] + separator;
console.log(secondValue);

// Kintamuju Palygininmas

// 3.1.1
console.log("__________3.1.1__________");

if (firstNum > secondNum) {
  console.log(" Pomidoras ");
} else {
  console.log(" Bandykite kita karta ");
}

if (secondNum > thirdNum) {
  console.log(" Pomidoras ");
} else {
  console.log(" Bandykite kita karta ");
}

if (firstNum > thirdNum) {
  console.log(" Pomidoras ");
} else {
  console.log(" Bandykite kita karta ");
}

// 3.1.2
console.log("__________3.1.2__________");

if (firstNum < secondNum) {
  console.log(" Pomidoras ");
} else {
  console.log(" Bandykite kita karta ");
}

if (thirdNum < firstNum) {
  console.log(" Pomidoras ");
} else {
  console.log(" Bandykite kita karta ");
}

if (secondNum < thirdNum) {
  console.log(" Pomidoras ");
} else {
  console.log(" Bandykite kita karta ");
}

// 3.1.3
console.log("__________3.1.3__________");

if (firstNum === secondNum) {
  console.log(" Pomidoras ");
} else {
  console.log(" Bandykite kita karta ");
}

if (thirdNum === firstNum) {
  console.log(" Pomidoras ");
} else {
  console.log(" Bandykite kita karta ");
}

if (secondNum === thirdNum) {
  console.log(" Pomidoras ");
} else {
  console.log(" Bandykite kita karta ");
}

// 3.1.4
console.log("__________3.1.4__________");

if (firstNum !== secondNum) {
  console.log(" Pomidoras ");
} else {
  console.log(" Bandykite kita karta ");
}

if (thirdNum !== firstNum) {
  console.log(" Pomidoras ");
} else {
  console.log(" Bandykite kita karta ");
}

if (secondNum !== thirdNum) {
  console.log(" Pomidoras ");
} else {
  console.log(" Bandykite kita karta ");
}

// 3.1.5
console.log("__________3.1.5__________");

if (firstNum >= secondNum) {
  console.log(" Pomidoras ");
} else {
  console.log(" Bandykite kita karta ");
}

if (thirdNum >= firstNum) {
  console.log(" Pomidoras ");
} else {
  console.log(" Bandykite kita karta ");
}

if (secondNum >= thirdNum) {
  console.log(" Pomidoras ");
} else {
  console.log(" Bandykite kita karta ");
}

// 3.1.6
console.log("__________3.1.6__________");

if (firstNum <= secondNum) {
  console.log(" Pomidoras ");
} else {
  console.log(" Bandykite kita karta ");
}

if (thirdNum <= firstNum) {
  console.log(" Pomidoras ");
} else {
  console.log(" Bandykite kita karta ");
}

if (secondNum <= thirdNum) {
  console.log(" Pomidoras ");
} else {
  console.log(" Bandykite kita karta ");
}

// 3.2
console.log("__________3.2.0__________");

console.log("Total: " + firstString.length + " letters");

console.log("Total: " + secondString.length + " letters");

console.log("Total: " + thirdString.length + " letters");

// 3.3
// 1
console.log("__________3.3.1__________");

if (firstString.length > secondString.length) {
  console.log(firstString + " -is longer/bigger than- " + secondString);
} else {
  console.log(firstString + " -is shorter/smaller than- " + secondString);
}

if (firstString.length > thirdString.length) {
  console.log(firstString + " -is longer/bigger than- " + thirdString);
} else {
  console.log(firstString + " -is shorter/smaller than- " + secondString);
}

if (thirdString.length > secondString.length) {
  console.log(thirdString + " -is longer/bigger than- " + secondString);
} else {
  console.log(thirdString + " -is shorter/smaller than- " + secondString);
}

// 2
console.log("__________3.3.2__________");

if (firstString.length < secondString.length) {
  console.log(firstString + " -is shorter/smaller than- " + secondString);
} else {
  console.log(firstString + " -is longer/bigger than- " + secondString);
}

if (firstString.length < thirdString.length) {
  console.log(firstString + " -is shorter/smaller than- " + thirdString);
} else {
  console.log(firstString + " -is longer/bigger than- " + secondString);
}

if (thirdString.length < secondString.length) {
  console.log(thirdString + " -is shorter/smaller than- " + secondString);
} else {
  console.log(thirdString + " -is longer/bigger than- " + secondString);
}

// 3
console.log("__________3.3.3__________");

if (firstString.length === secondString.length) {
  console.log(firstString + " -is same length as- " + secondString);
} else {
  console.log(firstString + " -is not the same length as- " + secondString);
}

if (firstString.length === thirdString.length) {
  console.log(firstString + " -is same length as- " + thirdString);
} else {
  console.log(firstString + " -is not the same length as- " + secondString);
}

if (thirdString.length === secondString.length) {
  console.log(thirdString + " -is same length as- " + secondString);
} else {
  console.log(thirdString + " -is not the same length as- " + secondString);
}

// 4
console.log("__________3.3.4__________");

if (firstString.length !== secondString.length) {
  console.log(firstString + " -is not the same length as- " + secondString);
} else {
  console.log(firstString + "  -is same length as-  " + secondString);
}

if (firstString.length !== thirdString.length) {
  console.log(firstString + " -is not the same length as- " + thirdString);
} else {
  console.log(firstString + "  -is same length as-  " + secondString);
}

if (thirdString.length !== secondString.length) {
  console.log(thirdString + " -is not the same length as- " + secondString);
} else {
  console.log(thirdString + " -is same length as- " + secondString);
}

// 5
console.log("__________3.3.5__________");

if (firstString.length >= secondString.length) {
  console.log(
    firstString + " -is bigger/larger or same length as- " + secondString
  );
} else {
  console.log(
    firstString + "  -is NOT bigger/larger or same length as-  " + secondString
  );
}

if (firstString.length >= thirdString.length) {
  console.log(
    firstString + " -is bigger/larger or same length as- " + thirdString
  );
} else {
  console.log(
    firstString + "  -is NOT bigger/larger or same length as-  " + secondString
  );
}

if (thirdString.length >= secondString.length) {
  console.log(
    thirdString + " -is bigger/larger or same length as- " + secondString
  );
} else {
  console.log(
    thirdString + " -is NOT bigger/larger or same length as- " + secondString
  );
}

// 6
console.log("__________3.3.6__________");

if (firstString.length <= secondString.length) {
  console.log(
    firstString + " -is smaller/shorter or same length as- " + secondString
  );
} else {
  console.log(
    firstString +
      "  -is NOT smaller/shorter or same length as-  " +
      secondString
  );
}

if (firstString.length <= thirdString.length) {
  console.log(
    firstString + " -is smaller/shorter or same length as- " + thirdString
  );
} else {
  console.log(
    firstString +
      "  -is NOT smaller/shorter or same length as-  " +
      secondString
  );
}

if (thirdString.length <= secondString.length) {
  console.log(
    thirdString + " -is smaller/shorter or same length as- " + secondString
  );
} else {
  console.log(
    thirdString + " -is NOT smaller/shorter or same length as- " + secondString
  );
}

// 4
if (thirdArray.length > thirdStrArr.length) {
  console.log(thirdArray + " -is biggerlonger than - " + thirdStrArr);
} else {
  console.log(thirdArray + "  -is NOT biggerlonger than -  " + thirdStrArr);
}
