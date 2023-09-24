/* 1
let name = "Джон", admin;
admin = name;
alert(admin); */



/* 2 задача способ 1
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
с = a*1 + b*1;
alert(с); */

/* 2 задача способ 2
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

a = parseFloat(a);
b = parseFloat(b);

alert(a+b); */

/* 3 задача

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

*/

/* 4 задача

let i = 0;
while (i < 3) {
    i++;
    alert(`number ${i}!`);
}

*/

/* 5 задача

let number;

do {
  number = prompt("Введите число, большее 100:", "");
} while (number <= 100 && number !== null);

if (number !== null) {
  alert(`Вы ввели число большее 100: ${number}`);
} else {
  alert("Вы отменили ввод.");
}
*/


/* 6 задача
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
  
    return true;
  }
  
  function printPrimesInRange(n) {
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  const n = 10; // Можно легко модифицировать значение n для поиска простых чисел в других интервалах
  printPrimesInRange(n);
  */