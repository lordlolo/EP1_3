$(document).ready(init);

function init(){
	associarEvents();
}

function associarEvents(){
	$("#provaP").click(llistarElementsParti);
	$("#provaM").click(llistarElementsMulti);
}

function llistarElementsMulti(dades){
	$.ajax
	({  url: 'php/llistats.php',
		dataType: 'json',
		type: 'get',
		data: 'quin=multimedia',
		cache: false,

		success: function(data) {presentarDadesMulti(data);}
	});
}

function presentarDadesMulti(data){
	alert("presentar");

	$("#result").html("");
	$("#result").append(
		$.each(data, function(index){
			var id = data[index].Id;
			var tipus = data[index].tipus;
			var titol = data[index].titol;
			var descrip = data[index].descrip;
			var url=data[index].url;

		})
	);
}

function eliminarParticip(val){
	$.ajax
	({	url: 'php/eliminar.php?id='+val,
		dataType: 'json',
		type: 'get',
		data: 'quin=particip',
		cache: false,

		success: function(data) {presentarDadesParti(data);}

	});
}

function llistarElementsParti(dades){
	$.ajax
	({	url: 'php/llistats.php',
		dataType: 'json',
		type: 'get',
		data: 'quin=particip',
		cache: false,

		success: function(data) {presentarDadesParti(data);}
	});
}

function presentarDadesParti(data){
	$("#result").html("");
	$("#result").append(
		$.each(data, function(index){
			var id = data[index].Id;
			var tipus = data[index].tipus;
			var titol = data[index].titol;
			var descrip = data[index].descrip;
			var url = data[index].url;

			$("#result").append('<p>Id    : '+id+'</p>');
			//Proposta 1. Crear enllaços dinàmics amb href 
			$("#result").append('<a href=modificar.php?id='+id+'>Editar | ');
			$("#result").append('<a href=eliminar.php?id='+id+'>Eliminar');
			//Proposta 2. Crear botó o imatge que invoqui una funció amb paràmetre
			$cadena="<button name='"+ id + "' onclick='eliminarParticip("+id +");'>Eliminar</button>";
			$("#result").append($cadena);
			$("#result").append('<p>tipus    : '+tipus+'\t | titol  :'+titol+'\t | descrip : '+descrip+'\t | url : '+url+'</p><br>');
		})
	);
}



