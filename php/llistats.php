<?php
	if($_GET['quin'] == 'particip'){
		require('classes/particip.class.php');


		$objPartip = new particip;

		$consulta= $objPartip->mostrar_allparticip();

		for($i = 1; $dades[$i] = mysql_fetch_array($consulta); $i++);
		array_pop($dades);	//Eliminar el últim element

		header('Content-type: application/json');
		echo json_encode($dades);
	}

	if($_GET['quin'] == 'multi'){
		require('classes/multi.class.php');

		$objMulti = new multi;

		$consulta= $objMulti->mostrar_allmulti();

		for($i = 1; $dades[$i] = mysql_fetch_array($consulta); $i++);
		array_pop($dades);	//Eliminar el últim element

		header('Content-type: application/json');
		echo json_encode($dades);
	}

	if($_GET['quin'] == 'usuari'){
		require('classes/persona.class.php');

		$objPersona = new persona;

		$consulta= $objPersona->mostrar_persones();
		for ($i = 1; $dades[$i] = mysql_fetch_array($consulta); $i++);
		array_pop($dades);

		header('Content-type: application/json');
		echo json_encode($dades);
	}
?>