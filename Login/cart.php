<?php
// Include the database connection file
include("connection.php");  // Make sure this file has your DB connection setup

// Manually set the values you want to insert
$user_id = 5; // Example User ID
$product_name = "Butter"; // Example Product Name
$price = 45000; // Example Price
$quantity = 2; // Example Quantity

// Insert query to insert the manual data into the 'cart' table
$sql = "INSERT INTO cart (user_id, product_name, price, quantity) 
        VALUES ('$user_id', '$product_name', '$price', '$quantity')";

// Execute the query
if (mysqli_query($conn, $sql)) {
    echo "Data inserted successfully!";
} else {
    echo "Error: " . mysqli_error($conn);
}

// Close the connection
// mysqli_close($conn);
?>
