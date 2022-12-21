console.clear();

let classPoints = [];

function betterThanAverage(classPoints, yourPoints) {
   let classPointsTotal = 0;

   for (let i = 0; i < classPoints.length; i++) {
     classPointsTotal += classPoints[i];
    }
    
    classAverage = classPointsTotal / classPoints.length;

    if (classAverage < yourPoints) {
      return classPoints, classAverage, yourPoints, true
    } else {
       return classPoints, classAverage, yourPoints, false
    }
      
    }
    console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);

//   let classPointsTotal = classPoints.map(i => x += i, x = 0);
// console.log(classPoints);
//   classPointsTotal = classPoints.reverse()[0];
//   let classPointsLength = classPoints.length;
//   const classPointd = classPointsTotal / classPointsLength;

//   if (yourPoints >= classPoints) {
//     return true;
//   } else {
//     return false;
//   }

// console.log(betterThanAverage(2, 3));
