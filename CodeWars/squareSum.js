function squareSum(numbers) {
  let sqrSum = 0;
  function squareConvert(numbers) {
    return numbers ** 2;
  }
  const sqrNumb = numbers.map(squareConvert);
  for (let i = 0; i < sqrNumb.length; i++) {
    sqrSum += sqrNumb[i];
  }

  return sqrSum;
}

console.log(squareSum([1, 2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
console.log(squareSum([]), 0);
