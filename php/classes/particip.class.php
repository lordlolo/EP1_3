<?php 
include_once("conexio.class.php");

class particip{
 //constructor	
 	var $con;
 	function particip(){
 		$this->con=new DBManager;
 	}

	function insertar($campos){
		if($this->con->conectar()==true){
			//print_r($campos);
			return mysql_query("INSERT INTO particip (id, tipus, titol, descrip, url) VALUES ('".$campos[0]."','".$campos[1]."','".$campos[2]."','".$campos[3]."','".$campos[4]."')");
		}
	}
	
	function actualizar($campos,$id){
		if($this->con->conectar()==true){
			//print_r($campos);
			return mysql_query("UPDATE particip SET tipus = '".$campos[0]."', titol = '".$campos[1]."', descrip = '".$campos[2]."', url = '".$campos[3]."' WHERE id = ".$id);
		}
	}
	
	function mostrar_particip($id){
		if($this->con->conectar()==true){
			return mysql_query("SELECT * FROM particip WHERE id=".$id);
		}
	}

	function mostrar_allparticip(){
		if($this->con->conectar()==true){
			return mysql_query("SELECT * FROM particip ORDER BY id DESC");
		}
	}

	function eliminar($id){
		if($this->con->conectar()==true){
			return mysql_query("DELETE FROM particip WHERE id=".$id);
		}
	}
}
?>