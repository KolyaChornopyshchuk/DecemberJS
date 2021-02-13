let arr = [

{id : 'ua', 
model : 965,
producer : 'ZAZ',
tankVolume : 0.75,
horsePower : 23, 
image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Saporoshez_ZAZ_965_A.JPG/250px-Saporoshez_ZAZ_965_A.JPG'
}, 

{id : 'ua', 
model : 'Lanos',
producer : 'Daewoo',
tankVolume : 1.3,
horsePower : 70, 
image : 'https://lh3.googleusercontent.com/proxy/w3mR9hyFFnHNRZCdqdGG4JDfHxWJCM-aGqph_XhjFjhzon86QQ2f-Z_uj3NS7UtHDyDj4AsZ5OPs-hRvTDe9TQsWaD5DQIXIWw'
}, 

{id : 'd', 
model : 'X5',
producer : 'BMW',
tankVolume : 4.3,
horsePower : 286, 
image : 'https://garage-news.com/wp-content/uploads/2020/07/BMW-iX3-official-pics-2020-21-256x256.jpg'
}, 

{id : 'usa', 
model : 'Explorer',
producer : 'Ford',
tankVolume : 4.0,
horsePower : 165, 
image : 'https://lh3.googleusercontent.com/proxy/TnG8bKwIDU-qeyFhVhN_-iAtNKbf1ckc-Xf_89sLWhzRv_OZdYT-TzetAO6g-dJejD0bLl_A90Io4YWlAdkHRbt6SKTcr_3WPfyet5OcXqFL1XSwKFIX7ZdXkK6342mldIoqbVQgC7cSJpSn'
}, 

{id : 'jpn', 
model : 'MDX',
producer : 'Acura',
tankVolume : 3.0,
horsePower : 325, 
image : 'https://avto-russia.ru/autos/acura/photo/acura_mdx_1.jpg'
}, 

{id : 'usa', 
model : 'Durando',
producer : 'Dodge',
tankVolume : 6.2,
horsePower : 720, 
image : 'https://pictures.dealer.com/m/midwaydodgeiicllc/0749/8cb35d2dc19f9b555eff75c3c8e17f57x.jpg?impolicy=downsize&w=568'
}, 

{id : 'd', 
model : 'Transporter',
producer : 'Volkswagen',
tankVolume : 1.8,
horsePower : 68, 
image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/VW_T4_front_20080215.jpg/305px-VW_T4_front_20080215.jpg'
}, 

{id : 'jpn', 
model : 'Rogue',
producer : 'Nissan',
tankVolume : 2.0,
horsePower : 141, 
image : 'https://cdn.riastatic.com/photosnew/auto/photo/Nissan_Rogue__211800699f.jpg'
}, 

{id : 'd', 
model : 'Vito',
producer : 'Mercedes-Benz',
tankVolume : 2.1,
horsePower : 190, 
image : 'http://i.otzovik.com/objects/b/50000/44225.png'
}, 

{id : 'jpn', 
model : 'Prius',
producer : 'Toyota',
tankVolume : 1.8,
horsePower : 98, 
image : 'https://cdn.riastatic.com/photosnewr/ria/news_common/policejskie-toyota-prius-priznany-samymi-ekonomichnymi-mashinami-s-dv__228187-940x0.jpg'
}, 

{id : 'usa', 
model : 'Model X',
producer : 'Tesla',
tankVolume : 90,
horsePower : 262, 
image : 'https://cdn.segodnya.ua/img/article/11132/38_main_new.1518358697.jpg'
}, 

{id : 'swe', 
model : 'XC90',
producer : 'Volvo',
tankVolume : 1.9,
horsePower : 320, 
image : 'https://a.d-cd.net/7fd714as-960.jpg'
}, 

{id : 'ita', 
model : 'Doblo',
producer : 'Fiat',
tankVolume : 1.9,
horsePower : 135 , 
image : 'https://nahodim.com.ua/uploads/cars/new/fiat/16/kdvZNdbDw_-QUhD6pIQE3S5T/slider_fiat_doblo.jpg'
}, 

{id : 'jpn', 
model : 'RX',
producer : 'Lexus',
tankVolume : 3.5,
horsePower : 313, 
image : 'https://cdn.riastatic.com/photosnew/auto/photo/Lexus_RX-350__321470629f.jpg'
}, 

{id : 'kor', 
model : 'Sorento',
producer : 'KIA',
tankVolume : 2.2,
horsePower : 202, 
image : 'https://lh3.googleusercontent.com/proxy/GGA4XLlifKSDgSvXlkhXWrCb5K-xIkmV8jFHbpJliJ4HJfTjyys0Tj-GMZuE5KE9HDosH1173XK5-ZuMV9FVNUfYwl4'
}

]
for (const product of arr) {
let container = document.createElement('div');
let h = document.createElement('h1');
document.body.appendChild(container);
h.innerText = `${product.id} ${product.model} ${product.producer}`;
let h2 = document.createElement('h2');
h2.innerText = `${product.tankVolume} ${product.horsePower}`;
let img = document.createElement('img');
img.src = `${product.image}`;
container.appendChild(h);
container.appendChild(h2);
container.appendChild(img);


};


