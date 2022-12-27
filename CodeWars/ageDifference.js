function differenceInAges(ages) {
  let young = [...ages].sort((a, b) => a - b);
  young = young[0];
  let old = [...ages].sort((a, b) => a - b).reverse();
  old = old[0];
  const average = old - young;
  return [young, old, average];
}
console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
