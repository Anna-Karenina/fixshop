var basket = {}; //корзина

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
	  
		out +=`<div class="card">`;
        out += `<img src="${prop[randnum].image}" alt="">`;
        out +=`<p>${prop[randnum].name}</p>`;
        out +=`<p>${prop[randnum].cost}</p>`;
        out +=`<button class="btn_shop add-to-basket" data-id="${prop[randnum].id}" >купить</button><br>`;
        out +=`</div>`
	  
		out +=`<div class="card">`;
        out += `<img src="${prop[randnum1].image}" alt="">`;
        out +=`<p>${prop[randnum1].name}</p>`;
        out +=`<p>${prop[randnum1].cost}</p>`;
        out +=`<button class="btn_shop add-to-basket" data-id="${prop[randnum1].id}" >купить</button><br>`;
        out +=`</div>`
	  
		out +=`<div class="card">`;
        out += `<img src="${prop[randnum2].image}" alt="">`;
        out +=`<p>${prop[randnum2].name}</p>`;
        out +=`<p>${prop[randnum2].cost}</p>`;
        out +=`<button class="btn_shop add-to-basket" data-id="${prop[randnum2].id}" >купить</button><br>`;
        out +=`</div>`

		out +=`<div class="card">`;
        out += `<img src="${prop[randnum3].image}" alt="">`;
        out +=`<p>${prop[randnum3].name}</p>`;
        out +=`<p>${prop[randnum3].cost}</p>`;
        out +=`<button class="btn_shop add-to-basket" data-id="${prop[randnum3].id}" >купить</button><br>`;
        out +=`</div>`
		
    $('.shopcardi').html(out);
    $('.add-to-basket').on('click', addToBasket);		
}
function initFrameSet() {
    $.getJSON('pages/catalog/newgoods.json', goodsOutq);
	function goodsOutq(data) { 
		/*console.log(data);*/
		var out = '';
		var prop = '';
		for (var key in data) {
		  prop = (data);
			console.log(prop)
			out +=`<div class="cardwrapper">`
			out +=`<div class="card">`;
			out += `<img src="${prop[key].image}" alt="" class="card-img-top" >`;
			
			out +=`<div class="card-body"><h5>${prop[key].name}</h5>`;	
			/*out +=`<p class="card-text">${prop[key].description}</p>`;*/
			out +=`<div class="costid"><p class="uid">id: ${prop[key].id}</p>`;

			out +=`<p class="thisCost">Цена: 	${prop[key].cost}</p></div>`;
			out +=`<button class="btn_shop add-to-basket" data-id="${prop[key].id}" >купить</button><br>`;
			out +=`</div></div></div>`
		$('.frame_modal_content').html(out);
		$('.add-to-basket').on('click', addToBasket);

		}	  
	}
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

function saveGoodsForMeniBasket(a,b){
	return a+b;
	
}

function showMiniBasket(){ //показывает сумму товаров в миникорзине
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