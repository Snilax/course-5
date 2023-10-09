//МІНІМУМ
// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
const userAge = +prompt('How old you are?');
if (userAge >= 0 && userAge <= 11) {
    console.log('You are a child');
} else if (userAge >= 12 && userAge <= 17) {
    console.log('You are a teenager');
} else if (userAge >= 18 && userAge <= 59) {
    console.log('You are an adult');
} else if (userAge >= 60) {
    console.log('You are an pensioneer people');
} else {
    console.log('undefiend');
}

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
const userNum = +prompt('Please enter a number');
let num1
switch (userNum) {
    case 1:
        num1 = '!';
        break;
    case 2:
        num1 = '@';
        break;
    case 3:
        num1 = '#';
        break;
    case 4:
        num1 = '$';
        break;
    case 5:
        num1 = '%';
        break;
    case 6:
        num1 = '^';
        break;
    case 7:
        num1 = '&';
        break;
    case 8:
        num1 = '*';
        break;
    case 9:
        num1 = '(';
        break;
    default:
        num1 = 'undefiend';
}
console.log(num1);

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const firstValue = +prompt('First value');
const secondValue = +prompt('Second value');
const sumValue = 0;
const sentence = 'Sum of the numbers:';

while (firstValue <= secondValue) {
    sumValue = sumValue + firstValue;
    firstValue++;
}
console.log(sentence + ' ' + sumValue);

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

const firstNum = +prompt('First of number?');
const secondNum = +prompt('Second of number?');
let greatestСommonDivisor = 1;

for (let i = firstNum > secondNum ? firstNum : secondNum; i > 0; i--) {
    if (firstNum % i === 0 && secondNum % i === 0);
    greatestСommonDivisor = i;
    break;
}
console.log(greatestСommonDivisor);

// Запитай у користувача число і виведи всі дільники цього числа.
const userNum1 = +prompt('Enter some number');

for (let i = 1; userNum1 >= i; i++) {
    if (userNum1 % i === 0) {
        console.log(i);
    }
}

//НОРМА
// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

const PalindromeNum = +prompt('Enter some five-digit number to digest whether it is a palindrome');

const userNumber1 = ~~(PalindromeNum / 10000);
const userNumber2 = ~~(PalindromeNum / 1000) % 10;
const userNumber3 = ~~(PalindromeNum / 100) % 10;
const userNumber4 = ~~(PalindromeNum / 10) % 10;
const userNumber5 = PalindromeNum % 10;

const isPalindrome = 'this number is palindrome';
const isNotPalindrome = 'this number isn`t palindrome';

if (PalindromeNum === (userNumber5 * 10000) + (userNumber4 * 1000) + (userNumber3 * 100) + (userNumber2 * 10) + userNumber1) {
    console.log(isPalindrome);
} else {
    console.log(isNotPalindrome);
}

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

const sumBuying = +prompt('Your purchase amount?');

const discount3persent = 'your 3% discount';
const discount5persent = 'your 5% discount';
const discount7persent = 'your 7% discount';

if (sumBuying >= 200 && sumBuying <= 299) {
    console.log(discount3persent)
} else if (sumBuying >= 300 && sumBuying <= 499) {
    console.log(discount5persent);
} else if (sumBuying >= 500) {
    console.log(discount7persent);
} else {
    console.log('undefiend');
}

// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. 
// Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

let positiveNumbers, negariveNumbers, zeroNumber, evenNumber, ddNumber = 0;

const ansPositiveNumbers = 'The number of positive integers is:';
const ansNegativeNumbers = 'The number of negative integers is:';
const ansZeroNumbers = 'The number of numbers that are equal to zero:';
const ansEvenNumbers = 'The number of even integers is:';
const ansOddNumbers = 'The number of odd integers is:';

for (let i = 0; i < 10; i++) {
    const enterNumber = +prompt('Please enter number');

    if (typeof enterNumber === 'number') {
        if (enterNumber > 0) {
            positiveNumbers++;
        } else if (enterNumber < 0) {
            negariveNumbers++;
        } else {
            zeroNumber++;
        }

        if (enterNumber % 2 === 0) {
            evenNumber++;
        } else {
            oddNumber++;
        }
    }
}

console.log(ansPositiveNumbers + ' ' + positiveNumbers);
console.log(ansNegativeNumbers + ' ' + negariveNumbers);
console.log(ansZeroNumbers + ' ' + zeroNumber);
console.log(ansEvenNumbers + ' ' + evenNumber);
console.log(ansOddNumbers + ' ' + oddNumber);

// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
let isConfirmed;
let dayOfWeek = 1;
const textConfirm = ' Do you want to see the next day of the week?';

do {
    switch (dayOfWeek) {
        case 1:
            isConfirmed = confirm('Monday' + textConfirm);
            break;
        case 2:
            isConfirmed = confirm('Tuesday' + textConfirm);
            break;
        case 3:
            isConfirmed = confirm('Wednesday' + textConfirm);
            break;
        case 4:
            isConfirmed = confirm('Thursday' + textConfirm);
            break;
        case 5:
            isConfirmed = confirm('Friday' + textConfirm);
            break;
        case 6:
            isConfirmed = confirm('Saturday' + textConfirm);
            break;
        case 7:
            isConfirmed = confirm('Sunday' + textConfirm);
            break;
    }
    dayOfWeek = dayOfWeek + 1;

    if (dayOfWeek > 7) {
        dayOfWeek = 1;
    }

} while (isConfirmed);
