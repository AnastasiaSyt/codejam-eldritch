
import {
  brownCards,
  blueCards,
  greenCards
}  from './data/mythicCards/index.js'
import ancientsData from './data/ancients.js'

const testir = brownCards.cardsData[3];
console.log(testir);

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


  /* функция, возвращающая 
  рандомное значение из интервала
*/

  function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
