<?php

$servername = "localhost";
$username = "pearboy_kdjgo";
$password = "bacon";

// Create connection
$conn = new mysqli($servername, $username, $password, "pearboy_kdjgodb");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>