<?php
	if($_POST['quin'] == 'multi'){
		require('classes/multi.class.php');

			$tipus_multi = $_POST['tiups'];
			$titol_multi = $_POST['titol'];
			$descrip_multi = $_POST['descrip'];
			$url_multi = $_POST['url'];

			$objMulti = new multi;

			if($objMulti->insertar(array($tipus_multi,$titol_multi,$descrip_multi,$url_multi)) == true){
				header('Location: llistat.php');
			}else{
				header('Location: error');
			}

	}

?>
