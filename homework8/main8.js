//1.- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
 //(Т.е поле name  должно присутствовать только 1 раз в одном объекте )
//const user = {
//    name : 'Kolya',
//    age : 25,
//    job : 'TechSupport'
//} ;
//
//const work= {
//    location : 'Brighton',
//    salary : 2500,
//    value : false
//} ;
//
//const laptop = {
//    memory : 8,
//    model : 'gaming_15',
//    producer : 'HP'
//} ;
//
//const car = {
//   horsePower : 320,
//    tankVolume : 75,
//    weight : 2000
//} ;
//
//const cat = {
//    color : 'Black',
//    kind : 'domestic',
//    activity : true
//} 

//2.- создать 5 объектов с полностью разным набором полей. 
//В каждом объекте должен присутсвовать массив и внутренний объект. 
//Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

//const book = {
//writer : {name : 'Jack', lastName : 'London'},
//pages : 594,
//chapters : ['Begining', 'Middle', 'End']
//}
//const bottle = {
//ingredients : ['malt', 'hops', 'water'],
//country : 'Ireland',
//maker : {company : 'Carlsberg', type : 'public'}
//}
//const game = {
//hours : '200h+',
//gameplay : ['FPS', 'RPG', 'Sandbox' ],
//mainCharacter : {skill : 'power', intelligence: false, items : ['knife', 'axe'] }
//}
//const gun = {
//ammo : 5.56,
//buyers : ['England', 'USA', 'Germany'],
//data : {shotSpeed : 2000, penetration : 1.5, capacity : 30}
//}
//const phone = {
//color : 'PacificBlue',
//memory : 128,
//programs : ['Whatsup', 'Instagram', 'Safari'],
//info : {screen : 'LED', baterry : '20h+'}
//}

//3.- При помощи for in вывести все ключи всех объектов из задания 1 и 2

//for ( i in user) {
//    console.log(i);
//}
//
//for ( i in work) {
//    console.log(i);
//}
//
//for ( i in laptop) {
//    console.log(i);
//}
//
//for ( i in car) {
//    console.log(i);
//}
//
//for ( i in cat) {
//    console.log(i);
//}
//
//for ( i in book) {
//    console.log(i);
//}
//
//for ( i in bottle) {
//    console.log(i);
//}
//
//for ( i in game) {
//    console.log(i);
//}
//
//for ( i in gun) {
//    console.log(i);
//}
//
//for ( i in phone) {
//    console.log(i);
//}

//4.- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
//console.log(Object.keys(user), Object.keys(work), Object.keys(laptop), Object.keys(car), Object.keys(cat),
//Object.keys(book), Object.keys(bottle), Object.keys(game), Object.keys(gun), Object.keys(phone));

//5.- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. 
//(Значаения полей могу быть выдуманными)
//const arrCars = [
//daewoo = {
//    model : 'Lanos',
//    year : 2005,
//    power : 70,
//    color : 'Silver'
//},
//zaz = {
//    model : 965,
//    year : 1980,
//    power : 23,
//    color : 'Orange'
//},
//bmw = {
//    model : 'X5',
//    year : 2018,
//    power : 286,
//    color : 'Black'
//},
//ford = {
//    model : 'Explorer',
//    year : 2020,
//    power : 350,
//    color : 'Blue'
//},
//acura = {
//    model : 'MDX',
//    year : 2017,
//    power : 325,
//    color : 'White'
//},
//dodge = {
//    model : 'Durando',
//    year : 2014,
//    power : 360,
//    color : 'DarkBlue'
//},
//volkswagen = {
//    model : 'Transporter',
//    year : 2014,
//    power : 68,
//    color : 'Green'
//},
//nissan = {
//    model : 'Rogue',
//    year : 2016,
//    power : 141,
//    color : 'Grey'
//},
//mercedes = {
//    model : 'Vito',
//    year : 2019,
//    power : 190,
//    color : 'White'
//},
//toyota = {
//    model : 'Prius',
//    year : 2010,
//    power : 98,
//    color : 'Police'
//},
// ]
//

//6.- Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. 
////(Значаения полей могу быть выдуманными)
//let arrCity = [
//    newYork = {
//        name : 'NewYork',
//        population : '8m',
//        country : 'USA',
//        region : 'East Coast, New York'
//    },
//    chicago = {
//        name : 'Chicago',
//        population : '2m',
//        country : 'USA',
//        region : 'Middle, Illinois'
//    },
//    mexico = {
//        name : 'Mexico',
//        population : '16m',
//        country : 'Mexico',
//        region : 'Middle, mexican peninsula'
//    },
//    tokyo = {
//        name : 'Tokyo',
//        population : '9m',
//        country : 'Japan',
//        region : 'Kanto, Honshu'
//    },
//    london = {
//        name : 'London',
//        population : '9m',
//        country : 'Great Britain',
//        region : 'England, Temza'
//    },
//]

//7.- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
 //Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
//const arr = [
//daewoo = {
//    model : 'Lanos',
//    year : 2005,
//    power : 70,
//    color : 'Silver',
//    driver : {
//        name : 'Kolya',
//        age : 45,
//        sex : 'male',
//        expirience : 20
//    }
//},
//zaz = {
//    model : 965,
//    year : 1980,
//    power : 23,
//    color : 'Orange',
//    driver : {
//        name : 'Sergii ',
//        age : 25,
//        sex : 'male',
//        expirience : 5
//    }
//},
//bmw = {
//    model : 'X5',
//    year : 2018,
//    power : 286,
//    color : 'Black',
//    driver : {
//        name : 'Roman',
//        age : 30,
//        sex : 'male',
//        expirience : 15
//    }
//},
//ford = {
//    model : 'Explorer',
//    year : 2020,
//    power : 350,
//    color : 'Blue',
//    driver : {
//        name : 'Nataliia',
//        age : 24,
//        sex : 'female',
//        expirience : 2
//    }
//},
//acura = {
//    model : 'MDX',
//    year : 2017,
//    power : 325,
//    color : 'White',
//    driver : {
//        name : 'Sanya',
//        age : 26,
//        sex : 'male',
//        expirience : 10
//    }
//},
//dodge = {
//    model : 'Durando',
//    year : 2014,
//    power : 360,
//    color : 'DarkBlue',
//    driver : {
//        name : 'Vova',
//        age : 29,
//        sex : 'male',
//        expirience : 9
//    }
//},
//volkswagen = {
//    model : 'Transporter',
//    year : 2014,
//    power : 68,
//    color : 'Green',
//    driver : {
//        name : 'Anya',
//        age : 27,
//        sex : 'female',
//        expirience : 5
//    }
//},
//nissan = {
//    model : 'Rogue',
//    year : 2016,
//    power : 141,
//    color : 'Grey',
//    driver : {
//        name : 'Andrii',
//        age : 28,
//        sex : 'male',
//        expirience : 8
//    }
//},
//mercedes = {
//    model : 'Vito',
//    year : 2019,
//    power : 190,
//    color : 'White',
//    driver : {
//        name : 'Masha',
//        age : 18,
//        sex : 'female',
//        expirience : 1
//    }
//},
//toyota = {
//    model : 'Prius',
//    year : 2010,
//    power : 98,
//    color : 'Police',
//    driver : {
//        name : 'Vlad',
//        age : 27,
//        sex : 'male',
//        expirience : 9
//    }
//},
// ]
           
//8.- проитерировать каждый массив из задания 5,6,7 при помощи while.
//let car = 0;
//while (car < arrCars.length) {
//    console.log(arrCars[car]);
//    car++
//};
//let city = 0;
//while (city < arrCity.length) {
//    console.log(arrCity[city]);
//    city++
//};
//let i = 0;
//while (i < arr.length) {
//    console.log(arr[i]);
//    i++
//};

//9.- проитерировать каждый массив из задания 5,6,7 при помощи for .
//for (car = 0; car < arrCars.length; car++) {
//    console.log(arrCars[car]);
//};
//for (city = 0; city < arrCity; city++) {
//    console.log(arrCity[city]);
//};
//for (i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//};

//10.- проитерировать каждый массив из задания 5,6,7 при помощи  for of.
//for (car of arrCars) {
//    console.log(car);
//}
//for (city of arrCity) {
//    console.log(city);
//}
//for (i of arr) {
//    console.log(i);
//}

//11.- взять объекты из задания 1 и превратить каждый в json.
//const user = {
//    name : 'Kolya',
//    age : 25,
//    job : 'TechSupport'
//} ;
//
//const work= {
//    location : 'Brighton',
//    salary : 2500,
//    value : false
//} ;
//
//const laptop = {
//    memory : 8,
//    model : 'gaming_15',
//    producer : 'HP'
//} ;
//
//const car = {
//   horsePower : 320,
//    tankVolume : 75,
//    weight : 2000
//} ;
//
//const cat = {
//    color : 'Black',
//    kind : 'domestic',
//    activity : true
//} ;
//let newUser = JSON.stringify(user);
//let newWork = JSON.stringify(work);
//let newLaptop = JSON.stringify(laptop);
//let newCar = JSON.stringify(car);
//let newCat = JSON.stringify(cat);
//console.log(newUser, newWork, newLaptop, newCar, newCat);

//12.- взять json из задания 11 и превратить их обратно в объекты.
//let oldUser = JSON.parse(newUser);
//let oldWork = JSON.parse(newWork);
//let oldLaptop = JSON.parse(newLaptop);
//let oldCar = JSON.parse(newCar);
//let oldCat = JSON.parse(newCat);
//console.log(oldUser, oldWork, oldLaptop, oldCar, oldCat);

//13.- взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
//const arrCars = [
//daewoo = {
//    model : 'Lanos',
//    year : 2005,
//    power : 70,
//    color : 'Silver'
//},
//zaz = {
//    model : 965,
//    year : 1980,
//    power : 23,
//    color : 'Orange'
//},
//bmw = {
//    model : 'X5',
//    year : 2018,
//    power : 286,
//    color : 'Black'
//},
//ford = {
//    model : 'Explorer',
//    year : 2020,
//    power : 350,
//    color : 'Blue'
//},
//acura = {
//    model : 'MDX',
//    year : 2017,
//    power : 325,
//    color : 'White'
//},
//dodge = {
//    model : 'Durando',
//    year : 2014,
//    power : 360,
//    color : 'DarkBlue'
//},
//volkswagen = {
//    model : 'Transporter',
//    year : 2014,
//    power : 68,
//    color : 'Green'
//},
//nissan = {
//    model : 'Rogue',
//    year : 2016,
//    power : 141,
//    color : 'Grey'
//},
//mercedes = {
//    model : 'Vito',
//    year : 2019,
//    power : 190,
//    color : 'White'
//},
//toyota = {
//    model : 'Prius',
//    year : 2010,
//    power : 98,
//    color : 'Police'
//},
// ]
//for (car of arrCars) {
//console.log(JSON.stringify(car));
//};

//14.- взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
//let arrCity = [
//    newYork = {
//        name : 'NewYork',
//        population : '8m',
//        country : 'USA',
//        region : 'East Coast, New York'
//    },
//    chicago = {
//        name : 'Chicago',
//        population : '2m',
//        country : 'USA',
//        region : 'Middle, Illinois'
//    },
//    mexico = {
//        name : 'Mexico',
//        population : '16m',
//        country : 'Mexico',
//        region : 'Middle, mexican peninsula'
//    },
//    tokyo = {
//        name : 'Tokyo',
//        population : '9m',
//        country : 'Japan',
//        region : 'Kanto, Honshu'
//    },
//    london = {
//        name : 'London',
//        population : '9m',
//        country : 'Great Britain',
//        region : 'England, Temza'
//    },
//]
//for (city of arrCity) {
//    console.log(JSON.stringify(city));
//}

//15.- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
//const arr = [
//daewoo = {
//    model : 'Lanos',
//    year : 2005,
//    power : 70,
//    color : 'Silver',
//    driver : {
//        name : 'Kolya',
//        age : 45,
//        sex : 'male',
//        expirience : 20
//    }
//},
//zaz = {
//    model : 965,
//    year : 1980,
//    power : 23,
//    color : 'Orange',
//    driver : {
//        name : 'Sergii ',
//        age : 25,
//        sex : 'male',
//        expirience : 5
//    }
//},
//bmw = {
//    model : 'X5',
//    year : 2018,
//    power : 286,
//    color : 'Black',
//    driver : {
//        name : 'Roman',
//        age : 30,
//        sex : 'male',
//        expirience : 15
//    }
//},
//ford = {
//    model : 'Explorer',
//    year : 2020,
//    power : 350,
//    color : 'Blue',
//    driver : {
//        name : 'Nataliia',
//        age : 24,
//        sex : 'female',
//        expirience : 2
//    }
//},
//acura = {
//    model : 'MDX',
//    year : 2017,
//    power : 325,
//    color : 'White',
//    driver : {
//        name : 'Sanya',
//        age : 26,
//        sex : 'male',
//        expirience : 10
//    }
//},
//dodge = {
//    model : 'Durando',
//    year : 2014,
//    power : 360,
//    color : 'DarkBlue',
//    driver : {
//        name : 'Vova',
//        age : 29,
//        sex : 'male',
//        expirience : 9
//    }
//},
//volkswagen = {
//    model : 'Transporter',
//    year : 2014,
//    power : 68,
//    color : 'Green',
//    driver : {
//        name : 'Anya',
//        age : 27,
//        sex : 'female',
//        expirience : 5
//    }
//},
//nissan = {
//    model : 'Rogue',
//    year : 2016,
//    power : 141,
//    color : 'Grey',
//    driver : {
//        name : 'Andrii',
//        age : 28,
//        sex : 'male',
//        expirience : 8
//    }
//},
//mercedes = {
//    model : 'Vito',
//    year : 2019,
//    power : 190,
//    color : 'White',
//    driver : {
//        name : 'Masha',
//        age : 18,
//        sex : 'female',
//        expirience : 1
//    }
//},
//toyota = {
//    model : 'Prius',
//    year : 2010,
//    power : 98,
//    color : 'Police',
//    driver : {
//        name : 'Vlad',
//        age : 27,
//        sex : 'male',
//        expirience : 9
//    }
//},
// ];
// let newArr = [];
// for (i of arr) {
//  newArr.push(JSON.stringify(i));
// }
//console.log(newArr);

//16.- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. 
//Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
//const users = [
//    {name : 'Serhii', age : 23, skills : ['Scram', 'Agile', 'Waterfall']},
//    {name : 'Pavlo', age : 36, skills : ['TechCoach', 'TechSupport', 'Mentor', 'ExtraShift']},
//    {name : 'Nataliia', age : 24, skills : ['HTML', 'CSS', 'DevTools']},
//    {name : 'Ulyana', age : 25, skills : ['TeamLeader', 'TechSupport', 'Translator']},
//    {name : 'Kolya', age : 25, skills : ['JavaScript', 'TechSUpport'] }
//];
//for (i of users) {
//    console.log(i.name, i);
//    for (a of i.skills) {
//        console.log(a);
//    } 
//};

//17.- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. 
//Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
//const users = [
//    {name : 'Serhii', age : 23, skills : ['Scram', 'Agile', 'Waterfall']},
//    {name : 'Pavlo', age : 36, skills : ['TechCoach', 'TechSupport', 'Mentor', 'ExtraShift']},
//    {name : 'Nataliia', age : 24, skills : ['HTML', 'CSS', 'DevTools']},
//    {name : 'Ulyana', age : 25, skills : ['TeamLeader', 'TechSupport', 'Translator']},
//    {name : 'Kolya', age : 25, skills : ['JavaScript', 'TechSUpport'] }
//];
//let newArray = [];
//
//for (i of users) {
//    for (a of i.skills) {
//        newArray.push(a);
//    } 
//};
//console.log(newArray);

//18.- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//{name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
//{name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']},
//{name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
//{name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}];
//
//for (user of users) {
//    console.log(user);
//    for (skill of user.skills) {
//        console.log(skill);
//    }
//};

//19. - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//let users = [{
//	name: 'vasya',
//	age: 31,
//	status: false,
//	address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//}, {
//	name: 'petya',
//	age: 30,
//	status: true,
//	address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//}, {
//	name: 'kolya',
//	age: 29,
//	status: true,
//	address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//}, {
//	name: 'olya',
//	age: 28,
//	status: false,
//	address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//}, {
//	name: 'max',
//	age: 30,
//	status: true,
//	address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//}, {
//	name: 'anya',
//	age: 31,
//	status: false,
//	address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//}, {
//	name: 'oleg',
//	age: 28,
//	status: false,
//	address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//}, {
//	name: 'andrey',
//	age: 29,
//	status: true,
//	address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//}, {
//	name: 'masha',
//	age: 30,
//	status: true,
//	address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//}, {
//	name: 'olya',
//	age: 31,
//	status: false,
//	address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//}, {
//	name: 'max',
//	age: 31,
//	status: true,
//	address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//}];

//let arr = [];
//
//for (user of users) {
//    arr.push(user.name, user.address); 
//};
//console.log(arr);

//20.- За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement. Всі данні в одному блоці.
//for (const user of users) {
//    let container = document.createElement('div');
//    let h = document.createElement('h1');
//    document.body.appendChild(container);
//    h.innerText = `${user.name} ${user.age} ${user.status}`;
//    let h2 = document.createElement('h2');
//	let address = '';
//	for (const address1 in user.address) {
//		address = address + " " + user.address[address1];
//	}
//    h2.innerText = `${address}`;
//    container.appendChild(h);
//    container.appendChild(h2);
//    };

//21.- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, 
//розділивши всі властивості по своїм блокам (div>div*4)
//for (const user of users) {
//    let container = document.createElement('div');
//	document.body.appendChild(container);
//    let h = document.createElement('h3');
//	let p1 = document.createElement('p');
//	let p2 = document.createElement('p');
//	let p3 = document.createElement('p');

//	h.innerText = user.name;
//	p1.innerText = user.age;
//  p2.innerText = user.status;
//	let address = '';
//	for (const address1 in user.address) {
//		address = address + " " + user.address[address1];
//	}
//	p3.innerText = address;
//	container.appendChild(h);
//	container.appendChild(p1);
//	container.appendChild(p2);
//	container.appendChild(p3);
//    };

//22.- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//for (const user of users) {
//    let container = document.createElement('div');
//	document.body.appendChild(container);
//    let name = document.createElement('h3');
//	let age = document.createElement('p');
//	let status = document.createElement('p');
//	let address = document.createElement('div');
//	name.innerText = user.name;
//	age.innerText = user.age;
//	status.innerText = user.status;
//	for (const item in user.address) {
//		const block = document.createElement('div');
//		block.innerHTML = user.address[item];	
//		address.appendChild(block)	
//	};
//	container.appendChild(name);
//	container.appendChild(age);
//	container.appendChild(status);
//	container.appendChild(address);
//    };

//23.- Дано 2 масиви з рівною кількістю об'єктів.
//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//Записати цей об'єкт в новий масив
//Частковий приклад реультату:
//let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
//Масиви:
//let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, 
//{id: 2, name: 'petya', age: 30, status: true}, 
//{id: 3, name: 'kolya', age: 29, status: true}, 
//{id: 4, name: 'olya', age: 28, status: false},];
//
//let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
//{user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
//{user_id: 2, country: 'Poland', city: 'Krakow'}, 
//{user_id: 4, country: 'USA', city: 'Miami'},];
//
//let usersWithCities = [];
//for (user of usersWithId) {
//	usersWithCities.push(user);
//	for (city of citiesWithId) {
//		if (city.user_id === user.id) {
//			user.address = city;
//		}
//	}
//};
//console.log(usersWithCities);

//24.- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
//let idItem = document.getElementById('content');
//console.log(idItem.innerText);
//let wrapItem = document.getElementById('wrap');
//console.log(wrapItem.innerText);
//let classItems = document.getElementsByClassName('rules');
//for (let item of classItems) {
//	console.log(item.innerText);
//};
//let tagItems = document.getElementsByTagName('h2');
//for (item of tagItems) {
//	console.log(item.innerText);
//};

//25.- змінити цей текст використовуючи селектори id, class,  tag

//const idItem = document.getElementById('content');
//idItem.innerText = 'lol';
//console.log(idItem);
//const classItems = document.getElementsByClassName('rule1');
//for (item of classItems) {
//	item.innerText = 'lololol';
//	console.log(item);
//};
//const tagItems = document.getElementsByTagName('h2');
//for (tag of tagItems) {
//	tag.innerText = 'hello';
//	console.log(tag);
//}

//26.- змінити висоту та ширину блоку використовуючи селектори id, class,  tag
//let idItem = document.getElementById('wrap');
//idItem.style.width = '200px';
//idItem.style.height = '300px';
//
//
//const classItems = document.getElementsByClassName('rule1');
//for (item of classItems) {
//	item.style.width = '500px';
//	item.style.height = '100px';
//	
//};
//const tagItems = document.getElementsByTagName('h2');
//for (tag of tagItems) {
//	tag.style.width = '100px';
//	tag.style.height = '100px';
//	
//}

//27.- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
//const table =  document.createElement('table');
//const tr = document.createElement('tr');
//const td = document.createElement('td');
//const td1 = document.createElement('td');
//const td2 = document.createElement('td');
//tr.style.border = ('1px solid black');
//tr.style.height = ('50px')
//td.style.border = ('1px solid black');
//td1.style.border = ('1px solid black');
//td2.style.border = ('1px solid black');
//td.style.width = ('300px')
//td1.style.width = ('300px')
//td2.style.width = ('300px')
//td.innerText = ('hello okten');
//td1.innerText = ('hello world');
//td2.innerText  = ('how are you?')
//tr.appendChild(td);
//tr.appendChild(td1);
//tr.appendChild(td2);
//table.appendChild(tr);
//document.body.appendChild(table);

//28.- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
//const table = document.createElement('table');
//for (let i = 0; i < 10; i++) {
//	const tr = document.createElement('tr');
//	const td = document.createElement('td');
//	const td1 = document.createElement('td');
//	const td2 = document.createElement('td');
//	tr.appendChild(td);
//	tr.appendChild(td1);
//	tr.appendChild(td2);
//	table.appendChild(tr);
//}
//document.body.appendChild(table);

//29.- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
//const table = document.createElement('table');
//for (let i = 0; i < 10; i++) {
//	const tr = document.createElement('tr');
//	for (let i = 0; i < 5; i++ ) {
//		const td = document.createElement('td');
//		tr.appendChild(td);	
//	}
//	table.appendChild(tr);
//}
//document.body.appendChild(table);

//30.- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
//let n = prompt('Type number of rows' , 5);
//let m = prompt('Type number of columns' , 3);
//const table = document.createElement('table');
//for (let i = 0; i < n; i++) {
//	const tr = document.createElement('tr');
//	for (let i = 0; i < m; i++ ) {
//		const td = document.createElement('td');
//		tr.appendChild(td);	
//	}
//	table.appendChild(tr);
//}
//document.body.appendChild(table);

//31.--Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
// - знайти всі div та змінити ім колір на червоний

//const elementsByTagName = document.getElementsByTagName('*');
//for (let tag of elementsByTagName) {
//	if (tag.getAttribute('class') ) {
//		console.log(tag);
//	}
//};
//
//const elementsWithP = document.getElementsByTagName('p');
//for (let tag of elementsWithP) {
//	tag.innerText = 'hello okten';
//};
//
//const elementsWithDiv = document.getElementsByTagName('div');
//for (let tag of elementsWithDiv) {
//	tag.style.background = 'tomato';
//};

//============
//====class===
//============


//32.- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//const ul = document.createElement('ul');
//let arr = document.getElementsByTagName('h2');
//console.log(arr);
//for (tag of arr) {
//	const li = document.createElement('li');
//	li.innerText = tag.innerText;
//	ul.appendChild(li);
//	
//};
//content.appendChild(ul);

//33. -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//rules = [
//{
//	title: 'Первое правило Бойцовского клуба.',
//	body: 'Никому не рассказывать о Бойцовском клубе.'
//},
//{
//	title: 'Второе правило Бойцовского клуба.',
//	body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//},
//{
//	title: 'Третье правило Бойцовского клуба.',
//	body: 'В схватке участвуют только двое.'
//},
//{
//	title: 'Четвертое правило Бойцовского клуба.',
//	body: 'Не более одного поединка за один раз.'
//},
//{
//	title: 'Пятое правило Бойцовского клуба.',
//	body: 'Бойцы сражаются без обуви и голые по пояс.'
//},
//{
//	title: 'Шестое правило Бойцовского клуба.',
//		body: 'Поединок продолжается столько, сколько потребуется.'
//},
//{
//	title: 'Седьмое правило Бойцовского клуба.',
//	body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//},
//{
//	title: 'Восьмое и последнее правило Бойцовского клуба.',
//	body: 'Новичок обязан принять бой.'
//},

//];
//const wrap = document.createElement('div');
//wrap.id = 'wrap';
//for (let i = 0 ; i < rules.length; i++ ) {
//	rule = rules[i];
//	const div = document.createElement('div');
//	const h2 = document.createElement('h2');
//	h2.innerText = rule.title;
//	const p = document.createElement('p');
//	p.innerText = rule.body;
//	div.className = `rules rule${i+1}`;
//	div.appendChild(h2);
//	div.appendChild(p);
//	wrap.appendChild(div);
//}
//document.body.appendChild(wrap);

// 34.*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. - хз як це робити
//За допомогою document.createElement вивести їх в браузер. 
//Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
//let users = [];
//let promise =  fetch ('https://jsonplaceholder.typicode.com/users');
//promise.then(value => {
//	console.log(value);
//	return value.json();
//}) .then(value => {
//	console.log(value);
//});
//*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. 
//За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
////*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. 
//За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
////****** при помощи fetch (как в примере) получить от jsonplaceholder все posts.
// Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. 
// Объеденить соответсвующий post с соответсвующими comment и вывести в браузер.
//  Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
