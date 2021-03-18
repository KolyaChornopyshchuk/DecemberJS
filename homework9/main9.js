//1.- створити функцію яка виводить масив
//let arr = [1, 2, 3, 4 ,5];
//function printArray (array) {
//    console.log(array);
//    for (number of array) {
//        console.log(number);
//    }
//}
//printArray(arr);

//2- створити функцію яка заповнює масив рандомними числами 
//та виводить його. Для виведення використати попвередню функцію.
//function printArray (array) {
//    console.log(array);
//    for (number of array) {
//        console.log(number);
//    }
//}
//function createArray(length, min, max) {
//    let array = [];
//    for (i = 0; i < length; i++ ) {
//        array.push(Math.floor(Math.random() *(max- min) + min))
//    }
//    return array
//}
//const array1 = createArray(20, 10, 100);
//printArray(array1);

//3- створити функцію яка приймає три числа та виводить та повертає найменьше.
//function returnMinfromThree(a, b, c) {
//    let min;
//    if(a <= b && a <= c) min =a;
//    if(b <= a && b <= c) min =b;
//    if(c <= a && c <= b) min =c;
//
//    console.log(min);
//    return min
//}
//const min = returnMinfromThree(11, 3, 22);
//console.log(min);

//4.- створити функцію яка приймає три числа та виводить та повертає найбільше.
//function returnMaxfromThree(a, b, c) {
//    let max;
//    if(a >= b && a >= c) max = a;
//    if(b >= a && b >= c) max = b;
//    if(c >= a && c >= b) max = c;
//
//    console.log(max);
//    return max
//}
//const max = returnMaxfromThree(11, 3, 22);
//console.log(max);

//5.- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//function returnMinprintMax () {
//console.log(arguments);
//    let min = arguments[0];
//    let max = arguments[0];
//
//    for (argument of arguments) {
//        if(argument > max ) max = argument;
//        if(argument < min ) min = argument;
//    }
//    console.log('max', max);
//    return min;
//}
//let min = returnMinprintMax(10, 35, 4, 29, 100);
//console.log('min', min);

//6.- створити функцію яка виводить масив
//function printArray (arr) {
//    console.log(arr);
//}
//
//printArray([1, 2, 3, 4, 5]);

//7.- створити функцію яка повертає найбільше число з масиву
//function maxFromArr (arr) {
//    let max = arr[0];
//    for (argument of arr) {
//        if(max < argument) max = argument;
//    
//       }
//       return max;
//}
//let max = maxFromArr([22, 3, 100, 5, 12]);
//console.log(max);

//8.- створити функцію яка повертає найменьше число з масиву
//function minfromArr (arr) {
//    let min = arr[0];
//    for (argument of arr) {
//        if (argument > min) min = argument;
//    }
//    return min;
//}
//let min = minfromArr([1, 2, 3, 4, 5]);
//console.log(min);

//9.- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
//function concatArr (arr) {
//let result = 0;
//for (const argument of arr) {
//    result += argument;
//}
//return result
//}
//let concat = concatArr ([22, 3, 100, 5, 12]) ;
//console.log(concat);  

//10.- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function averagefromArr (array) {
//     let result = 0;
//     for (const item of array) {
//        result += item ;  
//     }   
//     return result/array.length;
// }
//
//const average = averagefromArr([21, 4, 22, 50, 103]);
//console.log(average);

//11.- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
//function objectsArray (array) {
//    let amount = 0;
//    for (item in array) {
//        amount = item;
//    }
//    return amount;
//}
//let arr = [
//
//    {id : 'ua', 
//    model : 965,
//    producer : 'ZAZ',
//    tankVolume : 0.75,
//    horsePower : 23, 
//    image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Saporoshez_ZAZ_965_A.JPG/250px-Saporoshez_ZAZ_965_A.JPG'
//    }, 
//    
//    {id : 'ua', 
//    model : 'Lanos',
//    producer : 'Daewoo',
//    tankVolume : 1.3,
//    horsePower : 70, 
//    image : 'https://lanos-club.org.ua/wp-content/uploads/2017/11/x17052016.jpg.pagespeed.ic_.987NotpPTZ.jpg'
//    }, 
//    
//    {id : 'd', 
//    model : 'X5',
//    producer : 'BMW',
//    tankVolume : 4.3,
//    horsePower : 286, 
//    image : 'https://garage-news.com/wp-content/uploads/2020/07/BMW-iX3-official-pics-2020-21-256x256.jpg'
//    }, 
//    
//    {id : 'usa', 
//    model : 'Explorer',
//    producer : 'Ford',
//    tankVolume : 4.0,
//    horsePower : 165, 
//    image : 'https://roadres.com/images/top/ford/explorer-6.jpg'
//    }, 
//    
//    {id : 'jpn', 
//    model : 'MDX',
//    producer : 'Acura',
//    tankVolume : 3.0,
//    horsePower : 325, 
//    image : 'https://avto-russia.ru/autos/acura/photo/acura_mdx_1.jpg'
//    }, 
//    
//    {id : 'usa', 
//    model : 'Durando',
//    producer : 'Dodge',
//    tankVolume : 6.2,
//    horsePower : 420, 
//    image : 'https://pictures.dealer.com/m/midwaydodgeiicllc/0749/8cb35d2dc19f9b555eff75c3c8e17f57x.jpg?impolicy=downsize&w=568'
//    }, 
//    
//    {id : 'd', 
//    model : 'Transporter',
//    producer : 'Volkswagen',
//    tankVolume : 1.8,
//    horsePower : 68, 
//    image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/VW_T4_front_20080215.jpg/305px-VW_T4_front_20080215.jpg'
//    }, 
//    
//    {id : 'jpn', 
//    model : 'Rogue',
//    producer : 'Nissan',
//    tankVolume : 2.0,
//    horsePower : 141, 
//    image : 'https://cdn.riastatic.com/photosnew/auto/photo/Nissan_Rogue__211800699f.jpg'
//    }, 
//    
//    {id : 'd', 
//    model : 'Vito',
//    producer : 'Mercedes-Benz',
//    tankVolume : 2.1,
//    horsePower : 190, 
//    image : 'http://i.otzovik.com/objects/b/50000/44225.png'
//    }, 
//    
//    {id : 'jpn', 
//    model : 'Prius',
//    producer : 'Toyota',
//    tankVolume : 1.8,
//    horsePower : 98, 
//    image : 'https://cdn.riastatic.com/photosnewr/ria/news_common/policejskie-toyota-prius-priznany-samymi-ekonomichnymi-mashinami-s-dv__228187-940x0.jpg'
//    }, 
//    
//    {id : 'usa', 
//    model : 'Model X',
//    producer : 'Tesla',
//    tankVolume : 90,
//    horsePower : 262, 
//    image : 'https://cdn.segodnya.ua/img/article/11132/38_main_new.1518358697.jpg'
//    }, 
//    
//    {id : 'swe', 
//    model : 'XC90',
//    producer : 'Volvo',
//    tankVolume : 1.9,
//    horsePower : 320, 
//    image : 'https://a.d-cd.net/7fd714as-960.jpg'
//    }, 
//    
//    {id : 'ita', 
//    model : 'Doblo',
//    producer : 'Fiat',
//    tankVolume : 1.9,
//    horsePower : 135 , 
//    image : 'https://nahodim.com.ua/uploads/cars/new/fiat/16/kdvZNdbDw_-QUhD6pIQE3S5T/slider_fiat_doblo.jpg'
//    }, 
//    
//    {id : 'jpn', 
//    model : 'RX',
//    producer : 'Lexus',
//    tankVolume : 3.5,
//    horsePower : 313, 
//    image : 'https://cdn.riastatic.com/photosnew/auto/photo/Lexus_RX-350__321470629f.jpg'
//    }, 
//    
//    {id : 'kor', 
//    model : 'Sorento',
//    producer : 'KIA',
//    tankVolume : 2.2,
//    horsePower : 202, 
//    image : 'https://lh3.googleusercontent.com/proxy/SD7jPHQObihhT9xTY3k065W9HtxtCZP5WX2DG5pIVQXwfOoEnHt2F-P7mKGgLUAIV3HaDQIcWmz47RDGqAnQp556BGE'
//    }
//    
//    ]
//let arrayAmount = objectsArray(arr);
//console.log(arrayAmount);

//12.- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них


//function outer(callback) {
//    callback();
//}
//outer(function () {
//    console.log('do some');
//})




//- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//  Приклад
//  [1,2,3,4]
//  [2,3,4,5]
//  результат
//  [3,5,7,9]
//- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//- *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//Двожина масиву від 2 до 100
//Приклад
//[1,0,6,0,3] => [1,6,3,0,0]
//[0,1,2,3,4] => [1,2,3,4,0]
//[0,0,1,0]   => [1,0,0,0]
//
//Створити функцію яка :
//- Додає в боді блок з текстом "Hello owu"
//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//Для кожної властивості створити всередені блока автомоблія свій блок
//
//(на основі минулого ДЗ)
//**- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
//та повертає масив цих з'єднаних об'єктів.
//Приклад масивів:
//            let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//            let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
//Частковий приклад реультату:
//
//
//
//***- беремо завдання з правилами з укроку №3 :
//Та робимо це функцією.При цьому правила отримувати через аргумент.
//"Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
//			let rules = [
//				{
//					title: 'Первое правило Бойцовского клуба.',
//					body: 'Никому не рассказывать о Бойцовском клубе.'
//				},
//				{
//					title: 'Второе правило Бойцовского клуба.',
//					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//				},
//				{
//					title: 'Третье правило Бойцовского клуба.',
//					body: 'В схватке участвуют только двое.'
//				},
//				{
//					title: 'Четвертое правило Бойцовского клуба.',
//					body: 'Не более одного поединка за один раз.'
//				},
//				{
//					title: 'Пятое правило Бойцовского клуба.',
//					body: 'Бойцы сражаются без обуви и голые по пояс.'
//				},
//				{
//					title: 'Шестое правило Бойцовского клуба.',
//					body: 'Поединок продолжается столько, сколько потребуется.'
//				},
//				{
//					title: 'Седьмое правило Бойцовского клуба.',
//					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//				},
//				{
//					title: 'Восьмое и последнее правило Бойцовского клуба.',
//					body: 'Новичок обязан принять бой.'
//				},
//
//			];
//"
//
//===========додаткове від віктора========
//1) Точная степень двойки.
//Дано натуральное число N.
//Выведите слово YES, если число N является точной степенью двойки,
//или слово NO в противном случае.
//Операцией возведения в степень пользоваться нельзя!
//
//2) Deep Copy
//реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
//3) Flat
//Вирівняти багаторівневий масив в однорівневий
//[1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
//===========додаткове========
//
//