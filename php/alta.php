<?php
//-----------Alta Usuari----------------//

if(isset($_POST['submit'])){
	require('classes/persona.class.php');
	
	function altaUsuari(){
		$nom = htmlspecialchars(trim($_POST['nombre']));
		$cognom = htmlspecialchars(trim($_POST['apellidos']));
		$tel = htmlspecialchars(trim($_POST['Telefono']));
		$dataN = htmlspecialchars(trim($_POST['datepicker']));
		$adr = htmlspecialchars(trim($_POST['adreca']));
		$pais = htmlspecialchars(trim($_POST['pais']));
		$pob = htmlspecialchars(trim($_POST)['pob']);
		$codip = htmlspecialchars(trim($_POST['codp']));
		$dadesB = htmlspecialchars(trim($_POST['banc']));
		$email = htmlspecialchars(trim($_POST['mail']));
		$pass = htmlspecialchars(trim($_POST['pass1']));

		$objPersona = new persona;
		if ( $objPersona->insertar(array($nom,$cognom,$tel,$dataN,$adr,$pais,$pob,$codip,$dadesB,$email,$pass)) == true){
			echo "dades introduïdes";
		}else{
			echo "ERROR!!";
		}
	}
}
?>