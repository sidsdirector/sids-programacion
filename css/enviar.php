<?php
//if(isset($_POST['email'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias ""


$nombre = $_POST["nombre"];
$telefono = $_POST["telefono"];
$email = $_POST["correo"];
$mensaje = $_POST["mensaje"];

$destino= "directorcomercial@sids.com.co,desarrolladorlider@sids.com.co";
$contenido= "Nombre: " . $nombre . "\nTelefono: " . $telefono . "\nCorreo: " . $email . "\nMensaje: " . $mensaje;
$headers = "From: remitente@sids.com.co" . "\r\n" .
			"Reply-To: remitentesids.com.co" . "\r\n" . 
			"X-Mailer: PHP/" . phpversion();
if(mail($destino,"Contacto desde la pagina web", $contenido,$headers)){
?>

<center><label>señor: <?php echo $nombre; ?> sus datos han sido enviados con exito</label></center>

<?php 
}else{
	echo "error al enviar el mensaje";
}
?>