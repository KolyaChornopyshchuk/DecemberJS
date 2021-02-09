//1. Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//let greetings = 'hello';
//let company = 'owu';
//let site = 'com';
//let country = 'ua';
//let one = 1;
//let ten = 10;
//let minusNine = -999;
//let oneTwoThree = 123;
//let pi = 3.14;
//let twoPointSeven = 2.7;
//let sixteen = 16;
//let yes = true;
//let no = false;

//2.  Вивести кожну змінну за допомогою: console.log , alert, document.write
//console.log(greetings, company, site, country, one, ten, minusNine, oneTwoThree, pi, twoPointSeven, sixteen, yes, no);
//document.write(greetings);
//document.write(company);
//document.write(site);
//document.write(country);
//document.write(one);
//document.write(ten);
//document.write(minusNine);
//document.write(oneTwoThree);
//document.write(pi);
//document.write(twoPointSeven);
//document.write(sixteen);
//document.write(yes);
//document.write(no);
//alert(greetings);
//alert(company);
//alert(site);
//alert(country);
//alert(one);
//alert(ten);
//alert(minusNine);
//alert(oneTwoThree);
//alert(pi);
//alert(twoPointSeven);
//alert(sixteen);
//alert(yes);
//alert(no);

//3. Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//greetings = 'bye';
//company = '2020';
//site = false;
//country = 380;
//one = true;
//ten = 'hello';
//minusNine = 555;
//oneTwoThree = false;
//pi = 'okay';
//twoPointSeven = true;
//sixteen = '5';
//yes = 10;
//no = true;

//4. Вивести кожну змінну за допомогою: console.log , alert, document.write
//console.log(greetings, company, site, country, one, ten, minusNine, oneTwoThree, pi, twoPointSeven, sixteen, yes, no);
//document.write(greetings);
//document.write(company);
//document.write(site);
//document.write(country);
//document.write(one);
//document.write(ten);
//document.write(minusNine);
//document.write(oneTwoThree);
//document.write(pi);
//document.write(twoPointSeven);
//document.write(sixteen);
//document.write(yes);
//document.write(no);
//alert(greetings);
//alert(company);
//alert(site);
//alert(country);
//alert(one);
//alert(ten);
//alert(minusNine);
//alert(oneTwoThree);
//alert(pi);
//alert(twoPointSeven);
//alert(sixteen);
//alert(yes);
//alert(no);
 
//5. За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//prompt('What is your name?');
//prompt('What is your surname?');
//prompt('How old are you?');

//6. Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
//let myName = prompt('What is your name?');
//let myFathersName = prompt('What is your Fathersname?');
//let myAge = prompt('How old are you?');
//console.log(`Вітаю ${myName} ${myFathersName}. Тобі ${myAge} років`);
//document.write(`Вітаю ${myName} ${myFathersName}. Тобі ${myAge} років`);
//alert(`Вітаю ${myName} ${myFathersName}. Тобі ${myAge} років`)

//7. Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
//let myName = prompt('What is your name?');
//let myFathersName = prompt('What is your Fathersname?');
//let myAge = prompt('How old are you?');
//let myFullname = (myName+myFathersName+myAge);
//console.log(myFullname);

//8. За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
//let number1 = parseInt(prompt('Enter number one!'));
//let number2 = parseInt(prompt('Enter number two!'));
//let number3 = parseInt(prompt('Enter number three!'));
//console.log(number1, number2, number3);


//9. За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.
//let number1 = + prompt('Enter your number1');
//let number2 = + prompt('Enter your number2');
//let number3 = + prompt('Enter your number3');
//let number4 = + prompt('Enter your number4');
//
//const pars1 = parseInt(number1);
//const pars2 = parseInt(number2);
//const pars3 = parseInt(number3);
//const pars4 = parseInt(number4);
//
//let result = (pars1+pars2+pars3+pars4);
//console.log(result);

//10. За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat. Просумувати їх.
// Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
//let number1 = + prompt('Enter your number1');
//let number2 = + prompt('Enter your number2');
//let number3 = + prompt('Enter your number3');
//
//const fl1 = parseFloat(number1);
//const fl2 = parseFloat(number2);
//const fl3 = parseFloat(number3);
//
//let result = (fl1 + fl2 +fl3);
//console.log(result);

//11.За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
//let number1 = + prompt('Enter your number1');
//let number2 = + prompt('Enter your number2');
//let number3 = + prompt('Enter your number1');
//
//let math1 = Math.round(number1);
//let math2 = Math.round(number2);
//let math3 = Math.round(number3);
//
//let result = (math1 + math2 + math3);
//console.log(result);

//12. За допомогою prompt() отримати 2 цілих числа.
//  Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//let number1 = + prompt('Enter your number1');
//let number2 = + prompt('Enter your number2');
//
//let pars1 = parseInt(number1);
//let pars2 = parseInt(number2);
//
//console.log(Math.pow(pars1, pars2));

//13. //  За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//  Example. Число 1 = 5. Число 2 = 2. Результат = 25 
//let number1 = 10;
//let number2 = 2;
//console.log(Math.pow(number1, number2));

//14. За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//let a = 100;
//let b = '100';
//let c = true;
//
//console.log(typeof a);
//console.log(typeof b);
//console.log(typeof c);
 


//15. Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//В однакових виразаї не використовувати однакові оператори!!!
//  5 < 6 -> true
//  5 > 6 -> false
//  5 == 6 -> false
//  5 === 6 -> false
//  10 === 10 -> true
//  10 >= 10 -> true
//  10 < 10 -> false
//  10 > 10 -> false
//  10 !== 10 -> false
//  123 < '123' -> false
//  123 === '123' -> true


//Додатково:
// Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
//console.log(132 > 100 && 45 < 12 ); //-false
//console.log(34 > 33 && 23 < 90 ); //- true
//console.log(99 > 100 && 45 > 12 ); //- false
//console.log(132 > 100 || 45 < 12 ); //- true
//console.log(111 > 11 || 45 < 111 ); //- true
//console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); //-true
//console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); //- true
//console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); //- false
//console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));// - true
//console.log(!!'-1'); // true
//console.log(!!-1); // true
//console.log(!!'0'); // true
//console.log(!!'null'); // true
//console.log(!!'undefined'); // true
//console.log(!!(3/'owu')); // true
//console.log((111 > 11 || 45 < 111) ||  !!'0'); //true
//console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); //false


//1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
//   За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
//let str = 'Привіт';
//let num = 123;
//let flag = true;
//let txt = 'true';
//
//console.log(typeof(str));
//console.log(typeof(num));
//console.log(typeof(flag));
//console.log(typeof(txt));
//
//2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//    34,
//    12,
//    66,
//    90,
//    87
//    Старайтесь використовувати різні оператори. 
//    Example: 88 = (16 / 2) * 11
//let a1 = 6;
//let a2 = 2;
//let a3 = 16;
//let a4 = 30;
//let a5 = 3;
//
//console.log(a2 + a2 *a3);
//console.log(a4 / a5 + a2);
//console.log(a3 * a1 -a4);
//console.log(a3 * a1 - a1);
//console.log(a4 * a5 - a5);


//
//3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//    5 % 3,
//    3 % 5,
//    5 + '3',
//    '5' - 3,
//    75 + 'кг'
//let a6 = 5 % 3;
//let a7 = 3 % 5;
//let a8 = 5 + '3';
//let a9 = '5' - 3;
//let a10 = 75 + 'кг';
//
//console.log(a6, a7, a8, a9, a10);
//

//4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//   Значееня площі зберігати в змінній s.
//let height = '23cm';
//let width = '10cm';
//let pars1 = parseInt(height);
//let pars2 = parseInt(width);
//let s = (pars1 * pars2);
//console.log(s);
//
//5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//    результат поместите в переменную v.
//let heightC = '10m';
//let dC = '4m';
//let pars3 = parseInt(heightC);
//let pars4 = parseInt(dC);
//let v = (pars3 * pars4);
//console.log(v);
//
//6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//   Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
//const n = 3;
//const m = 4;
//const k = (Math.pow(n, 2) + Math.pow(m, 2) );
//console.log(Math.sqrt(k));
//console.log(k);
//
//7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
//const str = "Hello World";
//alert(str);
//console.log(str);
//document.write(str);
//
//8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
//alert('Chornopyshchuk\nMykola\nVolodymyrovych\nage:25\nCybersport');
//
//9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//  Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//  Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//  Вывести в документ содержимое переменной concatenation спомощью document.write
//let str1 = 'Кто';
//let str2 = 'ты';
//let str3 = 'такой?';
//
//let concatenation = (str1 + str2 + str3);
//document.write(concatenation);
//
//10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему? 
   //let str = "20";
   // let a = 5;
   // document.write(str + a + "<br/>"); --- 205(Бо ми просто додали два елементи один до одного не перетворюючи їх у суму.)
   // document.write(str - a + "<br/>");-----15(Тут вже навпаки, стрінга перетворилася в цифру і здійснилася операція)
   // document.write(str * "2" + "<br/>");----40(Тут обидві стрінги перетворилися в цифри і здійснилася операція)
   // document.write(str / 2 + "<br/>");-----10(Тут  стрінга перетворилася в цифру і здійснилася операція)

//11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//console.log(parseInt("3.14"));        3
//console.log(parseInt("-7.875"));    -7
//console.log(parseInt("435"));        435
//console.log(parseInt("Вася"));       NaN
//let a = parseInt("3.14");
//let b = parseInt("-7.875");
//let c = parseInt("435");
//let d = parseInt("Вася");
// 
//console.log(a,b,c,d);


//12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
   // let str = prompt("Enter something", "ho-ho")
   // console.log(str);

   // let srt = prompt( 'Ok, gimme your password', 'yeah that fits');
   // console.log(srt);
//
//13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
//let input1 = + prompt('Throw me  some numbers', 10);
//let input2 = + prompt('Do it again', 15);
//alert(input1 + input2);

//14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//      Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
//let firstName = prompt('enter your first name');
//let lastName = prompt('enter your last name');
//let age = prompt(' enter your age');
//let result = alert('Доброго вечера,'+ firstName + lastName +',мои поздравления что вам' + age);

//=====================
//======ДОП============
//=====================
//
//
//
//

//1. Три різних числа вводяться через prompt().
//За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
//let number1 = + prompt('Please, enter first number');
//let number2 = + prompt('Please, enter second number');
//let number3 = + prompt('Please, enter third number');
//
//if (number1 > number2 && number1 > number3) {
//        if (number2 > number3) {
//        console.log(number3, number2, number1);
//        }
//        else  {
//        console.log(number2, number3, number1);
//        }
//                }
//    else if (number2 > number1 && number2 > number3 ) {
//        if (number1 > number3) {
//        console.log(number3, number1, number2);
//        }
//        else {
//        console.log(number3, number1, number2);
//        }
//    }
//    else if (number3 > number1 && number3 > number2) {
//        if (number2 > number1) {
//        console.log(number1, number2, number3);
//        }
//        else {
//        console.log(number2, number1, number3);
//        }
//    }




//
//2.
//Все параматры получаем с клавиатуры!!!!
//Имитируем поведение пешехода на перекстке.
//Если светофор зеленый - вывести "иди".
//Если светофор желтый - вывести "подожди".
//Если светофор красный - вывести "стой".
//Если светофор в аварийном режиме вывести "делай что хочешь"!
//
//let lights =  prompt('What is the traffic lights color?', 'green');
//if (lights =='green' ) {
//alert('GO!')
//}
//else if (lights == 'yellow') {
//    alert('WAIT!')
//}
//else if (lights == 'red') {
//    alert('STAY!')
//}
//else {
//    alert('DO WHATEVER YOU WANT!')
//}

//3
//Все параметры получаем с клавиатуры!!!!(prompt , confirm)
//Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//Улучшаем предыдущее задание.
//Если светофор зеленый и машин нет - вывести "иди".
//Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
//Если светофор желтый и машины есть - вывести "жди".
//Если светофор желтый и машин нет - вывести "все рано жди".
//Если светофор красный и машин нет- вывести "стой все рано".
//Если светофор красный - и машины есть вывести "стой и жди".
//Если светофор в аварийном режиме вывести "делай что хочешь!"
//let lights =  prompt('What is the traffic lights color?', 'green');
//let isRoadClear = prompt('Is road clear?', 'yes');
//if (lights =='green' ) {
//    if (isRoadClear == 'yes')
//alert('GO!')
//else {
//    alert('WAIT UNTIL THE VIOLATORS PASS!')
//}
//}
//else if (lights == 'yellow') {
//    if(isRoadClear == 'yes') {
//        alert('WAIT ANYWAY!')
//    }
// else {
//    alert('WAIT!')
// }   
//}
//else if (lights == 'red') {
//    if(isRoadClear == 'yes') {
//        alert('STAY ANYWAY!')
//    }
//
// else {
//    alert('STAY AND WAIT!')
// }
//}
//else {
//    alert('DO WHATEVER YOU WANT!')
//}
//