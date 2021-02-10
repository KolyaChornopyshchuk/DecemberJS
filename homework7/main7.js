//1.--створити масив з:
//- з 5 числових значень
//- з 5 стічкових значень
//- з 5 значень стрічкового, числового та булевого типу
//- та вивести його в консоль
//let arrNumbers = [1, 1, 2, 3, 5];
//let arrSrt = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];
//let arrMix = [1, 'Lorem', true, 2, false];
//console.log(arrNumbers, arrSrt, arrMix);


//2.-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//let arr = [];
//arr[0] = true;
//arr[4] = 5;
//arr[1] = 'Hello';
//arr[2] = false;
//arr[3] = 'World';
//console.log(arr);


//3.- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//for(i = 0; i < 9; i++) {
//document.write('<div>Lorem ipsum dolor sit amet.</div>');
//}

//4.- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//for(i = 0; i < 9; i++) {
//document.write(`<div>Lorem ipsum dolor sit amet. ${i} </div> `);
//}

//5.- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//let i = 0;
//while(i <= 19) {
//document.write('<h1>Lorem ipsum dolor sit amet.</h1> ');
//i++
//}

//6.- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//let i = 0;
//while(i <= 19) {
//    document.write(`<h1>Lorem ipsum dolor sit amet. ${i}  </h1>`)
//    i++
//}


//7.- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//let arrNumbers = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55];
//for(i of arrNumbers) {
//    console.log(i);
//}

//8.- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//let arrStr = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet','Lorem', 'ipsum', 'dolor', 'sit', 'amet'];
//for(i=0; i<arrStr.length; i++) {
//    console.log(arrStr[i]);
//}

//9.- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//let arrMix = ['Hello', 1, true, 'world', 2, false, [1, 2, 3], {name: 'Oleg', age: 25}, ['Lorem', 'ipsum', 'dolor'], 6];
//let i = 0;
//while(i <= arrMix.length) {
//console.log(arrMix[i]);
//i++
//}

//10. - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//let arrMix = ['Hello', 1, true, 'world', 2, false, [1, 2, 3], {name: 'Oleg', age: 25}, ['Lorem', 'ipsum', 'dolor'], 6];
//for ( let i = 0; i < arrMix.length; i++) {
//    if (typeof arrMix[i] === 'boolean') {
//        console.log(arrMix[i])
//    }
//    else {
//    }
//}
//
////11.- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//let arrMix = ['Hello', 1, true, 'world', 2, false, [1, 2, 3], {name: 'Oleg', age: 25}, ['Lorem', 'ipsum', 'dolor'], 6];
//for ( let i = 0; i < arrMix.length; i++) {
//    if (typeof arrMix[i] === 'number') {
//        console.log(arrMix[i])
//    }
//    else {
//    }
//}
////12.- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//let arrMix = ['Hello', 1, true, 'world', 2, false, [1, 2, 3], {name: 'Oleg', age: 25}, ['Lorem', 'ipsum', 'dolor'], 6];
//for ( let i = 0; i < arrMix.length; i++) {
//    if (typeof arrMix[i] === 'string') {
//        console.log(arrMix[i])
//    }
//    else {
//    }
//}

//13.- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//const arrEmpty = [];
//arrEmpty[0] = 5;
//arrEmpty[1] = 'hello';
//arrEmpty[2] = true;
//arrEmpty[3] = 10;
//arrEmpty[4] = 'world';
//arrEmpty[5] = false;
//arrEmpty[6] = 15;
//arrEmpty[7] = 'bye';
//arrEmpty[8] = true;
//arrEmpty[9] = undefined;
//for (let i=0; i < arrEmpty.length; i++) {
//    console.log(arrEmpty[i]);
//}

//14.- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//for(i = 0; i <= 9; i++) {
//console.log('step:', i);
//document.write( ` ${i} step :`);
//}

//15. - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//for(i = 0; i <= 99; i++) {
//console.log('step:', i);
//document.write( ` ${i} step :`);
//}

// 16.- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//for (let i = 0; i < 200; i = i + 2) {
//    console.log('step :', i);
//    document.write(`step : ${i} <br>`);
//}

//17.- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//for (let i = 0; i < 200; i++) {
//        if (i%2 === 0) {
//            console.log('step',i);
//            document.write(`step ${i} <br>`);
//        }
//    }
//

//18.- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write----опечатка

//19.- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//for (let i = 0; i < 200; i++) {
//           if (i%2 === 1) {
//               console.log('step',i);
//               document.write(`step ${i} <br>`);
//           }
//       }
//

//20.- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

//21. Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)


//
//
//
//______________________________________________________________________________________________________________________________________________________
//                                                                РОБОТА В АУДИТОРІЇ
//______________________________________________________________________________________________________________________________________________________
//
//
//22.- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
//let arr = ['a', 'b', 'c'];
//console.log(arr);
//for (i=1; i<=3; i++) {
//arr.push(i);
//}
//console.log(arr);


//23.- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
//let arr =  [1, 2, 3];
//let newArray = arr.reverse();
//console.log(newArray);

//24.- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
//let arr = [1, 2, 3];
//console.log(arr);
//arr.push(4, 5, 6);
//console.log(arr);

//25.- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
//let arr = [1, 2, 3];
//console.log(arr);
//arr.unshift(4, 5, 6);
//console.log(arr);

//26.- Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
//let arr = ['js', 'css', 'jq'];
//let first = arr.shift();
//console.log(first);
//document.write(first);

//27.- Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
//let arr = ['js', 'css', 'jq'];
//let first = arr.pop();
//console.log(first);
//document.write(first);

//27.- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
//let arr = [1, 2, 3, 4, 5];
//let part = arr1.slice(3, 5);
//console.log(part);

//28.- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
//let arr = [1, 2, 3, 4, 5];
//let part = arr.slice(0, 2);
//console.log(part);

//29. - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
//let arr = [1, 2, 3 , 4, 5];
//let part = arr.splice(1, 2);
//console.log(part);
//console.log(arr);

//30.- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//let arr = [1, 2, 3, 4, 5];
//arr.splice(3, 0, 'a', 'b', 'c' );
//console.log(arr);


//31.- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//let arr= [1, 2, 3, 4, 5];
//arr.splice(1, 0, 'a', 'b',);
//console.log(arr);
//arr.splice(6, 0,'c' );
//console.log(arr);
//arr.splice(8, 0, 'e');
//console.log(arr);



//32.- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for (i of arr) {
//   if (arr[i] % 2 == 0) {
//       console.log(arr[i]);
//   }
//}

//33.- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
//const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
//const newArray = [];
//for (i of arr) {
//    newArray.push(i);
//}
//console.log(arr);
//console.log(newArray);


//34.- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
//let newArray = [];
//for (i in arr) {
//   newArray[i] = (arr[i]);
//}
//console.log(newArray);
//console.log(arr);

//============
//
//35.зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//!!!!!!!!!!!//let arr = [2,17,13,6,22,31,45,66,100,-18];--- масив із яким працював всі наступні завдання!

//1. перебрати його циклом while
//let i = 0;
//while (i<arr.length) {
//    console.log(arr[i]);
//    i++
//}

//2. перебрати його циклом for
//for (i =0; i < arr.length; i++) {
//    console.log(arr[i]);
//}

//3. перебрати циклом while та вивести  числа тільки з непарним індексом
//let i = 0;
//while (i < arr.length) {
//if (i % 2 === 1 ) {
//    console.log(arr[i]);
//}
//    i++
//}

//4. перебрати циклом for та вивести  числа тільки з непарним індексом
//for (i = 0; i < arr.length; i++) {
//    if ( i % 2 === 1) {
//        console.log(arr[i]);
//    }
//}

//5. перебрати циклом while та вивести  числа тільки парні  значення
//let i = 0;
//while (i < arr.length) {
//if (i % 2 === 0) {
//    console.log(arr[i]);
//}
//    i++
//}

//6. перебрати циклом for та вивести  числа тільки парні  значення
//for (i = 0; i < arr.length; i++) {
//    if ( i % 2 === 0) {
//        console.log(arr[i]);
//    }
//}

//7. замінити кожне число кратне 3 на слово "okten"
//for (i = 0;  i < arr.length; i++) {
//    if (arr[i] % 3 === 0) {
//        arr.splice(i, 1, 'okten')
//    }
//}
//console.log(arr[i]);


//8. вивести масив в зворотньому порядку.
//for (i = arr.length-1; i >= 0; i--)   
//{  
//    console.log(arr[i]);
//}

//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//1.//let i = arr.length-1;
//while (i >= 0) {
//    console.log(arr[i]);
//    i--
//}

//2.//for (i = arr.length-1; i >= 0; i--)   
//{  
//    console.log(arr[i]);
//}

//3.//let i = arr.length-1;
//while (i >= 0) {
//if (i % 2 === 1 ) {
//    console.log(arr[i]);
//}
//    i--
//}

//4.//for (i = arr.length-1; i >= 0; i--) {
//    if ( i % 2 === 1) {
//        console.log(arr[i]);
//    }
//}

//5.//let i = arr.length-1;
//while (i >= 0) {
//if (i % 2 === 0) {
//    console.log(arr[i]);
//}
//    i--
//}

//6.//for (i = arr.length-1; i >= 0; i--) {
//       if ( i % 2 === 0) {
//           console.log(arr[i]);
//       }
//   }
//
//

//7.//for (i = 0;  i < arr.length; i++) {
//    if (arr[i] % 3 === 0) {
//        arr.splice(i, 1, 'okten')
//    }
//}
//for (i = arr.length-1; i >= 0; i--) {
//    console.log(arr[i]);
//}






//10.
// створити пустий масив та :
//- заповнити його 50 парними числами за допомоги циклу.
//- заповнити його 50 непарними числами за допомоги циклу.
//1.
//let arr = [];
//for (i = 0; i < 100; i++) {
//    if( i % 2 === 0) {
//        arr.push(i);
//    }
//}
//console.log(arr);
//2.
//let arr = [];
//for (i = 0; i < 100; i++) {
//    if( i % 2 === 1) {
//        arr.push(i);
//    }
//}
//console.log(arr);

//
//
//1. Створити пустий масив та :
//       a. заповнити його 50 парними числами за допомоги циклу. хз, але це вроді те ж саме?
//1.
//let arr = [];
//for (i = 0; i < 100; i++) {
//    if( i % 2 === 0) {
//        arr.push(i);
//    }
//}
//console.log(arr);
//       b. заповнити його 50 непарними числами за допомоги циклу. хз, але це вроді те ж саме?
//2.
//let arr = [];
//for (i = 0; i < 100; i++) {
//    if( i % 2 === 1) {
//        arr.push(i);
//    }
//}
//console.log(arr);
//       c. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
//let arr = [];
//for (i = 0; i < 10; i++) {
//   arr[i] = Math.floor((Math.random()*732-8)+8);
//}
//console.log(arr);

// 2. Вивести за допомогою console.log кожен третій елемен
//let arr = [];
//for (i = 0; i < 10; i++) {
//   arr[i] = Math.floor((Math.random()*732-8)+8);
//  
//}
//console.log(arr);
//for (i = 2; i < arr.length; i = i+= 3){
//    console.log(arr[i]);
//}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//let arr = [];
//for (i = 0; i < 10; i++) {
//   arr[i] = Math.floor((Math.random()*732-8)+8);
//  
//}
//console.log(arr);
//for (i = 2; i < arr.length; i = i+= 3){
//    if (arr[i] % 2 === 0) {
//        console.log(arr[i]);
//    }
//}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//let arr = [];
//let newArray = [];
//for (i = 0; i < 10; i++) {
//   arr[i] = Math.floor((Math.random()*732-8)+8);
//  
//}
//console.log(arr);
//for (i = 2; i < arr.length; i = i+= 3){
//    if (arr[i] % 2 === 0) {
//        console.log(arr[i]);
//        newArray.push(arr[i])
//    }
//}
//console.log(arr);
//console.log(newArray);

// 5. Вивести кожен елемент масиву, сусід зпарва якого є парним
//  EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//let arr = [];
//for (i = 0; i < 10; i++) {
//   arr[i] = Math.floor((Math.random()*732-8)+8);
//  
//}
//console.log(arr);
//for (i = 0; i < arr.length; i++){
//    if (arr[i+1] % 2 === 0) {
//        console.log(arr[i]);
//        
//    }
//}


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек. -----кароче переробив, вроді добре.
//let arr = [100,250,50,168,120,345,188];
//let sum = 0;
//for( i = 0; i < arr.length; i++){
//         sum += arr[i];      
//}
//    console.log(sum);
//    let result = sum / arr.length;
//    console.log(result);

//let result = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6];
//console.log(result);
//let finalResult = result / arr.length;
//console.log(finalResult);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//let arr = [];
//let newArray = [];
//for (i = 0; i < 10; i++) {
//   arr[i] = Math.floor((Math.random()*732-8)+8);
//  
//}
//
//for (i = 0; i < arr.length; i++){
//        let a = arr[i] * 5;
//        newArray.push(a)
//    
//}
//console.log(arr);
//console.log(newArray);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

//let arr = [1, 'hello', true, 2, 'world', false, 3, 'okten', true];
//let newArray = [];
//for (i = 0; i < arr.length; i++) {
//    if (typeof arr[i] === 'number') {
//        newArray.push(arr[i]);
//    }
//}
//console.log(arr);
//console.log(newArray);
//___________________________________________________________________________________________________________________________________________________
//                                                                    Додатково
//______________________________________________________________________________________________________________________________________________________
//
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//let arr = [ 'a', 'b', 'c'];
//let word = '';
//for (i =0; i < arr.length; i++) {
//    word += arr[i];
//    
//}
//console.log(word);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//let arr = [ 'a', 'b', 'c']; 
//let word = '';
//let i = 0;
//while (i < arr.length) {
//    word += arr[i];
//    i++
//}
//console.log(word);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//let arr = [ 'a', 'b', 'c']; 
//let word = '';
//for (i of arr) {
//    word += i;
//}
//console.log(word);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово. 
//let arr = [ 'a', 'b', 'c']; 
//let word = '';
//for (i in arr) {
//    word += arr[i];
//}
//console.log(word);