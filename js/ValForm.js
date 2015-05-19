$(document).ready(function(){

	var nombre = $("#nombre");
	var cognom = $("#apellido");
	var telefon = $("#telefono");
	var adress = $("#adreca");
	var banco = $("#banc");
	var email = $("#mail");
	var pass = $("#pass1, #pass2");
	var envi = $("#save");
	var mostra = $("#mostrar");

	nombre.on("blur",function() {
		nom = document.getElementById("nombre");
		fname = document.getElementById("nombre").value; 
		if (fname.length<2) {   
			nom.style.borderColor= "#FF0000";
			var divErr = document.getElementById("nerr");
			divErr.style.display= "inline-block";
		}  
		else { 
			nom.style.borderColor= "#00FF00";
			var divErr = document.getElementById("nerr");
			divErr.style.display= "none";}
		});

	cognom.on("blur",function() {
		cog = document.getElementById("apellido");
		lname = document.getElementById("apellido").value; 
		if (lname.length<2) {   
			cog.style.borderColor= "#FF0000";
			var divErr = document.getElementById("cerr");
			divErr.style.display= "inline-block";
		}  
		else { 
			cog.style.borderColor= "#00FF00";
			var divErr = document.getElementById("cerr");
			divErr.style.display= "none";}
		}); 

	telefon.on("blur",function() {
		val = document.getElementById("telefono");
		valor = document.getElementById("telefono").value;
		if(!(/^\+\d{3}\d{6}$/.test(valor)) ) {
			val.style.borderColor= "#FF0000";
			var divErr = document.getElementById("err");
			divErr.style.display= "inline-block";
		}
		else{
			val.style.borderColor= "#00FF00";
			var divErr = document.getElementById("err");
			divErr.style.display= "none";}
		});

	$(function() {
		$( "#datepicker" ).datepicker();
	});

	adress.on("blur",function() {
		adr = document.getElementById("adreca");
		adre = document.getElementById("adreca").value; 
		if (adre.length<6) {   
			adr.style.borderColor= "#FF0000";
			var divErr = document.getElementById("aerr");
			divErr.style.display= "inline-block";
		}  
		else { 
			adr.style.borderColor= "#00FF00";
			var divErr = document.getElementById("aerr");
			divErr.style.display= "none";}
		});

	banco.on("blur",function() {
		b = document.getElementById("banc");
		bc = document.getElementById("banc").value;
		if (!(/^AD\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}|AD\d{22}$/.test(bc))) {
			b.style.borderColor= "#FF0000";
			var divErr = document.getElementById("dberr");
			divErr.style.display= "inline-block";
		}
		else{
			b.style.borderColor= "#00FF00";
			var divErr = document.getElementById("dberr");
			divErr.style.display= "none";}
		}); 

	email.on("blur",function() {
		em = document.getElementById("mail");
		ema = document.getElementById("mail").value;
		if( !(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(ema))) {
			em.style.borderColor= "#FF0000";
			var divErr = document.getElementById("merr");
			divErr.style.display= "inline-block";
		}
		else{
			em.style.borderColor= "#00FF00";
			var divErr = document.getElementById("merr");
			divErr.style.display= "none";}
		});

	pass.on("blur",function() {
		pw1 = document.getElementById("pass1");
		pw2 = document.getElementById("pass2");
		p1 = document.getElementById("pass1").value;
		p2 = document.getElementById("pass2").value;
		espacios = false;
		cont = 0;
		if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{2,})[^ ]{6,}$/.test(p1))) {
			pw1.style.borderColor= "#FF0000";
			var divErr = document.getElementById("perr");
			divErr.style.display= "inline-block";
		}
		else{
			pw1.style.borderColor= "#00FF00";
			var divErr = document.getElementById("perr");
			divErr.style.display= "none";}

			while (!espacios && (cont < p1.length)) {
				if (p1.charAt(cont) == " ")
					espacios = true;
				cont++;
			}
			if (espacios) {
				pw1.style.borderColor= "#FF0000";
				var divErr = document.getElementById("perr");
				divErr.style.display="inline-block";
			}
			if (p1 != p2) {
				pw2.style.borderColor= "#FF0000";
				var divErr = document.getElementById("perr2");
				divErr.style.display= "inline-block";
			}
			else {
				pw2.style.borderColor= "#00FF00";
				var divErr = document.getElementById("perr2");
				divErr.style.display= "none";}
			});

	envi.on("click", function() {
		var nom = document.getElementById("nombre").value;
		var cog = document.getElementById("apellido").value;
		var tel = document.getElementById("telefono").value;
		var dat = document.getElementById("datepicker").value;
		var adr = document.getElementById("adreca").value;
		var cnt = document.getElementById("pais").value;
		var pbl = document.getElementById("pob").value;
		var cps = document.getElementById("codp").value;
		var bnc = document.getElementById("banc").value;
		var emm = document.getElementById("mail").value;
		var pas = document.getElementById("pass1").value;
		var pas2 = document.getElementById("pass2").value;

		localStorage.setItem("nom", nom);
		localStorage.setItem("cognom", cog);
		localStorage.setItem("telefon", tel);
		localStorage.setItem("data de naixement", dat);
		localStorage.setItem("adreca", adr);
		localStorage.setItem("pais", cnt);
		localStorage.setItem("poblacio", pbl);
		localStorage.setItem("codi postal", cps);
		localStorage.setItem("dades bancaries", bnc);
		localStorage.setItem("email", emm);
		localStorage.setItem("contrasenya", pas);
		localStorage.setItem("repcontrasenya", pas2);
	});

	mostra.on("click", function() {
		var nomp = localStorage.getItem("nom");
		var cogp = localStorage.getItem("cognom");
		var telp = localStorage.getItem("telefon");
		var datp = localStorage.getItem("data de naixement");
		var adrp = localStorage.getItem("adreca");
		var cntp = localStorage.getItem("pais");
		var pblp = localStorage.getItem("poblacio");
		var cpsp = localStorage.getItem("codi postal");
		var bncp = localStorage.getItem("dades bancaries");
		var emmp = localStorage.getItem("email");
		var pasp = localStorage.getItem("contrasenya");
		var pasp2 = localStorage.getItem("repcontrasenya");

		document.getElementById("nombre").value = nomp;
		document.getElementById("apellido").value = cogp;
		document.getElementById("telefono").value = telp;
		document.getElementById("datepicker").value = datp;
		document.getElementById("adreca").value = adrp;
		document.getElementById("pais").value = cntp;
		document.getElementById("pob").value = pblp;
		document.getElementById("codp").value = cpsp;
		document.getElementById("banc").value = bncp;
		document.getElementById("mail").value = emmp;
		document.getElementById("pass1").value = pasp;
		document.getElementById("pass2").value = pasp2;
	});
});
