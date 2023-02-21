// Функция для проверки длины строки.

function isCheckStringLength(string, length) {
  return string.length <= length;
}

isCheckStringLength('string to test', 20);
isCheckStringLength('string to test', 18);
isCheckStringLength('string to test', 10);

// console.log(isCheckStringLength('string to test', 20));
// console.log(isCheckStringLength('string to test', 18));
// console.log(isCheckStringLength('string to test', 10));

//Функция для проверки, является ли строка палиндромом.

const isPalindrom = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');

  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }

  return tempString === reverseString;
};

isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('Лёша на полке клопа нашёл ');

// console.log(isPalindrom('топот'));
// console.log(isPalindrom('ДовОд'));
// console.log(isPalindrom('Кекс'));
// console.log(isPalindrom('Лёша на полке клопа нашёл'));

//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
//и возвращает их в виде целого положительного числа.

const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }

  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }

  return parseInt(result, 10);
};

extractNumber('2023 год');
extractNumber('ECMAScript 2022');
extractNumber('1 кефир, 0.5 батона');
extractNumber('а я томат');
extractNumber('2023');
extractNumber('-1');
extractNumber('1.5');

// console.log(extractNumber('2023 год'));
// console.log(extractNumber('ECMAScript 2022'));
// console.log(extractNumber('1 кефир, 0.5 батона'));
// console.log(extractNumber('а я томат'));
// console.log(extractNumber('2023'));
// console.log(extractNumber('-1'));
// console.log(extractNumber('1.5'));

//Функция, которая принимает три параметра:
//исходную строку, минимальную длину и строку с добавочными символами.

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {

    return string;
  }
  const tempPad = pad.slice(0, actualPad % pad.length);
  const tempRepeat = pad.repeat(actualPad / pad.length);

  return tempPad + tempRepeat + string;
};

myPadStart('1', 2, '0');
myPadStart('1', 4, '0');
myPadStart('q', 4, 'werty');
myPadStart('q', 4, 'we');
myPadStart('qwerty', 4, '0');

// console.log(myPadStart('1', 2, '0'));
// console.log(myPadStart('1', 4, '0'));
// console.log(myPadStart('q', 4, 'werty'));
// console.log(myPadStart('q', 4, 'we'));
// console.log(myPadStart('qwerty', 4, '0'));
