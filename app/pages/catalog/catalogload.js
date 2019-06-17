var basket = {}; //корзина

var clearModal = function (){
	var out= "";	
	console.log("modal clean");
	$('#seats').html(out);
	$('#fs').html(out);
	$('#strwhl').html(out);
	$('#pedal').html(out);
}

function init() {
    $.getJSON('pages/catalog/newgoods.json', goodsOut);
}//    загружаю товары из джейсон
/*~~~~~~~~~~Витрина~~~~~~~~~~*/
function goodsOut(data) { 
    var out = '';
	var prop = (data);
	console.log(prop)
	var arr=[];
		var arr=Object.entries(prop).length;  //Создание массива из импортаБД и вычисление длинны массива*/
		var randnum = getRandomInt(1, arr);//поиск случайного числа массива
		var randnum1=getRandomInt(1, arr)
		var randnum2=getRandomInt(1, arr)
		var randnum3=getRandomInt(1, arr)
		
		console.log (randnum, randnum1, randnum2, randnum3 )
	  
		out +=`<div class="card">`;
        out += `<img src="${prop[randnum].image}" alt="">`;
        out +=`<p>${prop[randnum].name}</p>`;
        out +=`<p>${prop[randnum].cost}<sup> руб</sup></p>`;
        out +=`<dbselectbutton class="btn_shop add-to-basket" data-id="${prop[randnum].id}" >купить</button><br>`;
        out +=`</div>`
	  
		out +=`<div class="card">`;
        out += `<img src="${prop[randnum1].image}" alt="">`;
        out +=`<p>${prop[randnum1].name}</p>`;
        out +=`<p>${prop[randnum1].cost}<sup> руб</sup></p>`;
        out +=`<button class="btn_shop add-to-basket" data-id="${prop[randnum1].id}" >купить</button><br>`;
        out +=`</div>`
	  
		out +=`<div class="card">`;
        out += `<img src="${prop[randnum2].image}" alt="">`;
        out +=`<p>${prop[randnum2].name}</p>`;
        out +=`<p>${prop[randnum2].cost}<sup> руб</sup></p>`;
        out +=`<button class="btn_shop add-to-basket" data-id="${prop[randnum2].id}" >купить</button><br>`;
        out +=`</div>`

		out +=`<div class="card">`;
        out += `<img src="${prop[randnum3].image}" alt="">`;
        out +=`<p>${prop[randnum3].name}</p>`;
        out +=`<p>${prop[randnum3].cost}<sup> руб</sup> </p>`;
        out +=`<button class="btn_shop add-to-basket" data-id="${prop[randnum3].id}" >купить</button><br>`;
        out +=`</div>`
		
    $('.shopcardi').html(out);
    $('.add-to-basket').on('click', addToBasket);		
}


function initFrameSet() {
    $.getJSON('pages/catalog/newgoods.json', frameOut);
	function frameOut(data) { 
	  var out = '';
	  var prop = (data);
		for (var key in data) {
		var cat = data[key].catalog
		
			if(cat == 'frames'){
				
				out +=`<div class="cardwrapper">`
				out +=`<div class="card" id="${prop[key].id}">`;
				
					out +=`<div class="wtf" id="${prop[key].id}">`;
					out +=`<p>${prop[key].description}</p>`;
					out +=`</div>`
				
				out += `<img src="${prop[key].image}" alt="" class="card-img-top">`;
				out +=`<div class="card-body"><h5>${prop[key].name}</h5>`;	
				out +=`<div class="costid"><p class="uid costid">id: ${prop[key].id}</p>`;
				
				out +=`<button class="btn discri" id="${prop[key].id }" data-idi="${prop[key].id }"><i class="fas fa-info-circle"></i> </button>`;
		
				out +=`<p class="thisCost">Цена: ${prop[key].cost}<sup> руб</sup></p></div>`;
				
				out +=`<div class="w"><button class="btn_shop add-to-basket" data-id="${prop[key].id}" >В корзину</button></div><br>`;
				out +=`</div> </div></div>`
			
					$('#fs').html(out);
					$('.add-to-basket').on('click', addToBasket);
					$('.discri').on('click', showa);	
			}
			
		}
  }
}

function initSeats() {
    $.getJSON('pages/catalog/newgoods.json', seatOut);
	function seatOut(data) { 
	  var out = '';
	  var prop = (data);
		for (var key in data) {
		var cat = data[key].catalog
		
		if(cat == 'seats'){
				
				out +=`<div class="cardwrapper">`
				out +=`<div class="card" id="${prop[key].id}">`;
				
				out +=`<div class="wtf" id="${prop[key].id}">`
				out +=`<p>${prop[key].description}</p>`
				out +=`</div>`
				
				out += `<img src="${prop[key].image}" alt="" class="card-img-top" >`;
				out +=`<div class="card-body"><h5>${prop[key].name}</h5>`;	
				out +=`<p class="cardText" 
							id="${prop[key].id}"
						style="display: none" 
						data-description="${prop[key].description}">
						${prop[key].description}</p>`;
				out +=`<div class="costid"><p class="uid">id: ${prop[key].id}</p>`;
				
				out +=`<button class="btn discri" id="discri" data-id="${prop[key].id }"><i class="fas fa-info-circle"></i> </button>`;
		
				out +=`<p class="thisCost">Цена: ${prop[key].cost}<sup> руб</sup></p></div>`;
				out +=`<button class="btn_shop add-to-basket" data-id="${prop[key].id}" data-description="${prop[key].description}" >В корзину</button><br>`;
				out +=`</div></div></div>`
				 
					$('#seats').html(out);
					$('.add-to-basket').on('click', addToBasket);
					$('.discri').on('click', showa);
		}
	}	  
  }
}

function initStrWheels() {
    $.getJSON('pages/catalog/newgoods.json', whlOut);
	function whlOut(data) { 
	  var out = '';
	  var prop = (data);
		for (var key in data) {
		var cat = data[key].catalog
		
		if(cat == 'strwhl'){
				
				out +=`<div class="cardwrapper">`
				out +=`<div class="card" id="${prop[key].id}">`;
				
				out +=`<div class="wtf" id="${prop[key].id}">`
				out +=`<p>${prop[key].description}</p>`
				out +=`</div>`
				
				out += `<img src="${prop[key].image}" alt="" class="card-img-top" >`;
				out +=`<div class="card-body"><h5>${prop[key].name}</h5>`;	
				out +=`<p class="cardText" 
							id="${prop[key].id}"
						style="display: none" 
						data-description="${prop[key].description}">
						${prop[key].description}</p>`;
				out +=`<div class="costid"><p class="uid">id: ${prop[key].id}</p>`;
				
				out +=`<button class="btn discri" id="discri" data-id="${prop[key].id }"><i class="fas fa-info-circle"></i> </button>`;
		
				out +=`<p class="thisCost">Цена: ${prop[key].cost}<sup> руб</sup></p></div>`;
				out +=`<button class="btn_shop add-to-basket" data-id="${prop[key].id}" data-description="${prop[key].description}" >В корзину</button><br>`;
				out +=`</div></div></div>`
				 
					$('#strwhl').html(out);
					$('.add-to-basket').on('click', addToBasket);
					$('.discri').on('click', showa);
		}
	}	  
  }
}
function initPedal() {
    $.getJSON('pages/catalog/newgoods.json', pedOut);
	function pedOut(data) { 
	  var out = '';
	  var prop = (data);
		for (var key in data) {
		var cat = data[key].catalog
		
		if(cat == 'pedal'){
			
				out +=`<div class="cardwrapper">`
				out +=`<div class="card" id="${prop[key].id}">`;
				
				out +=`<div class="wtf" id="${prop[key].id}">`
				out +=`<p>${prop[key].description}</p>`
				out +=`</div>`
				
				out += `<img src="${prop[key].image}" alt="" class="card-img-top" >`;
				out +=`<div class="card-body"><h5>${prop[key].name}</h5>`;	
				out +=`<p class="cardText" 
							id="${prop[key].id}"
						style="display: none" 
						data-description="${prop[key].description}">
						${prop[key].description}</p>`;
				out +=`<div class="costid"><p class="uid">id: ${prop[key].id}</p>`;
				
				out +=`<button class="btn discri" id="discri" data-id="${prop[key].id }"><i class="fas fa-info-circle"></i> </button>`;
		
				out +=`<p class="thisCost">Цена: ${prop[key].cost}<sup> руб</sup></p></div>`;
				out +=`<button class="btn_shop add-to-basket" data-id="${prop[key].id}" data-description="${prop[key].description}" >В корзину</button><br>`;
				out +=`</div></div></div>`
				 
					$('#pedal').html(out);
					$('.add-to-basket').on('click', addToBasket);
					$('.discri').on('click', showa);
		}
	}	  
  }
}

function initBrakes() {
    $.getJSON('pages/catalog/newgoods.json', brakeOut);
	function brakeOut(data) { 
	  var out = '';
	  var prop = (data);
		for (var key in data) {
		var cat = data[key].catalog
		
			if(cat == 'brake'){
				
				out +=`<div class="cardwrapper">`
				out +=`<div class="card" id="${prop[key].id}">`;
				
				out +=`<div class="wtf" id="${prop[key].id}">`
				out +=`<p>${prop[key].description}</p>`
				out +=`</div>`
				
				out += `<img src="${prop[key].image}" alt="" class="card-img-top" >`;
				out +=`<div class="card-body"><h5>${prop[key].name}</h5>`;	
				out +=`<p class="cardText" 
							id="${prop[key].id}"
						style="display: none" 
						data-description="${prop[key].description}">
						${prop[key].description}</p>`;
				out +=`<div class="costid"><p class="uid">id: ${prop[key].id}</p>`;
				
				out +=`<button class="btn discri" id="discri" data-id="${prop[key].id }"><i class="fas fa-info-circle"></i> </button>`;
		
				out +=`<p class="thisCost">Цена: ${prop[key].cost}<sup> руб</sup></p></div>`;
				out +=`<button class="btn_shop add-to-basket" data-id="${prop[key].id}" data-description="${prop[key].description}" >В корзину</button><br>`;
				out +=`</div></div></div>`
			
					$('#brake').html(out);
					$('.add-to-basket').on('click', addToBasket);
					$('.discri').on('click', showa);
				
			}
		}
  }
}

function showa(){  //показывает описание второй вариант
	var id = $(this).attr('data-idi');
	var discrip = document.getElementsByClassName('wtf').namedItem(id);
	var btndiscrip = document.getElementsByClassName('discri').namedItem(id)
	discrip.style.opacity = "1";
	btndiscrip.style.display = "none"
	discrip.onclick = function(){
		discrip.style.opacity = "0";
		btndiscrip.style.display = "block"}
		
}

function showDisc(){ //показывает описание  первый варинт
	var out= '';
    var idda = $(this).attr('data-id'); //берет дата атрибут выбираемого и пихает его в idda 
	var ct =document.getElementsByClassName('cardText').namedItem(idda); // document.getElementsByTagName("P").namedItem("myElement"); какаято магия
		atDisc = ct.dataset.description;//выбирает атрибут дискрипшен 
	
	var thCard = document.getElementsByClassName('card').namedItem(idda); //та же магия с классом и айди обязательно писать в динамический ади у класса  out +=`<div class="card" id="${prop[key].id}">`; 
	
	out = `<p>${atDisc}</p>`
	out += `<p>${atDisc}</p>`
	
	$(thCard).html(out);
	
}

function addToBasket(){ //Добавляет товар в корзину
    var id= $(this).attr('data-id');
    if(basket[id] == undefined){
        basket[id] = 1; //если в корзине нет товара то делаем = 1
    }
    else{
        basket[id]++; //если такой товар есть то увеличиваю на 1
    }
    showMiniBasket();
    saveBasket();
}

function saveBasket(){ // Сохроняем корзину
    localStorage.setItem('basket', JSON.stringify(basket));// из массива в сторку тк локал сторейдж сохранеет только стрингу
}


function showMiniBasket(){ //показывает количество  товаров в миникорзине
    var out = "";
	var prop = 0;
    for(var keys in basket){
		 prop += (basket[keys]);
    }
	if(prop == 0){
		out += `(пуста)`;
	}
		else{
		out +=`(${prop})`;
		}
	$('.mini_basket').html(out);
}


function loadBasket(){ // есть ли в локал стор корзина
    if (localStorage.getItem('basket')){//если есть паршу ее и записываю в переменую баскет
        basket = JSON.parse(localStorage.getItem('basket'));
        showMiniBasket();
    }
}

function getRandomInt(min, max) { //функция поиска случайного числа
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
			

$(document).ready(function(){
    init();
    loadBasket();
    showMiniBasket();
	getRandomInt();
});