/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let returnedNum = 0;
  if (a > b && a > c) {
    returnedNum = a;
  } else if (b > a && b > c) {
    returnedNum = b;
  } else {
    returnedNum = c;
  }
  return returnedNum;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x) return true;

  if (queen.y === king.y) return true;

  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) return true;

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (!a || !b || !c) return false;
  if (
    (a === b && a + b >= c) ||
    (b === c && b + c >= a) ||
    (a === c && a + c >= b)
  ) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const obj = {
    one: 'I',
    two: 'II',
    three: 'III',
    four: 'IV',
    five: 'V',
    six: 'VI',
    seven: 'VII',
    eight: 'VIII',
    nine: 'IX',
    ten: 'X',
  };
  function switcher(numeric) {
    let count = '';
    switch (numeric) {
      case 1:
        count = obj.one;
        break;
      case 2:
        count = obj.two;
        break;
      case 3:
        count = obj.three;
        break;
      case 4:
        count = obj.four;
        break;
      case 5:
        count = obj.five;
        break;
      case 6:
        count = obj.six;
        break;
      case 7:
        count = obj.seven;
        break;
      case 8:
        count = obj.eight;
        break;
      case 9:
        count = obj.nine;
        break;
      case 10:
        count = obj.ten;
        break;
      default:
        break;
    }

    return count;
  }

  let returnedStr = '';
  let number = num;
  while (number > 0) {
    if (number - 10 > 0) {
      returnedStr += obj.ten;
      number -= 10;
    } else {
      returnedStr += switcher(number);
      number = 0;
    }
  }

  return returnedStr;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  function switcher(letter) {
    let count = '';
    switch (letter) {
      case '0':
        count = 'zero';
        break;
      case '1':
        count = 'one';
        break;
      case '2':
        count = 'two';
        break;
      case '3':
        count = 'three';
        break;
      case '4':
        count = 'four';
        break;
      case '5':
        count = 'five';
        break;
      case '6':
        count = 'six';
        break;
      case '7':
        count = 'seven';
        break;
      case '8':
        count = 'eight';
        break;
      case '9':
        count = 'nine';
        break;
      case '-':
        count = 'minus';
        break;
      case '.':
        count = 'point';
        break;
      case ',':
        count = 'point';
        break;

      default:
        break;
    }
    return count;
  }
  let count = 0;
  let returnedStr = '';
  while (count <= numberStr.length - 1) {
    returnedStr += switcher(numberStr[count]);
    if (count !== numberStr.length - 1) {
      returnedStr += ' ';
    }
    count += 1;
  }
  return returnedStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverseStr += str[i];
  }
  return reverseStr === str;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let index = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (letter === str[i]) {
      index = i;
    }
  }
  return index;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const strNumber = String(num);
  let returned = false;
  for (let i = 0; i < strNumber.length; i += 1) {
    if (String(digit) === strNumber[i]) {
      returned = true;
    }
  }
  return returned;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  function sum(start, end) {
    let returnSum = 0;
    for (let i = start; i < end; i += 1) {
      returnSum += arr[i];
    }
    return returnSum;
  }
  let returned = -1;
  for (let i = 1; i <= arr.length - 2; i += 1) {
    const leftSum = sum(0, i);
    const rightSum = sum(i + 1, arr.length);

    if (leftSum === rightSum) {
      returned = i;
    }
  }
  return returned;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let indexOne = 0;
  let indexTwo = 0;
  let direction = 'right';

  let iteration = 0;
  const matrix = [];

  function switcher() {
    switch (direction) {
      case 'right':
        if (
          indexTwo > size - 1 ||
          indexTwo < 0 ||
          matrix[indexOne][indexTwo + 1] !== 0
        ) {
          direction = 'bottom';
        }
        break;
      case 'bottom':
        if (
          indexOne > size - 1 ||
          indexOne < 0 ||
          !matrix[indexOne + 1] ||
          matrix[indexOne + 1][indexTwo] !== 0
        ) {
          direction = 'left';
        }
        break;
      case 'left':
        if (
          indexTwo > size - 1 ||
          indexTwo < 0 ||
          matrix[indexOne][indexTwo - 1] !== 0
        ) {
          direction = 'top';
        }
        break;
      case 'top':
        if (
          indexOne > size - 1 ||
          indexOne < 0 ||
          !matrix[indexOne - 1] ||
          matrix[indexOne - 1][indexTwo] !== 0
        ) {
          direction = 'right';
        }
        break;

      default:
        break;
    }

    return direction;
  }
  for (let i = 0; i < size; i += 1) {
    const row = [];
    for (let index = 0; index < size; index += 1) {
      row[index] = 0;
      iteration += 1;
    }
    matrix[i] = row;
  }
  for (let i = 1; i <= iteration; i += 1) {
    matrix[indexOne][indexTwo] = i;

    switcher();
    if (direction === 'right') {
      indexTwo += 1;
    }
    if (direction === 'bottom') {
      indexOne += 1;
    }
    if (direction === 'left') {
      indexTwo -= 1;
    }
    if (direction === 'top') {
      indexOne -= 1;
    }
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const returnedMatrix = matrix;
  const maxSize = returnedMatrix.length;
  let matrixStorage;

  for (let indexOne = 0; indexOne < maxSize / 2; indexOne += 1) {
    for (
      let indexTwo = indexOne;
      indexTwo < maxSize - indexOne - 1;
      indexTwo += 1
    ) {
      matrixStorage = returnedMatrix[indexOne][indexTwo];
      returnedMatrix[indexOne][indexTwo] =
        returnedMatrix[maxSize - indexTwo - 1][indexOne];
      returnedMatrix[maxSize - indexTwo - 1][indexOne] =
        returnedMatrix[maxSize - indexOne - 1][maxSize - indexTwo - 1];

      returnedMatrix[maxSize - indexOne - 1][maxSize - indexTwo - 1] =
        returnedMatrix[indexTwo][maxSize - indexOne - 1];
      returnedMatrix[indexTwo][maxSize - indexOne - 1] = matrixStorage;
    }
  }
  return returnedMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const returnedArray = arr;
  let key;
  let prevIndex;
  for (let i = 1; i < arr.length; i += 1) {
    key = returnedArray[i];
    prevIndex = i - 1;
    while (prevIndex >= 0 && returnedArray[prevIndex] > key) {
      returnedArray[prevIndex + 1] = returnedArray[prevIndex];
      prevIndex -= 1;
    }
    returnedArray[prevIndex + 1] = key;
  }
  return returnedArray;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  if (str.length === 0 || iterations <= 0) {
    return str;
  }

  function exchange(_str, iteration, startStr, startIteration) {
    if (iteration === 0) return _str;
    let newIteration = iteration - 1;
    let newStr = _str;

    let oddNum = '';
    let notOddNum = '';

    for (let index = 1; index < newStr.length; index += 1) {
      if (index % 2) {
        notOddNum += newStr[index];
      } else {
        oddNum += newStr[index];
      }
    }
    newStr = newStr[0] + oddNum + notOddNum;

    if (newStr === startStr) {
      newIteration =
        startIteration -
        (startIteration - newIteration) *
          Math.floor(startIteration / (startIteration - newIteration));
    }
    newStr = exchange(newStr, newIteration, startStr, startIteration);

    return newStr;
  }

  const newStr = exchange(str, iterations, str, iterations);

  return newStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let arrNumber = Array.from(`${number}`);
  for (let i = arrNumber.length - 1; i >= 0; i -= 1) {
    if (arrNumber[i + 1] !== undefined && arrNumber[i + 1] > arrNumber[i]) {
      for (let iSecond = arrNumber.length - 1; iSecond > i; iSecond -= 1) {
        if (arrNumber[i] < arrNumber[iSecond]) {
          const num1 = arrNumber[i];
          const num2 = arrNumber[iSecond];

          arrNumber[iSecond] = num1;
          arrNumber[i] = num2;
          iSecond = i;
          i += 1;

          const left = arrNumber.splice(0, i);
          const right = arrNumber.reverse();
          arrNumber = [...left, ...right];
        }
      }
      break;
    }
  }
  let returned = '';
  for (let i = 0; i < arrNumber.length; i += 1) returned += arrNumber[i];
  return +returned;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
