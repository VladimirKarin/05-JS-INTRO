// Kintamuju inicijavimas
// 1

const firstNum = 1;
console.log(firstNum);

const secondNum = 1.79;
console.log(secondNum);

const thirdNum = 15;
console.log(thirdNum);

// 2

const firstString = "Hello,";
console.log(firstString);

const secondString = "World!";
console.log(secondString);

const thirdString = "Can anyone here me?";
console.log(thirdString);

// 3

const firstArray = [1, 2, 3, 4, 5];
console.log(firstArray);

const secondArray = [1.5, 2.5, 3.5, 4.5, 5.5];
console.log(secondArray);

const thirdArray = [1, 2.5, 3, 3.5, 4];
console.log(thirdArray);

// 4

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

const thirdstrArr = [
  "Poem about arrays",
  "Roses are red",
  "violets are blue",
  "I'm learning some arrays",
  "so can you",
];
console.log(thirdstrArr);

// VEIKSMAI SU KINTAMAISIAIS

// 1

const sumNum = firstNum + secondNum + thirdNum;
console.log(sumNum);

// 2

const sumString = firstString + " " + secondString + " " + thirdString;
console.log(sumString);

// 3

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
const thirdArrayType = typeof thirdstrArr;
console.log(thirdArrayType);

let secondValue = "From end to start with comas and spaces: ";
const separator = ", ";
const ending = ".";

secondValue += thirdstrArr[4] + separator;
secondValue += thirdstrArr[3] + separator;
secondValue += thirdstrArr[2] + separator;
secondValue += thirdstrArr[1] + separator;
secondValue += thirdstrArr[0] + separator;
console.log(secondValue);
