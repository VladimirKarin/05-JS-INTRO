function hero(bullets, dragons) {
  const chance = bullets - dragons * 2;
  if (chance >= 0) {
    return true;
  } else {
    return false;
  }
}

console.log(hero(10, 5), true);
console.log(hero(7, 4), false);
console.log(hero(4, 5), false);
console.log(hero(100, 40), true);
console.log(hero(1500, 751), false);
console.log(hero(0, 1), false);
