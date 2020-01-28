//Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.

let str = 'abcde';
document.write(str[0]);
document.write(str[1]);
document.write(str[4]);

console.log(str[0]);
console.log(str[1]);
console.log(str[4]);

//Напишите скрипт, который считает количество секунд в часе.
let hourse = 1;
let minutes = 60;
let seconds = hourse * minutes * 60;
console.log(seconds)


//Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --. Количество строк кода при этом не должно измениться

var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
console.log(num);

//1.  Создайте переменную num1 и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.

let num1 = 3;
// alert(num1);
console.log(num1)

//2. Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
let a = 10;
let b = 2;
let amount = a + b;
console.log(amount);
let difference = a - b;
console.log(difference);
let composition = a * b;
console.log(composition);
let division = a / b;
console.log(division);

//3. Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.
let c = 15;
let d = 2;
let result = c + d;
console.log(result);

//4. Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.
c = 5
let newResult = amount + c;
console.log(newResult);

//5. Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.

a = 17;
b = 10;
c = a - b;
d = 7;
result = c + d;
console.log(result)

//6. Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.
let strNew = 'Привет, Мир!';
console.log(strNew);

//7. Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.

let str1 = 'Привет, ';
let str2 = 'Мир!';
console.log(str1 + str2);
console.log(`${str1}${str2}`);

//8. Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.

let name = 'Anny';
console.log(`${str1}${name}!`)

//9. Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.

let age = 19;
console.log('Мне' + ' ' + age + ' лет!')
console.log(`Мне ${age} лет!`)

//10. Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.

let nameOne = prompt('What is your name?');
if (nameOne === '' || nameOne === null) {
  console.log('Please, enter your name!!!')
} else {
  console.log(`Your name is ${nameOne}`)
}

//11. Спросите у пользователя число. Выведите с помощью alert квадрат этого числа

let number = prompt('Please, enter any number')
let resultOfTheEnteredNumber = Math.pow(number, 2);
console.log(`The square of the entered number: ${resultOfTheEnteredNumber}`)

//12.  Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.

let newStr = 'abcde';
console.log(newStr[0], newStr[2], newStr[4])

//13. Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.

let newNum = '12345';
let newRes = newNum[0] * newNum[1] * newNum[2] * newNum[3] * newNum[4]
console.log(typeof newRes)
//--------------------------------------------------------------------------
let newRes1 = [1, 2, 3, 4, 5].reduce((a, b) => a * b) //
console.log(newRes1)

// reduce - выполняет функцию callback один раз для каждого элемента, присутствующего в массиве, за исключением пустот, принимая четыре аргумента: начальное значение (или значение от предыдущего вызова callback), значение текущего элемента, текущий индекс и массив, по которому происходит итерация.


let array = [0, 1, 2, 3, 4].reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
});
console.log(array) //10


let initialValue = 0;
let sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.x;
}, initialValue)
console.log(sum)


let flattened = [[0, 1], [2, 3], [4, 5]].reduce(function (a, b) {
  return a.concat(b);
});
console.log(flattened)


let friends = [
  { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
  { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
  { name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
]

let allbooks = friends.reduce(function (prev, curr) {
  return [...prev, ...curr.books];
}, ["Alphabet"]);

console.log(allbooks)

//14.  Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце
// let h = 1;
// let m = 60;
// let s = 60;
// getSecondsInH = h * m * s;
// getSecondsInDay = h * 24 * m * s;
// getSecondsInMonths = h * 24 * 30 * m * s;
// console.log(getSecondsInH);
// console.log(getSecondsInDay);
// console.log(getSecondsInMonths);

//---------------------------------------------------------

let sec = prompt('What are you prefer?', 'hour, day, month');
let h = 1;
let m = 60;
let s = 60;
if (sec === 'Hour' || sec === 'hour' || sec === 'h') {
  getSecondsInH = h * m * s;
  console.log(getSecondsInH);
} else if (sec === 'Day' || sec === 'day' || sec === 'd') {
  getSecondsInDay = h * 24 * m * s;
  console.log(getSecondsInDay);
} else if (sec === 'Month' || sec === 'month' || sec === 'm') {
  getSecondsInMonths = h * 24 * 30 * m * s;
  console.log(getSecondsInMonths);
} else {
  console.log('Chouse another param!')
}

//-------------------------------------------------------------

getSecFoo = (n) => {
  if (n === 1 || n === 'Hour' || n === 'hour' || n === 'h') {
    getSec = 1 * 60 * 60;
  } if (n === 24 || n === 'Day' || n === 'day' || n === 'd') {
    getSec = 1 * 24 * 60 * 60;
  } if (n === 30 || n === 'Month' || n === 'month' || n === 'm') {
    getSec = 1 * 24 * 30 * 60 * 60;
  }
  console.log(getSec);
}

getSecFoo('day')

//15. Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.

let foo = () => {
  setInterval(() => {
    let h1 = new Date().getHours()
    let m1 = new Date().getMinutes()
    let s1 = new Date().getSeconds()
    // console.clear()
    console.log(`${h1 > 12 ? h1 % 12 : h1} : ${m1} : ${s1}`)
  }, 60000);
}
foo()

//16. Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.

let p = 40;
p = Math.pow(p, 2);
console.log(p)

//17. Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=. Количество строк кода при этом не должно измениться.

let numN = 47;
numN += 7;
numN -= 18;
numN *= 10;
numN /= 15;
console.log(numN)

//18. Переделайте этот код так, чтобы в нем использовались операции ++ и --. Количество строк кода при этом не должно измениться.

var numI = 10;
numII = numI++;
numI = numI++;
numI = numI--;
console.log(numI)


//confirm

let yourAge = confirm("Тебе уже есть 18?")
if (yourAge === true) {
  alert('Welcome!')
} else (
  alert('Goodbye!')
)

//19.  Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.

let arr = ['a', 'b', 'c']
console.log(arr);

//20. С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

//21. Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'

let arrayN = ['a', 'b', 'c', 'd'];
console.log(`${arrayN[0]} + ${arrayN[1]}, ${arrayN[2]} + ${arrayN[3]}`)

//22. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.

let arrNum = [2, 5, 3, 9];
let resultN = (arrNum[0] * arrNum[1]) + (arrNum[2] * arrNum[3])
console.log(resultN)

//23. Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:

let obj = { a: 1, b: 2, c: 3 };

console.log(obj['c'])
console.log(obj.c)

//24. Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.

let obj1 = { Коля: '1000', Вася: '500', Петя: '200' };
console.log(`Зарплата Коли:${obj1.Коля}; Зарплата Пети:${obj1.Петя}`)

//25.  Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

let weekObj = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday'
}

console.log(weekObj['5'])
console.log(weekObj[5])

//26. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.


getWeekDay = (date) => {
  let weekArr = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]
  return weekArr[date.getDay() - 1]
}

let date = new Date();
console.log(getWeekDay(date))

//27. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

let multiArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(multiArr[1][0])

// ------------ another way -----------------
let allArr = multiArr.reduce((a, b) => a.concat(b))
console.log(allArr);
console.log(allArr[3])


//30. Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.

let jsObj = {
  js: ['jQuery', 'Angular'],
  php: 'hello',
  css: 'world'
}
console.log(jsObj.js[0])

//31. Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день).

let multiArray = {
  ru: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'],
  en: [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятника',
    'Суббота',
    'Воскресенье']
}
console.log(multiArray.ru[2] + ' and ' + multiArray.en[0])

//32.  Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то), а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day. То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.

let lang = ['ru', 'en']
let day = [0, 1, 2, 3, 4, 5, 6]

getDayName = (lang, day) => {
  if (lang === 'en' && day === 0) {
    return 'Monday'
  }
}

console.log(getDayName(lang[1], day[0]))

//33. Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
let aN = 0;
if (aN === 0) {
  console.log('true')
} else {
  console.log('false')
}

//34. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

let v = 1;
if (v > 0) {
  console.log('true')
} else {
  console.log('false')
}

//35. Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
let k = 1;
if (k < 0) {
  console.log('true')
} else {
  console.log('false')
}

//36.  Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
let pN = 0;
if (pN >= 0) {
  console.log('true')
} else {
  console.log('false')
}

//37.  Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
let q = 0;
if (q <= 0) {
  console.log('true')
} else {
  console.log('false')
}

//38.  Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
let w = 0;
if (w !== 0) {
  console.log('true')
} else {
  console.log('false')
}

//39. Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.
let test = 'test';
if (test === 'test') {
  console.log('true')
} else {
  console.log('false')
}

//40. Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
let test1 = true;
if (test1) {
  console.log('true')
} else {
  console.log('false')
}
//41. Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
let test2 = false;
if (test2 === false) {
  console.log('true')
} else {
  console.log('false')
}

//42.  Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
let j = 6;
if (j > 0 && j < 5) {
  console.log('true')
} else {
  console.log('false')
}
//43. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

let a1 = 2;
if (a1 === 0 || a1 === 2) {
  a1 += 7;
  console.log(a1)
} else {
  a1 /= 10
  console.log(a1)
}

//44. Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
let a2 = 1;
let b2 = 1;
if (a2 <= 1 && b2 >= 3) {
  console.log(a2 + b2)
} else {
  console.log(a2 - b2)
}

//45. Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
let a3 = 12;
let b3 = 5
if (a3 > 2 && a3 < 11 || b3 >= 6 && b3 < 14) {
  console.log('true')
} else {
  console.log('false')
}

//46.  Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

// let num2 = 1;
// switch (num2) {
//   case 1:
//     let res1 = 'Winter'
//     break;

//   case 2:
//     res1 = 'Spring'
//     break;

//   case 3:
//     res1 = 'Autunum'
//     break;

//   case 4:
//     res1 = 'Summer'
//     break;
// }
// console.log(res1)

//47.   В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let dayM = 1;
if (dayM >= 1 && dayM <= 11) {
  console.log('Ferst dacade of the month')
} else if (dayM >= 12 && dayM <= 21) {
  console.log('Second dacade of the month')
} else if (dayM >= 22 && dayM <= 31) {
  console.log('Therd dacade of the month')
} else {
  console.log('Error day')
}

//48. В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let mon = 5;
if (mon >= 1 && mon <= 3) {
  console.log('Winter')
} else if (mon >= 4 && mon <= 6) {
  console.log('Spring')
} else if (mon >= 7 && mon <= 9) {
  console.log('Autunum')
} else if (mon >= 88 && mon <= 12) {
  console.log('Summer')
} else {
  console.log('Error month')
}
//49. Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

let nStr = 'abcde'
if (nStr[0] === 'a') {
  console.log('Yes')
} else {
  console.log('No')
}

//50. Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

let nNum = '12345'
if (nNum[0] === '1' || nNum[0] === '2' || nNum[0] === '3') {
  console.log('Yes')
} else {
  console.log('No')
}

//51. Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

let sumNum = '123'
console.log(+sumNum[0] + +sumNum[1] + +sumNum[2])

//52. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

let ifsumNum = '123123'
let firstNum = +ifsumNum[0] + +ifsumNum[1] + +ifsumNum[2]
let secondNum = +ifsumNum[3] + +ifsumNum[4] + +ifsumNum[5]
if (firstNum === secondNum) {
  console.log('Yes')
} else {
  console.log('No')
}

//53.  Выведите столбец чисел от 1 до 100.
let i = 1;
while (i <= 100) {
  console.log(i++)
}

//-----------------------------------

for (let iNext = 1; iNext <= 100; iNext++) {
  console.log(iNext)
}

//54. Выведите столбец чисел от 11 до 33.

let jN = 11;
while (jN <= 33) {
  console.log(jN++)
}

//------------------------------

for (let jNext = 11; jNext <= 33; jNext++) {
  console.log(jNext)
}

// 55. Выведите столбец четных чисел в промежутке от 0 до 100.
// let chet = 0;

// while (chet <= 100 && chet % 2 == 0 ) {
//   if ( chet % 2 == 0){
//     console.log(chet++)}
// }

//----------------for

for (let chetNext = 0; chetNext <= 100; chetNext++) {
  if (chetNext % 2 == 0) {
    console.log(chetNext)
  }
}

// 56. С помощью цикла найдите сумму чисел от 1 до 100.
console.log('--------------------------------56--------------------------------------')
let resultOfSum = 0;
for (let sumOfNum = 1; sumOfNum <= 100; sumOfNum++) {
  resultOfSum += sumOfNum;
}
console.log(resultOfSum)

//57. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
console.log('--------------------------------57--------------------------------------')
let arrayOfNum = [1, 2, 3, 4, 5];
for (let value of arrayOfNum) {
  console.log(value)
}

let arrayOfNum1 = [1, 2, 3, 4, 5];
for (let key in arrayOfNum1) {
  console.log(arrayOfNum1[key])
}

let arrayOfNum2 = [1, 2, 3, 4, 5];
for (let i = 0; i < arrayOfNum2.length; i++) {
  console.log(arrayOfNum2[i])
}


//58. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
console.log('--------------------------------58--------------------------------------')
///----------------------------------------1
let arrayOfNum3 = [1, 2, 3, 4, 5];
let resultOfSum3 = 0;
for(let value of arrayOfNum3){
   resultOfSum3 += value;
}
console.log(resultOfSum3)
///----------------------------------------2
let arrayOfNum4 = [1, 2, 3, 4, 5];
let resultOfSum4 = 0;
for(let key in arrayOfNum3){
   resultOfSum4 += arrayOfNum4[key];
}
console.log(resultOfSum4)
///----------------------------------------3
let arrayOfNum5 = [1, 2, 3, 4, 5];
let resultOfSum5 = 0;
for(let i = 0; i < arrayOfNum5.length; i++){
   resultOfSum5 += arrayOfNum5[i];
}
console.log(resultOfSum5)
///----------------------------------------4
let arrayOfNum6 = [1, 2, 3, 4, 5];
let resultOfSum6 = 0;
arrayOfNum6.forEach( item => resultOfSum6 += item )
console.log(resultOfSum6)
///----------------------------------------5
let arrayOfNum7 = [1, 2, 3, 4, 5];
let resultOfSum7 = arrayOfNum7.reduce((a, b) => a + b)
console.log(resultOfSum7)
///----------------------------------------6
let arrayOfNum8 = [1, 2, 3, 4, 5];
function arraySum(array){
let sum8 = 0;
for(let i = 0; i < array.length; i++){
    sum8 += array[i];
    }
console.log(sum8);
}
arraySum(arrayOfNum8);

//59. Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.

console.log('--------------------------------59--------------------------------------')
let obj2 = {green: 'зеленый', red: 'красный', blue: 'голубой'}
for ( let key in obj2){
  console.log(`${key} : ${obj2[key]}`)
}

//60.  Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.

console.log('--------------------------------60--------------------------------------')
let obj3 = {
  Коля : '200',
  Вася : '300',
  Петя : '400',
}
for ( let key in obj3){
  console.log(`${key} - зарплата ${obj3[key]} долларов`)
}

//61. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
console.log('--------------------------------61 --------------------------------------')
let array3 = [2, 5, 9, 15, 0, 4];
for ( let value of array3){
  if (value > 3 && value < 10){
    console.log(value)
  }
}
//--------------------------------------

let array4 = [2, 5, 9, 15, 0, 4];
for ( let key in array4){
  if( array4[key] > 3 && array4[key]< 10){
    console.log(array4[key])
  }
}
//-----------------------
let array5 = [2, 5, 9, 15, 0, 4];
for ( let i = 0; i < array5.length; i++){
  if (array5[i] > 3 && array5[i] < 10){
console.log(array5[i])
  }
} 
//-------------------------------
let array6 = [2, 5, 9, 15, 0, 4];
let result6 = array6.filter( item => item > 3 && item < 10)
console.log(result6)


//62. Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

//63. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

//64. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

//65. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

//66. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

//67. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.

//68. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.