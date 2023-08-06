<?php
$servername = "154.49.245.1";
$username = "u681468163_admin";
$password = "Ayberk123";
$database = "u681468163_pinyin";

// Create a connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check the connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

echo "Connected successfully!";
?>
