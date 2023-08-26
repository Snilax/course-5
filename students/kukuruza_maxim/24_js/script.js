// Мінімум

// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const a = 0.1;
const b = 0.2;
const res = ((+a * 10) + (+b * 10)) / 10;
console.log("Sum is: " + res);

// 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const a1 = "1";
const b2 = 2;
const res1 = +a1 + b2
console.log("Sum is: " + res1);

// 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
/*
const sizeGB = prompt("Enter your disk size in GB :")
const fileSize = 820
const amountFiles = Math.floor((+sizeGB * 1000) / fileSize)
console.log("Your disk can contain " + amountFiles + " files with 820mb size");

// Норма
*/
// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const money = prompt("Enter amount of money you have:")
const chocPrice = prompt("Enter price of chocolate:")

const amountOfChoc = Math.floor(+money / +chocPrice)
const restMoney = (+money - (amountOfChoc * chocPrice)).toFixed([2])
console.log("You can afford " + amountOfChoc + " chocolates, your rest of money is:" + restMoney);

// 2. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

const num = prompt("Enter a three-digit number")
const myArray = num.split("");
alert(myArray.reverse());

// Максимум

// 1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

const deposit = prompt("Enter sum you want to deposit on 2 months");
const yearly = 5
const accrued = (+deposit / 100) * (yearly / 6).toFixed([2])
console.log("On your balance were accrued " + accrued + " money")

// 2. Що повернуть вирази:

console.log(2 && 0 && 3);
//0
console.log(2 || 0 || 3);
//2
console.log(2 && 0 || 3);
//3
