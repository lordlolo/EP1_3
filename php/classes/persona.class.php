<?php 
include_once("conexio.class.php");

class persona{
 //constructor	
 	var $con;
 	function persona(){
 		$this->con=new DBManager;
 	}

	function insertar($campos){
		if($this->con->conectar()==true){
			print_r($campos);
			return mysql_query("INSERT INTO persona (Nom, Cognoms, Telefon, dataNaixement, Adreca, Pais, Poblacio, CodiPostal, DadesBanc, Email, Password) VALUES ('".$campos[0]."','".$campos[1]."','".$campos[2]."','".$campos[3]."','".$campos[4]."','".$campos[5]."','".$campos[6]."','".$campos[7]."','".$campos[8]."','".$campos[9]."','".$campos[10]."')");
		}
	}
	
	function actualizar($campos,$id){
		if($this->con->conectar()==true){
			//print_r($campos);
			return mysql_query("UPDATE persona SET Nom = '".$campos[0]."', Cognoms = '".$campos[1]."', Telefon = '".$campos[2]."', dataNaixement = '".$campos[3]."',Adreça = '".$campos[4]."', Pais = '".$campos[5]."', Problacio = '".$campos[6]."', CodiPostal = '".$campos[7]."', DadesBanc = '".$campos[8]."', Email = '".$campos[9]."', Password = '".$campos[10]."' WHERE id = ".$id);
		}
	}
	
	function mostrar_persona($id){
		if($this->con->conectar()==true){
			return mysql_query("SELECT * FROM persona WHERE id=".$id);
		}
	}

	function mostrar_persones(){
		if($this->con->conectar()==true){
			return mysql_query("SELECT * FROM persona ORDER BY id DESC");
		}
	}

	function eliminar($id){
		if($this->con->conectar()==true){
			return mysql_query("DELETE FROM persona WHERE id=".$id);
		}
	}
}
?>