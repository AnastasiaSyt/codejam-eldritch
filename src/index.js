
// import {
//   brownCards,
//   blueCards,
//   greenCards
// }  from './data/mythicCards/index.js'

import brownCardsData from './data/mythicCards/brown/index.js';
import greenCardsData from './data/mythicCards/green/index.js';
import blueCardsData from './data/mythicCards/blue/index.js';
import ancientsData from './data/ancients.js'

// const testir = brownCardsData[3];
// console.log(testir);

const Azathoth = document.querySelector('.Azathoth');
const Cthulhu = document.querySelector('.Cthulhu');
const YogSothoth = document.querySelector('.YogSothoth');
const ShubNiggurath = document.querySelector('.ShubNiggurath');

const card = document.querySelector('.card');

let blue1 = document.querySelector('.blue1');
let blue2 = document.querySelector('.blue2');
let blue3 = document.querySelector('.blue3');

let brown1 = document.querySelector('.brown1');
let brown2 = document.querySelector('.brown2');
let brown3 = document.querySelector('.brown3');

let green1 = document.querySelector('.green1');
let green2 = document.querySelector('.green2');
let green3 = document.querySelector('.green3');






/* __________________________________________________________________________________________________ */

/* состав карт в каждом этапе для каждого Древнего: */

const matrixAzathoth = [
  [1, 2, 1],
  [2, 3, 1],
  [2, 4, 0],
];

const matrixCthulhu = [
  [0, 2, 2],
  [1, 3, 0],
  [3, 4, 0],
];

const matrixYogSothoth = [
  [0, 2, 1],
  [2, 3, 1],
  [3, 4, 0],
];

const matrixShubNiggurath = [
  [1, 2, 1],
  [3, 2, 1],
  [2, 4, 0],
];

/* функция, которая считает количество карт каждого цвета
  0 колонка - зеленый
  1 колонка - коричневый
  2 колонка - синий
*/

function showSumByColumn(matrix) {
  let sumResults = [];
  let sum;
  let countColumn = matrix[0].length;

  for (let i = 0; i < countColumn; i++) {
    sum = 0;
    for (let j = 0; j < matrix.length; j++) {
      sum +=matrix[j][i];
    }
    sumResults.push(sum);
  }
console.log(sumResults);
return sumResults;
}

showSumByColumn(matrixAzathoth);

/* функция, которая добавляет значения
  для каждого этапа в зависимости от 
  выбранного Древнего
*/

function addNumbers(matrix) {
    green1.textContent = matrix[0][0];
    brown1.textContent = matrix[0][1];
    blue1.textContent = matrix[0][2];

    green2.textContent = matrix[1][0];
    brown2.textContent = matrix[1][1];
    blue2.textContent = matrix[1][2];

    green3.textContent = matrix[2][0];
    brown3.textContent = matrix[2][1];
    blue3.textContent = matrix[2][2];
  };

  
  Azathoth.addEventListener("click", () => addNumbers(matrixAzathoth));
  Cthulhu.addEventListener("click", () => addNumbers(matrixCthulhu));
  YogSothoth.addEventListener("click", () => addNumbers(matrixYogSothoth));
  ShubNiggurath.addEventListener("click", () => addNumbers(matrixShubNiggurath));


//  __________________________________________________________

// собираю зеленую колоду на примере Азатота

  // let deskLengthGreen = showSumByColumn(matrixAzathoth)[0]; // количество зеленых карт
  // let min = 0;
  // let max = greenCardsData.length - 1;

  // функция которая собирает зеленую колоду

// function addGreenDesk () {
//   let result = [];
//   for (let i=0; i < deskLengthGreen; i++) {
//     if(!result.includes(greenCardsData[getRandomNum(min,max)])) {
//       result.push(greenCardsData[getRandomNum(min,max)])
//     }
//   }
//   console.log(result);
// }
// addGreenDesk();




// функция которая собирает колоду по цветам, на примере Азатота

const green = 0;
const brown = 1;
const blue = 2;

const stage1 = 0;
const stage2 = 1;
const stage3 = 2;

function addFirstDesk(matrix, cardsData, color) {

  let deskLength = showSumByColumn(matrix)[color]; // количество карт
  let min = 0;
  let max = cardsData.length - 1;
  let result = [];

  while (result.length < deskLength) {
    if (!result.includes(cardsData[getRandomNum(min, max)])) {
      result.push(cardsData[getRandomNum(min, max)])
    }
  }
  return result;
}

const firstGreenDesk = addFirstDesk(matrixAzathoth, greenCardsData, green);
const firstBrownDesk = addFirstDesk(matrixAzathoth, brownCardsData, brown);
const firstBlueDesk = addFirstDesk(matrixAzathoth, blueCardsData, blue);

console.log(firstGreenDesk);
console.log(firstBrownDesk);
console.log(firstBlueDesk);

 /* функция, возвращающая 
  рандомное значение из интервала
*/

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* делаем колоды для этапов
*/


/*функция которая выбирает нужное количество карт*/
// function arrayFilled(len, cardsData) {
//   let min = 0;
//   let max = cardsData.length - 1;
//   let array = [];
//   for(len; len > 0; len--) {
//     array.splice(cardsData[getRandomNum(min, max)]);
//   }
//   return array;
// }

// function stageDesk (firstDesk, matrix, color, stage) {
//   let result =[];
//   for (let i=0; i < matrix[stage][color]; i++) {
//     result = firstDesk.pop();
//   }
//   return result;
// }

function stageDesk (firstDesk, matrix, color, stage) {
  let result =[];
  let x = [];
  while (x.length < matrix[stage][color]) {
    result = firstDesk.pop();
    x.push(result);
  }
 return x;
}

// while (arr.length > 0) { // массив уменьшается в цикле пока не достигнет нуля
// 	let first = arr.shift();
// 	let last  = arr.pop();
	
// 	let str = first + last; // тут будет строка '16', потом '25', потом '34'
// 	result.push(str);
// }


// const test1 = stageDesk(firstBrownDesk, matrixAzathoth, brown, stage1);
// console.log(test1);

let arr =[];
const firstStageDesk = arr.concat(stageDesk(firstGreenDesk, matrixAzathoth, green, stage1), stageDesk(firstBrownDesk, matrixAzathoth, brown, stage1), stageDesk(firstBlueDesk, matrixAzathoth, blue, stage1));
const secondStageDesk = arr.concat(stageDesk(firstGreenDesk, matrixAzathoth, green, stage2), stageDesk(firstBrownDesk, matrixAzathoth, brown, stage2), stageDesk(firstBlueDesk, matrixAzathoth, blue, stage2));
const thirdStageDesk = arr.concat(stageDesk(firstGreenDesk, matrixAzathoth, green, stage3), stageDesk(firstBrownDesk, matrixAzathoth, brown, stage3), stageDesk(firstBlueDesk, matrixAzathoth, blue, stage3));

console.log(firstStageDesk);
console.log(secondStageDesk);
console.log(thirdStageDesk);

// const test = stageDesk(firstGreenDesk, matrixAzathoth, green, stage1);
// console.log(test);
// console.log(firstGreenDesk);