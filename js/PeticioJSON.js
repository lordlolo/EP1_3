$(document).ready(init);

function init(){
	associarEvents();
}

function assciarEvents(){
	$("#actualitzarDadesParti").load(llistarElementsParti);
}

function llistarElementsParti(dades){
	$.ajax
	({	url: 'php/llistatParti.php',
		dataType: 'json',
		type: 'get',
		cache: false,

		success: function(data) {presentarDadesParti(data);} 
	})
}

function presentarDadesParti(data){
	
}