<?php
include("connection.php");

// Read the incoming JSON data from the POST request
$inputData = file_get_contents('php://input');
if (!$inputData) {
    echo json_encode(["message" => "No input data received"]);
    exit;
}

$cartItems = json_decode($inputData, true); // Convert JSON to PHP array
if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode(["message" => "Invalid JSON: " . json_last_error_msg()]);
    exit;
}

if (!is_array($cartItems)) {
    echo json_encode(["message" => "Data must be an array of cart items"]);
    exit;
}

// Loop through each cart item and insert into the database
foreach ($cartItems as $item) {
    $product_name = mysqli_real_escape_string($conn, $item['product_name']);
    $price = mysqli_real_escape_string($conn, $item['price']);
    $quantity = mysqli_real_escape_string($conn, $item['quantity']);

    // Insert the cart item into the database
    $sql = "INSERT INTO cart (product_name, price, quantity) 
            VALUES ('$product_name', '$price', '$quantity')";

    if (mysqli_query($conn, $sql)) {
        // Successfully inserted
        echo json_encode(["message" => "Data inserted successfully"]);
    } else {
        // Error occurred
        echo json_encode(["message" => "Error: " . mysqli_error($conn)]);
    }
}

// Close the connection
mysqli_close($conn);
?>

