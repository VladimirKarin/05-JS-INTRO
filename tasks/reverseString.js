// Perrasyti teksta is galo i preki.
console.clear();

function reverseString(str) {
  if (typeof str !== "string") {
    return `ERROR duok string, o ne ${typeof str}!`;
  }

  let text = "";

  // if (str === undefined) {
  //   return 'ERROR duok stringa.'
  // }
  // if (typeof str === 'number') {
  //   return 'ERROR duok stringa, o ne number.'
  // }
  // if (typeof str === 'boolean') {
  //   return 'ERROR duok stringa, o ne boolean.'
  // }
  // if (typeof str === 'object') {
  //   return 'ERROR duok stringa, o ne object.'
  // }
  // if (typeof str === 'function') {
  //   return 'ERROR duok stringa, o ne function.'
  // }

  // 1 eiti is teksto galo, imti simboli ir lipdyti nauja teksta

  // for (let i = str.length - 1; i >= str.length; i--) {
  //   const symbol = str[i];
  //   text += symbol;
  // }

  // 2 eiti is teksto prekio, imti simboli is galo

  // for (let i = 0; i < str.length; i++) {
  //   const symbol = str[str.length - i - 1];
  //   text += symbol;
  // }

  // 3 eiti is teksto prekio, imti simboli is prekio

  for (let i = 0; i < str.length; i++) {
    const symbol = str[i];
    text = symbol + text;
  }

  return text;
}

console.log(reverseString("asd"), "--->", "dsa");
console.log(reverseString("sula"), "--->", "alus");
console.log(reverseString("qwerty"), "--->", "ytrewq");
console.log(reverseString("mazafaka"), "--->", "akafazam");

// console.log(reverseString());
// console.log(reverseString(true));
// console.log(reverseString(false));
// console.log(reverseString(function () {}));
// console.log(reverseString([]));
// console.log(reverseString(333));
// console.log(reverseString(""), "--->", "");
