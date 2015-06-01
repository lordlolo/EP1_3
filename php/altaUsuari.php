<?php
//-----------Alta Usuari----------------//
	require('classes/persona.class.php');
		
		// $nom = $_POST['nombre'];
		// $cognom = $_POST['apellidos'];
		// $tel = $_POST['telefon'];
		// $dataN = $_POST['data'];
		// $adr = $_POST['adresa'];
		// $pais = $_POST['pais'];
		// $pob = $_POST['poblacio'];
		// $codip = $_POST['codp'];
		// $dadesB = $_POST['banc'];
		// $email = $_POST['email'];
		// $pass = $_POST['contrasena'];


		// echo $nom;
		// echo $cognom;
		// echo $tel;
		// echo $dataN;
		// echo $adr;
		// echo $pais;
		// echo $pob;
		// echo $codip;
		// echo $dadesB;
		// echo $email;
		// echo $pass;

		echo " Dades ben recollides";

		$objPersona = new persona;
		if ( $objPersona->insertar(array($nom,$cognom,$tel,$dataN,$adr,$pais,$pob,$codip,$dadesB,$email,$pass)) == true){
			echo "dades introduides";
		}else{
			echo "ERROR!!";
		}

?>