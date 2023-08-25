// minimum

// 1. Створи HTML-файл, в ньому пропиши всі можливі способи використання JS;

// Прописав в індекс

// 2. Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4-х імен змінних, що потрібні тобі для даної задачі. Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані);

const myName = "Max ";
const my_Last_Name = "Kukuruza";
const $myFullName = myName + my_Last_Name;
const myFullName1 = $myFullName;

// неправильно об'явленні змінні
// const 1name;
// const myName%;
// const my Full Name 1;
// const my-Name;

// 3. Вкажи всі можливі способи коментування коду;

// Перший спосіб однострокове коментування
/* Другий спосіб

багато старокове коментування

*/

/**
 * 
 * jsDoc спосіб
 * 
 * 
 * 
 */


// 4. Які стилі написання імен змінних ти знаєш?

const camelCase = "first word with lowercase, then capitalize letter of each word";
const snake_case = "separates words with underscore(_)";
const PascalCase = "first word with capitaliza, then same as camel case ";

// Normal

// 1. Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
const userName = prompt("Enter your name:");
const greeting = "Hello "
console.log(greeting + userName + "!");

// 2. Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
const userBirthYear = prompt("Enter your birth year:");
const currentYear = 2023;
const userAge = currentYear - userBirthYear
console.log("Your age is " + userAge)
// 3. Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
const squareSide = prompt("Enter a side length:")
const squareP = 4 * squareSide
console.log("Perimeter of your square is " + squareP + " centimeters")

// Maximum

// 1. Запитай у користувача радіус кола і виведи площу такої окружності.
const r = prompt("Enter a radius of round:")
const d = +r * 2
const calcArea = ((Math.PI) * d * d) / 4
const roundArea = Math.round(calcArea)
console.log("Area of your round is " + roundArea + " square centimeters");

// 2. Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.

const cityD = prompt("Enter a distance between two cities:")
const userTime = prompt("Enter time you want come to the city:")
const userSpeed = cityD / userTime
const speed = Math.round(+userSpeed)
console.log("Your average speed should be " + speed + "km/h to be in time")


// 3. Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.


const dollars = prompt("Enter your amount of dollars you want to exchange:");
const conversion = 0.93
const Euros = +dollars * conversion
const roundEuros = Euros.toFixed([2])
console.log("You will get " + roundEuros + " euros")
