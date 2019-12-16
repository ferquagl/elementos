<?php
session_start();
require_once 'classes/gen.php';

/* CHEQUEO DE PHP DESDE AJAX
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
*/

$_SESSION["nombre"]="";
$_SESSION["email"]="";
$_SESSION["consulta"]="";

$_SESSION["nombre"]=$_POST["nombre"];
$_SESSION["email"]=$_POST["email"];
$_SESSION["consulta"]=$_POST["consulta"];

/*
//Valido inputs para evitar spam
ValidarDatos($_SESSION["nombre"]);
ValidarDatos($_SESSION["email"]);
ValidarDatos($_SESSION["consulta"]);
*/   


		


     
   if(isset($_POST['token']) ){ 
    if (!empty($_POST['token'])){

if(Token::check($_POST['token'])){            
$destino= 'info@elesteco.com.ar (mailto:info@elesteco.com.ar)  ';
$headers = 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From:  Sitio Elementos <'.$_SESSION["email"].'>' . "\r\n";      
//  $headers .= "Bcc: rubenmontiel@gmail.com\r\n";
//  $headers .= "Bcc:  pablo.fuentes@havasmedia.com \r\n";
$mensaje="Nuevo contacto de:"."<br>";
$mensaje.= "\nNombre: ". utf8_decode($_SESSION["nombre"])."<br>";
$mensaje.= "\nEmail: ". utf8_decode($_SESSION["email"])."<br>";
$mensaje.= "\nConsulta: ".utf8_decode($_SESSION["consulta"])."<br>";
                         
$asunto = "Consulta desde el sitio Elementos";

mail($destino,$asunto,$mensaje,$headers);

echo "ok";
die();
}
}
} 
else
{

echo "no";
die();	
}
/*
try{
	mail($destino,$asunto,$mensaje,$headers);

}
catch(Exception $e){
	header('HTTP/1.1 500 Internal Server Booboo');
        header('Content-Type: application/json; charset=UTF-8');
        die(json_encode(array('message' => 'ERROR', 'code' => 1337)));
}

           
          
function ValidarDatos($campo){
//Array con las posibles cabeceras a 0utilizar por un spammer
$badHeads = array("Content-Type:",
"MIME-Version:",
"Content-Transfer-Encoding:",
"Return-path:",
"Subject:",
"From:",
"Envelope-to:",
"To:",
"bcc:",
"cc:");
//Comprobamos que entre los datos no se encuentre alguna de
//las cadenas del array. Si se encuentra alguna cadena se
//dirige a una p&aacute;gina de Forbidden
foreach($badHeads as $valor){
if(strpos(strtolower($campo), strtolower($valor)) !== false){
header( "HTTP/1.0 403 Forbidden");
exit;
}
}
}*/          
           
?>
