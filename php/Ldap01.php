<?php
$ds= ldap_connect("ldap.uda.ad",389); // debe ser un servidorLDAP
// Si la conexi�n es exitosa hacer una autenticaci�n
if ($ds) {
// Registr�ndonos como anonymous
$r = ldap_bind($ds,"mail=ipereira@uda.ad","");
echo "Resultado del bind(): ".$r."<p>";
/* Una vez validados, realizamos un b�squeda en el LDAP. Buscamos los usuarios con uid= dsanchezy retornaremos su email */
$sr= ldap_search($ds,"dc=ua,dc=ad", "objectClass=person");
/* Contamos el n�mero de entradas retornado por la b�squeda*/
echo "Numero de entradas retornadas: ".ldap_count_entries($ds,$sr)."<p>";
//Obtenemos las entradas retornadas
$info = ldap_get_entries($ds, $sr);
echo "Valor para: ".$info["count"]." itemes retornados:<p>";
for ($i=4; $i<$info["count"]; $i++) {
echo "Entrada email: ". $info[$i]["mail"][0] ."<p>";
}
//Cerramos la conexi�n con el LDAP
ldap_close($ds);
} else {
echo "<h4>No se puede conectar al servidorLDAP</h4>";
} ?>