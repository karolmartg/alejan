<?php
    $destino = "karolmartgamb@hotmail.com";  //correo al que se envía
    
    // se reciben/asignan los datos a las variables
    $nombre = $_POST["nombre"];  
    $correo = $_POST["correo"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];

    // se concatenan todos los datos que se reciben
    $contenido = "Nombre: " . $nombre . "\nCorreo:" . $correo . "\nAsunto: " . $asunto . "\nMensaje: " . $mensaje;

    // enviar el mensaje
    mail($destino, $contenido);
    header("Location:index.html");
?>