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
// Query to fetch data from the "products" table
$sql = "SELECT * FROM products";
$result = $conn->query($sql);

// Check if there are any rows returned
if ($result->num_rows > 0) {
    // Initialize an empty array to store the data
    $productsArray = array();

    // Loop through each row and fetch the data
    while ($row = $result->fetch_assoc()) {
        $productsArray[] = $row;
    }

    // Now $productsArray contains all the rows as an array
    print_r($productsArray);
} else {
    echo "No products found!";
}

// Close the connection
$conn->close();
?>
