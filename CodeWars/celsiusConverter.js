console.clear();

function weatherInfo(temperature) {
  var c = Math.round((temperature - 32) * (5 / 9));
  if (c < 0) {
    return c + " is freezing temperature";
  } else {
    return c + " is above freezing temperature";
  }
}

console.log(weatherInfo(78));
