<?php
    // Create connection
    $conn = new mysqli("localhost", "root", "", "app_triangulos");
    // Check connection
    if ($conn -> connect_errno) {
        printf("Falló la conexión: %s \n", $conn -> connect_error);
        exit();
    }
?>