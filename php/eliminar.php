<?php
	if($_GET['quin'] == 'particip'){
		require('classes/particip.class.php');

		$particip_id = $_GET['id'];
		$objParticip = new particip;

		if($objParticip->eliminar($particip_id) == true){
			header('Location: llistat.php');
		}else{
			header('Location: error.php?codi='+$particip_id);
		}
	}

	if($_GET['quin'] == 'multi'){
		require('classes/multi.class.php');

		$multi_id = $_GET['id'];
		$objMulti = new multi;

		if($objMulti->eliminar($multi_id) == true){
			header('Location: llistat.php');
		}else{
			header('Location: error.php?codi='+$multi_id);
		}
	}

	if($_GET['quin'] == 'usuari'){
		require('classes/persona.class.php');

		$persona_id = $_GET['id'];
		$objPersona = new persona;

		if($objPersona->eliminar($persona_id) == true){
			header('Location: llistat.php');
		}else{
			header('Location: error.php?codi='+$persona_id);
		}
	}
?>