// Строгий режим
"use strict"

// Що таке JS?

/*
Javascript - мультипарадигменна,
динамічно типізована, мова програмування.

Будь-яка програма - це певна
послідовність інструкцій (команд)

Інструкції можуть містити:
- значення
- оператори
- вирази
- ключові слова
- коментарі
*/

// СИНТАКСИС

// Коментар
/*
  Коментар
  Коментар
  Коментар
*/

/*
  Причиною ДУЖЕ (98%)
  багатьох невдач
  є - ВАША неуважність.
  Перевіряйте код та помилки в консолі.
*/

// ПРАВИЛО СИНТАКСИСУ № 0
/*
  Все що відкрито - має бути закрито
  Все що закрито - має бути відкрито
*/

// ПРАВИЛО СИНТАКСИСУ № 1 (я раджу)
/*
  Після кожної інструкції
  ставте крапку з комою (;)
  - пишемо кожну інструкцію з нового рядку (і можна не ставити крапку з комою)
*/

// ПРАВИЛО СИНТАКСИСУ № 2
/*
  Мова JS чутлива до регістру!
*/


// ЗМІННІ ТА КОНСТАНТИ

/*
  Змінна - це певний контейтер,
  який може зберігати якісь дані.
  let - оголошує змінну (потрібне тільки в момент оголошення змінної)
*/
// Анатомія:
// let імʼя_змінної;

// Імʼя змінної:
/*
  0) має відповідати данним, які містить змінна
    (або буде містити)
  1) латиниця
  2) букви, цифри, символи $ та _
  3) не може починатись з цифри
  4) не може співпадати одному з ключових
    (зарезервованих) слів
  5) стиль - lowerCamelCase
*/

// Обʼява (створення, оголошення) змінної:
// let userAge;

// Не може бути двох однакових змінних в одній області видимості!

// Присвоєння значення

// Одразу, в момент обʼяви:
// let userAge = 33;

// Потім, в процесі ходу програми:
/*
let userAge;
// ... код ...
userAge = 33; // let писати вже не потрібно.
*/

// Зміна значення
/*
let userAge = 33;
console.log(userAge);
// ... код ...
userAge = 15;
console.log(userAge);

// Динамічна типізація в дії:
userAge = "Дмитро";
console.log(userAge);
// ... код ...
console.log("Мені років: " + userAge);
*/

// Копіювання значення
/*
let userAge = 15;
console.log(userAge);
let otherUserAge;
console.log(otherUserAge);
otherUserAge = userAge;
console.log(otherUserAge);
console.log(userAge);
*/

// Область видимості
/*
  1) не можна використовувати змінну (let)
    до її обʼяви
  2) Змінну "видно" в межах блоку де вона
    обʼявлена та в усіх дочірніх
*/
/*
console.log(userAge); // Помилка
let userAge = 33;
*/

/*
// Тут ми за межами блоку
let userAge = 33;

function someFunction() { // Це функція, яка є JS-блоком
  // Тут ми всередині блоку
  let userAge = 15;
  console.log(userAge);

  if (userAge > 10) { // Це умова, яка є JS-блоком
    let userAge = 10;
    console.log(userAge);
  }
}
someFunction();

// Тут ми за межами блоку
console.log(userAge);
*/

// Константи
// Анатомія:
// const імʼя_змінної;
// значення константи не можна змінити*

/*
const userAge = 33;
console.log(userAge);
userAge = 39; // буде помилка
*/

// !!!
/*
  Використовуйте саме константи (const),
  а змінні (let) тільки тоді, коли
  плануєте змінювати її значення.
*/
// !!!

// Якщо значення константи нам відомо заздалегідь:
/*
const COLOR_GREY = "#424551";
console.log(COLOR_GREY);
*/

// =======================================================================================

// ТИПИ ДАНИХ
/*
  undefined
  null
  number
  string
  boolean
  object
*/

// Оператор typeof повертає тип даних

// undefined (невизначенність)
/*
let userAge;
console.log(typeof userAge); // тип даних
console.log(userAge); // значення

if (typeof userAge === "undefined") {
  console.log('Працюємо...');
}
*/

// null (пустота, порожнеча)
/*
let userAge = null;
console.log(typeof userAge);
console.log(userAge);
*/

// number - число (не велике) та спец. значення
// Number() - примусова зміна типу даних
/*
let userAge = 10;
console.log(typeof userAge);
console.log(userAge);
*/

// Infinity - нескінченність
/*
let result = 10 / 0;
console.log(typeof result);
console.log(result);
*/

// NaN - обчислення не може бути виконано
/*
let result = "Жека" * 10;
console.log(typeof result);
console.log(result);
*/

// string - рядки (текст)
// String() - примусова зміна типу даних
/*
let myAge = "10";
let myName = "Жека";
console.log(typeof myName);
console.log(myName);
console.log(typeof myAge);
console.log(myAge);
*/

// Лапки
/*
  1) Одинарні - ''
  2) Подвійні - ""
  3) Зворотні - `` (раджу)
*/

// В зворотні лапки можна вставляти змінні:
/*
let myAge = 39;
let myName = "Жека";
let myInfo = `Імʼя: ${myName}, вік: ${myAge}`;
console.log(myInfo);
*/

// boolean - правда (true) або брехня (false)
// Boolean() - примусова зміна типу даних
// ! false повернуть: пустий рядок, цифра нуль, undefined, null
/*
let someVar;
console.log(someVar);
console.log(typeof someVar);
console.log(Boolean(someVar));

if (someVar) {
  console.log('Працюємо...');
}
*/

// Основні методи рядків

// Довжина рядка - length
/*
let someString = "Hello world!";
console.log(someString.length);
*/

// Рядок це масив []
/*
let someString = "Hello, my name is Dima!";
console.log(someString[0]);
*/

// Регістр toUpperCase(), toLowerCase()
/*
let someString = "Hello! How are you?";
console.log(someString.toUpperCase());
console.log(someString.toLowerCase());
*/

// Пошук - методи includes, startsWith, endsWith
/*
let someString = "Привіт! Як справи?";
// пошук у всьому рядку:
console.log(someString.includes("спра"));
// починається з
console.log(someString.startsWith("рив"));
// закінчується на
console.log(someString.endsWith("?"));
*/

// Отримання частини рядка - метод slice(start, end)
// від start (включно) до end
/*
let someString = "Привіт! Як справи?";
let someNewString = someString.slice(2, 6);
console.log(someNewString);
*/

// Пошук та заміна replace(що, на що)
// replaceAll() - замінює все, а не тільки перше що знайде
/*
let someString = "#Привіт###!!!";
someString = someString.replace("#", "");
console.log(someString);
someString = someString.replaceAll("#", "");
console.log(someString);
*/


// Основні методи чисел

// Math.floor() - округлення в меншу сторону
/*
let someNotRoundNum = 33.9;
console.log(Math.floor(someNotRoundNum));
*/

// Math.ceil() - округлення в більшу сторону
/*
let someNotRoundNum = 33.001;
console.log(Math.ceil(someNotRoundNum));
*/

// Math.round() - округлення до найближчого цілого
/*
let someNotRoundNum = 33.5;
console.log(Math.round(someNotRoundNum));
*/

// Math.abs - модуль числа
/*
let someNotRoundNum = -33.9;
console.log(Math.abs(someNotRoundNum));
*/

// Math.random() - рандомне число від 0 до 1
// console.log(Math.random());

// Math.max(a, b, c...), Math.min(a, b, c...)
/*
console.log(Math.max(1, 2, -3, 21));
console.log(Math.min(1, 2, -3, 0));
let numMax = Math.max(1, 2, 3, 0, -3);
console.log(numMax);
*/

// parseInt, parseFloat
/*
let someVar = "35.5px";
let someNum = parseFloat(someVar);
console.log(someNum);
console.log(typeof someNum);
*/


// Основні оператори
// !!! Майже всі оператори автоматично
// змінюють тип даних на number
/*
let varOne = "10";
let VarTwo = "3";
*/

// Оператор мінус (-)
/*
let result = varOne - VarTwo;
console.log(result);
console.log(typeof result);
*/

// Оператор ділення (/)
/*
let result = varOne / VarTwo;
console.log(result);
console.log(typeof result);
*/

// Оператор множення (*)
/*
let result = varOne * VarTwo;
console.log(result);
console.log(typeof result);
*/

// Взяття залишку від числа (%)
/*
let result = varOne % VarTwo;
console.log(result);
console.log(typeof result);
*/

// ! Оператор додавання (+)
// (!!! тільки цей оператор (бінарний) НЕ змінює тип даних на число)
// якщо є хоч один операнд є рядком, то результат буде "зшиття", а не додавання
/*
let varOne = "10";
let VarTwo = 31;
let result = varOne + VarTwo;
console.log(result);
console.log(typeof result);
*/

/*
  Операнд - чувак(и), який приймає участь в обчисленні
  Бінарний оператор - коли є 2 операнда
  Унарний оператор - коли тільки 1 операнд
*/

// Унарний оператор додавання
// Використовується тільки з одним операндом
/*
let varOne = +"10";
let varTwo = +"31";
let result = varOne + varTwo;
console.log(result);
console.log(typeof result);
*/

// Інкремент (збільшує на 1), декремент (зменшує на 1)
// ! Працює лише зі змінними
// Можна писати як префіксно, так і суфкісно
// ! суфіксно - результат буде видно не відразу
/*
let someNumOne = 5;
let someNumTwo = 2;

// ++someNumOne;
// --someNumTwo;

console.log(++someNumOne);
console.log(someNumOne);

console.log(someNumTwo--);
console.log(someNumTwo);
*/