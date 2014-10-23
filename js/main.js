
/* Function to show text indicating if the place is open or closed */
function clock() {
   var now = new Date();
   var day = now.getDay();
   var nday = "";
   
   switch (day){
	   case 0: nday = "domingo"; break;
	   case 1: nday = "lunes"; break;
	   case 2: nday = "martes"; break;
	   case 3: nday = "miércoles"; break;
	   case 4: nday = "jueves"; break;
	   case 5: nday = "viernes"; break;
	   case 6: nday = "sábado"; break;
	   default: break;	
   }
   
   var hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
   var minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
   $("#clockTime").text(hour + ':' + minutes + " del " + nday);

   // 9 to 21h
   if (hour <= 9 || hour >= 21 || day == 0){			   
		$("#isOpen").text("cerrada.");
		// $("#addText").text(" Nuestro horario es de 9 a 21h, ininterrumpido.");
		$("#addText").text("");
		$("#isOpen").css("color","red");
   }
   else {
	   $("#isOpen").text("abierta. ");
	   $("#addText").text("");
		$("#isOpen").css("color","green");
   }
}

function gotoCofpo() {
	var now = new Date();
	var date = now.format("dd-mm-yyyy");   	
	var url = "http://www.cofpo.org/index.php/farmaImage-es.html?Muni=Baiona&date1=" + date;

	window.open(url, '_blank');
  	window.focus();
}

function showHome(){
   $(".home").show();
}

function hideHome(){
   $(".home").hide();
}

function mostrarSeccion(nombreseccion,numseccion){
	$("#infantil").hide();
	$("#dietetica").hide();
	$("#dermofarmacia").hide();
	$("#higiene").hide();
	$("#"+nombreseccion).fadeIn();
	$(".menu_secciones li").removeClass("selected");
	$(".menu_secciones li:nth-child("+numseccion+")").addClass("selected");

}


// TOOD check festivos guardias, create gmail account,  analytics...
//https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide

