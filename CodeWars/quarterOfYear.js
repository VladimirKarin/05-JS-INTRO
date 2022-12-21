console.clear();

function quarterOf(month) {

  if (month <= 3){
  return 1;
} else if ( month <= 6 ){
  return 2;
} else if (month <= 9){
  return 3;
} else if (month <= 12){
  return 4;
}
  
}
console.log('1');
console.log('----------------');
console.log(quarterOf(1));
console.log(quarterOf(2));
console.log(quarterOf(3));
console.log("");
console.log('2');
console.log('----------------');
console.log(quarterOf(4));
console.log(quarterOf(5));
console.log(quarterOf(6));
console.log("");
console.log('3');
console.log('----------------');
console.log(quarterOf(7));
console.log(quarterOf(8));
console.log(quarterOf(9));
console.log("");
console.log('4');
console.log('----------------');
console.log(quarterOf(10));
console.log(quarterOf(11));
console.log(quarterOf(12));