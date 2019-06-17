var basket={};
showBasket();

function loadBasket(){ // есть ли в локал стор корзина
    if (localStorage.getItem('basket')){//если есть паршу ее и записываю в переменую баскет
    basket = JSON.parse(localStorage.getItem('basket'));
        showBasket(); 
        } 
    else{
        $('.basket_create').html('<h2>Корзина пуста!</h2>');
    }
}

function showBasket() {
  if (!isEmpty(basket)) {
    $('.basket_create').html('<h2>Корзина пуста!</h2>');
  }
  else{
    $.getJSON('pages/catalog/newgoods.json', function(data){
        var goods = data;
        var out='';
		console.log(goods);
		
		
    for(var id in basket){
         out += `<div class="row no-gutters basket_mini_card">`;
             out += `<div class="col-lg-3 basket_xsimg align-self-center">`;
             	out += `<img src="${goods[id].image}" alt="">`;
             out += `</div>`;
             out += `<div class="col-lg-8 align-self-center">`;
                out += `<h5>${goods[id].name}</h5>`;
                out += `<p>${goods[id].cost} руб.</p>`;
               out += `<p id="stock">Остаток: 1</p>`;
                out += `<button data-id="${id}" class="rem-goods goods-option"> - </button>`;
                out += ` `;
                out += `<button class="goods-option">${basket[id]}</button>`;
                out += ` `;
                out += `<button data-id="${id}" class="add-goods goods-option">+ </button> `;
                out +=`${goods[id].cost*basket[id]}`
                
            out += `</div>`;
            out += `<div class="col-lg-1">`;
                out += `<button data-id="${id}" class="del-goods goods-option">x</button>`;
            out += `</div>`;
         out += `</div>`;
        }
            $('.basket_create').html(out);
            $('.del-goods').on('click', delGoods);
            $('.add-goods').on('click', addGoods);
            $('.rem-goods').on('click', remGoods);
    });
  }
}


function delGoods(){ //в корзине удаляю позицию 
    var id= $(this).attr('data-id');
    delete basket[id];
    saveBasket();
    showBasket();    
}
function addGoods(){ //в корзине увиличиваю кол-во позиций
    var id= $(this).attr('data-id');
    basket[id]++;
    saveBasket();
    showBasket();
}
function remGoods(){ //в корзине уменьшаю кол-во позиций и если остается  ноль, то запускаю функцию удаления в корзине(delGoods)
    var id= $(this).attr('data-id');
    if(basket[id]==1){
        delete basket[id];
    } 
    else {
    basket[id]--;
    }
    saveBasket();
    showBasket();
}

function saveBasket(){ // Сохроняем корзину
    localStorage.setItem('basket', JSON.stringify(basket));// из массива в сторку тк локал сторейдж сохранеет только стрингу
}

function isEmpty(object){ //проверка наполнености корзины
    for(var key in object)
    if(object.hasOwnProperty(key))
    return true;
    return false;
}

$(document).ready(function(){
    loadBasket(); // по окончанию загрузки страници запускаю функцию загрузки корзины
});
