$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
      AOS.init({
        easing: 'ease-in-out-sine'
      });

/*~~~~~~~~~~~~~~~Свои модалки~~~~~~~~~~~~~*/
var btnLogin = document.getElementById('btn_modal_login');
var modalLogin = document.getElementById('login_modal');
var btnBasket = document.getElementById('btn_modal_basket');
var modalBasket = document.getElementById('modal_basket');
var modalframe = document.getElementById('modal_catalog_window');

 

var btnframe = document.getElementById('btn_modal_catalog_frame');
var btnseats = document.getElementById('btn_modal_catalog_seats');
var btnstrwheel = document.getElementById('btn_modal_catalog_strwheel');
var btnbrakes = document.getElementById('btn_modal_catalog_brakes');
var btnwheels = document.getElementById('btn_modal_catalog_wheels');
var btnpedal = document.getElementById('btn_modal_catalog_pedal');
var btnhardware = document.getElementById('btn_modal_catalog_hardware');
	
btnLogin.onclick = function(){
    modalLogin.style.display = "block";
}
btnBasket.onclick = function(){
    modalBasket.style.display = "block";
   $(loadBasket()); //вызов глобальной функиции загрузки корзины из basketlogic.js
}
btnframe.onclick = function(){
	console.log("framesets");
	$(initFrameSet());
	modalframe.style.display = "block";
}

btnseats.onclick = function(){
	console.log("seats");
	$(initSeats());
    modalframe.style.display = "block";
}

btnstrwheel.onclick = function(){
	console.log("strwhl");
	$(initStrWheels());
    modalframe.style.display = "block";
}

btnpedal.onclick = function(){
	console.log("pedal");
	$(initPedal());
    modalframe.style.display = "block";
}

btnbrakes.onclick = function(){
	console.log("brakes");
	$(initBrakes());
    modalframe.style.display = "block";
}

window.onclick = function(event){
    if(event.target == modalBasket) {
        modalBasket.style.display = "none";
        $(showMiniBasket()); //вызов глобальной функиции загрузки мини корзины из catalogload.js
    }else if(event.target == modalLogin) {
      modalLogin.style.display = "none";  
    }else if(event.target == modalframe) {
      modalframe.style.display = "none"; 
	  $(clearModal());	
}
}
/*~~~~~~~~~~~~~~~Свои модалки конец~~~~~~~~~~~~~*/
