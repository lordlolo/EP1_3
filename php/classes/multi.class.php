<?php 
include_once("conexio.class.php");

class multi{
 //constructor	
 	var $con;
 	function multi(){
 		$this->con=new DBManager;
 	}

	function insertar($campos){
		if($this->con->conectar()==true){
			//print_r($campos);
			return mysql_query("INSERT INTO multi (tipus, titol, descrip, url) VALUES ('".$campos[0]."', '".$campos[1]."','".$campos[2]."','".$campos[3]."')");
		}
	}
	
	function actualizar($campos,$id){
		if($this->con->conectar()==true){
			//print_r($campos);
			return mysql_query("UPDATE multi SET tipus = '".$campos[0]."', titol = '".$campos[1]."', descrip = '".$campos[2]."', url = '".$campos[3]."' WHERE id = ".$id);
		}
	}
	
	function mostrar_multi($id){
		if($this->con->conectar()==true){
			return mysql_query("SELECT * FROM multi WHERE id=".$id);
		}
	}

	function mostrar_allmulti(){
		if($this->con->conectar()==true){
			return mysql_query("SELECT * FROM multi ORDER BY id DESC");
		}
	}

	function eliminar($id){
		if($this->con->conectar()==true){
			return mysql_query("DELETE FROM multi WHERE id=".$id);
		}
	}
}
?>