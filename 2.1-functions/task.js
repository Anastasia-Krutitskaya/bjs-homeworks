'use strict'

// Задача №1
function getSolutions(a,b,c) {
  let D = Math.pow(b,2) - 4*a*c;
  if ( D < 0 ) {
    return {
      'D': D,
      roots: []
    };
  } else if ( D == 0 ) {
      let x1 = -b/(2*a);
      return {
        'D': D,
        roots: [x1]
      };
    } else {
        let x1 = (-b + Math.sqrt(D))/(2*a);
        let x2 = (-b - Math.sqrt(D))/(2*a);
        return {
          'D': D,
          roots: [x1,x2]
        };
      }
};

function showSolutionMessage(a,b,c) {
  let result = getSolutions(a,b,c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x^2 + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if ( result.D < 0 ) {
    console.log(`Уравнение не имеет вещественных корней`)
  } else if ( result.D == 0 ) {
    console.log(`Уравнение имеет один корень X1 = ${result.roots[0]}`)
  } else {
    console.log(`Уравнение имеет 2 корня. X1 = ${result.roots[0]}, X2 = ${result.roots[1]}`)
  }
}

 showSolutionMessage(1,2,3);
 showSolutionMessage(7,20,-3);
 showSolutionMessage(2,4,2);


 // Задача №2
function getAverageScore(data) {
  let averageScore = {};
  let average;
  if ( (Boolean(Object.keys(data).length === 0)) ) {
      averageScore.average = 0;
    } else  {
        for (let prop in data) {
          averageScore[prop] = getAverageMark(data[prop]);
        }
        let marksArray = [];
        for ( let mark in averageScore) {
          marksArray.push(averageScore[mark]);
            }
          averageScore.average = getAverageMark(marksArray);
     }
  return averageScore;
}



function getAverageMark(marks) {
    if (marks.length == 0) {
          return 0;
       }
    let sum = 0;
    for ( let i = 0; i < marks.length; i ++) {
        sum += marks[i];
        }
    return sum / marks.length;
  }

let studentsRating = {
  algebra:[2,4,5,2,3,4],
  geometry: [2,4,5],
  russian: [3,3,4,5],
  physics: [5,5],
  music: [2,2,6],
  english: [4,4,3],
  poetry: [5,3,4],
  chemistry: [2],
  french: [4,4]
}

console.log( getAverageScore(studentsRating));


// Задача №3
function getPersonData(secretData) {
  return {
    firstName: getDecodedValue(secretData.aaa),
    lastName: getDecodedValue(secretData.bbb)
  }
}

function getDecodedValue(secret) {
  if ( secret == 0 ) {
    return 'Родриго'
  } else {
    return 'Эмильо'
  }
}
console.log(getPersonData({
  aaa: 0,
  bbb: 0
}))
console.log(getPersonData({
  aaa: 1,
  bbb: 0
}))
console.log(getPersonData({
  aaa: 0,
  bbb: 1
}))
console.log(getPersonData({
  aaa: 1,
  bbb: 1
}))
