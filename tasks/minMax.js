list = [-5, 65, 123, -98, 0, 27, 17, 333, -100];

let min = function (list) {
  let minNumber = list;
  let minimum = Math.min(...minNumber);
  return "The minimum number is- " + minimum;
};

let max = function (list) {
  let maxNumber = list;
  let maximum = Math.max(...maxNumber);
  return "The maximum number is- " + maximum;
};
