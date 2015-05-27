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
?>