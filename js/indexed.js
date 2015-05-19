window.addEventListener("load", associar, false);


function associar(){
	bd = null;

	iniciar();

	var titol = document.getElementById("titol");

	combo = document.getElementById("combo");
   	//itemCombo = combo.options[combo.selectedIndex].text;

	var mostrarJSON = document.getElementById("boto1");
	mostrarJSON.onclick = mostrarJson;

	var mostrarXML = document.getElementById("boto2");
	mostrarXML.onclick = mostrarXml;

	zonadades = document.getElementById("zonadatos");

	inserirJson = document.getElementById("boto3");
	inserirJson.onclick = agregarObjecteJson;

	inserirXml = document.getElementById("boto4");
	inserirXml.onclick = agregarObjecteXml;

	var modificar = document.getElementById("boto5");
	modificar.onclick = modifica;

	var borrar = document.getElementById("boto6");
	borrar.onclick = esborrar;

	xml=false;
	borrant = false;
	modificant = false;

}

function iniciar() {
	//indexedDB.deleteDatabase("BD");
	
	var solicitud = indexedDB.open("BD",2);
	solicitud.onsuccess = function(e){
		bd = e.target.result;
		//carregarJson();
		//carregarXml();
	}
	solicitud.onupgradeneeded = function(e){
		bd = e.target.result;
		bd.createObjectStore("DPFr", {keyPath: "clau"});
		bd.createObjectStore("DPEsp", {keyPath: "clau"});
	}

}

function peticioAjax(){
	var xmlhttp;
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp=new XMLHttpRequest();
  	}else{// code for IE6, IE5
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
	return xmlhttp;
}

function carregarJson(){
	var request = peticioAjax();
	request.open("GET","/Ivan/BD/DPFranca2015.txt",true);
	request.send("");

	request.onreadystatechange=function(){
		if (request.readyState==4 && request.status==200){

			var cont = JSON.parse(request.responseText);

			var transaccio = bd.transaction(["DPFr"], "readwrite");
			var guardar = transaccio.objectStore("DPFr");

			for (var i = 0; i < cont.length; i++) {
				var obj = cont[i];
				var agregar = guardar.add({clau: obj.CodiDP, tipus: obj.Tipus, pregunta: obj.Pregunta, datao: obj.DataO, dataf: obj.DataF});

			};
		}
	}
}

function carregarXml(){
	var request = peticioAjax();
	request.open("GET","/Ivan/BD/DPEspanya2015.XML",true);
	request.send("");

	request.onreadystatechange=function(){
		if (request.readyState==4 && request.status==200){

			var persones = request.responseXML.documentElement.getElementsByTagName("persona");
			
			var transaccio = bd.transaction(["DPEsp"], "readwrite");
			var guardar = transaccio.objectStore("DPEsp");

			for (var i = 0; i < persones.length; i++) {
				var codi = persones[i].getElementsByTagName("codiDP")[0].firstChild.nodeValue;

				var tipus = persones[i].getElementsByTagName("tipus")[0].firstChild.nodeValue;

				var pregunta = persones[i].getElementsByTagName("pregunta")[0].firstChild.nodeValue;

				var datao = persones[i].getElementsByTagName("dataO")[0].firstChild.nodeValue;

				var dataf = persones[i].getElementsByTagName("dataF")[0].firstChild.nodeValue;
				
				var agregar = guardar.add({clau: codi, tipus: tipus, pregunta: pregunta, datao: datao, dataf: dataf});

			};
		}
	}
}

function agregarObjecteJson() {
	var codidp = document.getElementById("clave").value;
	var tipus = document.getElementById("texto").value;
	var pregunta = document.getElementById("pregunta").value;
	var datao = document.getElementById("fechaO").value;
	var dataf = document.getElementById("fechaF").value;
	var transaccio = bd.transaction(["DPFr"], "readwrite");
	var guardar = transaccio.objectStore("DPFr");
	var agregar = guardar.add({clau: codidp, tipus: tipus, pregunta: pregunta, datao: datao, dataf: dataf});
	agregar.addEventListener("success", mostrarJson, false);

	document.getElementById("clave").value = ""
	document.getElementById("texto").value = ""
	document.getElementById("pregunta").value = ""
	document.getElementById("fechaO").value = ""
	document.getElementById("fechaF").value = ""
}

function agregarObjecteXml() {
	var codidp = document.getElementById("clave").value;
	var tipus = document.getElementById("texto").value;
	var pregunta = document.getElementById("pregunta").value;
	var datao = document.getElementById("fechaO").value;
	var dataf = document.getElementById("fechaF").value;
	var transaccio = bd.transaction(["DPEsp"], "readwrite");
	var guardar = transaccio.objectStore("DPEsp");
	var agregar = guardar.add({clau: codidp, tipus: tipus, pregunta: pregunta, datao: datao, dataf: dataf});
	agregar.addEventListener("success", mostrarXml, false);

	document.getElementById("clave").value = ""
	document.getElementById("texto").value = ""
	document.getElementById("pregunta").value = ""
	document.getElementById("fechaO").value = ""
	document.getElementById("fechaF").value = ""
}

function mostrarJson() {
	xml = false;
	zonadatos.innerHTML="";
	titol.innerHTML = "JSON:";
	var transaccio = bd.transaction(["DPFr"], "readonly");
	var guarda = transaccio.objectStore("DPFr");
	var cursor = guarda.openCursor();
	cursor.addEventListener("success", mostrarDades, false);
}

function mostrarXml() {
	xml = true;
	zonadatos.innerHTML="";
	titol.innerHTML = "XML:";
	var transaccio = bd.transaction(["DPEsp"], "readonly");
	var guarda = transaccio.objectStore("DPEsp");
	var cursor = guarda.openCursor();
	cursor.addEventListener("success", mostrarDades, false);
}

function mostrarDades(e) {
	var cursor = e.target.result;
	if (cursor){
		zonadatos.innerHTML+= "<div class=\"item\" id=\""+cursor.value.clau+"\"><input type=\"checkbox\" class=\"borrar\"><p class=\"codi\">" + cursor.value.clau + "</p> - <p class=\"tipus\">" + 
		cursor.value.tipus + "</p> - <p class=\"pregunta\">" + cursor.value.pregunta + "</p> - <p class=\"dataO\">" + 
		cursor.value.datao + "</p> - <p class=\"dataF\">" + cursor.value.dataf + "</p></div>";
		cursor.continue();
	}
}

function esborrar(){
	if(!borrant){
		mostrarChecks();
		borrant = true;
		return;
	}else{
		borrEntHTML();
		amagarChecks();
	}

}

function borrEntHTML(){
	var entrades = document.getElementsByClassName("item");
	var checks = document.getElementsByClassName("borrar");

	var borrHTML = [];
	var borrinDB = [];
	j = 0;

	for (var i = 0; i < entrades.length; i++) {
		if(checks[i].checked){
			borrHTML[j] = entrades[i]; 
			borrinDB[j] = entrades[i].id;
			j++;
		}
	}

	for (var i = 0; i < borrHTML.length; i++) {
		zonadatos.removeChild(borrHTML[i]);
	}

	borrEntIndexedDB(borrinDB);
}

function borrEntIndexedDB(entrades){
	if (xml){
		var transaccio = bd.transaction(["DPEsp"], "readwrite");
		var esborrar = transaccio.objectStore("DPEsp");
	} else{
		var transaccio = bd.transaction(["DPFr"], "readwrite");
		var esborrar = transaccio.objectStore("DPFr");
	}

	esborrar.openCursor().onsuccess = function(e){
		var cursor = e.target.result;
		if (cursor){
			for (var i = 0; i != entrades.length; i++){
				if(cursor.value.clau == entrades[i]){
					var borrat = esborrar.delete(cursor.value.clau);
				}
			}
			cursor.continue();
		}
	};
	borrant = false;
}

function mostrarChecks(){
	var ch = document.getElementsByClassName("borrar");
	for (var i = 0; i < ch.length; i++) {
		ch[i].style.display="inline-block";
	}
}

function amagarChecks(){
	var ch = document.getElementsByClassName("borrar");
	for (var i = 0; i < ch.length; i++) {
		ch[i].style.display="none";
	}
}

function modifica (){
	if(titol.innerHTML != "Arxiu:"){
		if(!modificant){
			document.getElementById("clave").style.display="none";
			combo.style.display="block";
			modificant = true;
    		carregaCodis();
    		return;
		} else{
			document.getElementById("clave").style.display="block";
			combo.style.display="none";
			actualitza();
			modificant = false;
		}
	}

}

function carregaCodis(){
	if(xml){
		var transaccio = bd.transaction(["DPEsp"], "readonly");
		var guarda = transaccio.objectStore("DPEsp");
	}
	if(!xml) {
		var transaccio = bd.transaction(["DPFr"], "readonly");
		var guarda = transaccio.objectStore("DPFr");
	}

	combo.innerHTML = "";
	guarda.openCursor().onsuccess = function(e){
		var cursor = e.target.result;
		if (cursor){
			combo.innerHTML += " <option value=\"clau\">"+cursor.value.clau+"</option>"
			cursor.continue();
		}
	};
}

function actualitza(){

	if (xml){
		var transaccio = bd.transaction(["DPEsp"], "readwrite");
		var actua = transaccio.objectStore("DPEsp");
	} else{
		var transaccio = bd.transaction(["DPFr"], "readwrite");
		var actua = transaccio.objectStore("DPFr");
	}

	actua.openCursor().onsuccess = function(e){
		var cursor = e.target.result;
		if (cursor){
			itemCombo = combo.options[combo.selectedIndex].text;
			if(cursor.value.clau == itemCombo){
				obj = new Object();
				obj.clau = cursor.value.clau;
				obj.tipus = document.getElementById("texto").value;
				obj.pregunta = document.getElementById("pregunta").value;
				obj.datao = document.getElementById("fechaO").value;
				obj.dataf = document.getElementById("fechaF").value;

				var cambiat = actua.put(obj);
			}
			cursor.continue();
		}
	};
}
