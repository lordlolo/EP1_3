$(document).ready(init);

function init(){
	associarEvents();
}

function associarEvents(){
	$("#provaP").click(llistarElementsParti);
	$("#provaM").click(llistarElementsMulti);
	$("#provaU").click(llistarElementsUsuaris);
	$("#afegirM").click(MostrarAfegirMulti);
}

function llistarElementsUsuaris(dades){
	$.ajax
	({	url: 'php/llistats.php', 
		dataType: 'json',
		type: 'get',
		data: 'quin=usuari',
		cache: false,

		success: function(data) {presentarDadesUsuaris(data);}
	});
}

function eliminarUsuaris(val){
	$.ajax
	({	url: 'php/eliminar.php?id='+val,
		dataType: 'json',
		type: 'get',
		data: 'quin=usuari',
		cache: false,

		success: function(data) {presentarDadesUsuaris(data);}

	});
}

function presentarDadesUsuaris(data){
	$("#result").html("");
	$("#result").append('<table border="2">');
	$("#result").append(
		$.each(data, function(index){
			var id = data[index].Id;
			var Nom = data[index].Nom;
			var Cognoms = data[index].Cognoms;

			
			$("#result").append('<tr>');
			$("#result").append('<td>');
			$("#result").append(Nom);
			$("#result").append('<a href=modificar.php?id='+id+'>Editar</td>');
			$("#result").append('<a href="" onclick="eliminarUsuaris('+id +');return false;"><img src="Imagenes/icn_trash.png"></a>');
			$("#result").append('</td>');
			$("#result").append('</tr>');
			
			//Proposta 2. Crear botó o imatge que invoqui una funció amb paràmetre
			// $cadena="<button name='"+ id + "' onclick='eliminarUsuaris("+id +");'>Eliminar</button>";
			// $("#result").append($cadena);
			// $("#result").append('<p>Nom    : '+Nom+'\t | Cognoms  :'+Cognoms+'</p><br>');
		})
	);
	$("#result").append('</table>');
}

function llistarElementsMulti(dades){
	$.ajax
	({  url: 'php/llistats.php',
		dataType: 'json',
		type: 'get',
		data: 'quin=multi',
		cache: false,

		success: function(data) {presentarDadesMulti(data);}
	});
}

function eliminarMulti(val){
	$.ajax
	({	url: 'php/eliminar.php?id='+val,
		dataType: 'json',
		type: 'get',
		data: 'quin=multi',
		cache: false,

		success: function(data) {presentarDadesMulti(data);}

	});
}

function presentarDadesMulti(data){
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
			$cadena="<button name='"+ id + "' onclick='eliminarMulti("+id +");'>Eliminar</button>";
			$("#result").append($cadena);
			$("#result").append('<p>tipus    : '+tipus+'\t | titol  :'+titol+'\t | descrip : '+descrip+'\t | url : '+url+'</p><br>');
		})
	);
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



