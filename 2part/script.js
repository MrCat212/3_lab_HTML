// 2 часть

// 1 задание
/* Вернуть число в обратном порядке 123 -> 321.

function reverseNumber(number) {
  const reversed = parseInt(String(number).split('').reverse().join(''));
  return reversed;
}

const reversedNumber = reverseNumber(123);
console.log(reversedNumber);

*/

/* Вернуть число без повторяющихся цифр (например, 111333456 -> 13456):

function removeDuplicates(number) {
  const digits = String(number).split('');
  const uniqueDigits = digits.filter((value, index, self) => {
      return self.indexOf(value) === index;
  });
  const result = parseInt(uniqueDigits.join(''));
  return result;
}

const numberWithoutDuplicates = removeDuplicates(111333456);
console.log(numberWithoutDuplicates);

*/

/* Посчитать, сколько раз в данном числе встречается данная цифра (1355567, 5) -> 3.

function countDigitOccurrences(number, digit) {
  const digitStr = String(digit);
  const numberStr = String(number);
  const regex = new RegExp(digitStr, 'g');
  const matches = numberStr.match(regex);
  return matches ? matches.length : 0;
}

const count = countDigitOccurrences(1355567, 5);
console.log(count);

*/

// Посчитать самую длинную последовательность нулей/единиц в двоичной записи данного числа.
/*
function longestSequenceOfZerosOrOnes(number) {
  const binaryString = number.toString(2);
  const sequences = binaryString.split('0');
  const longestSequence = sequences.reduce((max, current) => {
      return current.length > max ? current.length : max;
  }, 0);
  return longestSequence;
}

const longestSequenceLength = longestSequenceOfZerosOrOnes(1000); // Выводит 5, т.к двоичная запись числа 1000 -> 1111101000
console.log(longestSequenceLength);
*/

// 2 задание

/*Найти самый первый неповторяющийся символ в строке: 'фывфавыапрс' -> 'п'.
function findFirstNonRepeatingChar(str) {
  const charCount = new Map();
  for (const char of str) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  for (const char of str) {
      if (charCount.get(char) === 1) {
          return char;
      }
  }
  return null; // Если нет неповторяющихся символов
}

const str = 'фывфавыапрс';
const firstNonRepeatingChar = findFirstNonRepeatingChar(str);
console.log(firstNonRepeatingChar); 
 */

/* Cгенерировать строку заданной длины из случайных символов, взятых из набора английскийх букв и цифр: (5) -> '2fvg6'.
function generateRandomString(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset[randomIndex];
  }
  return result;
}

const randomString = generateRandomString(5);
console.log(randomString);
*/

/* Вернуть только уникальные символы строки: 'позволяеткопироватьтекстиз' -> 'позвляеткираьс'.

function getUniqueChars(str) {
  const uniqueChars = new Set(str);
  return [...uniqueChars].join('');
}

const str = 'позволяеткопироватьтекстиз';
const uniqueChars = getUniqueChars(str);
console.log(uniqueChars);
*/