<?php
session_start(); // Start the session

// Redirect to welcome page if already logged in
if (isset($_SESSION['username'])) {
    header("Location: welcome.php");
    exit();
}

$login = false;
include('connection.php');

if (isset($_POST['submit'])) {
    $username = $_POST['user'];
    $password = $_POST['pass'];

    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ? OR email = ?");
    $stmt->bind_param("ss", $username, $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    if ($row) {
        // Verify the password
        if (password_verify($password, $row["password"])) {
            $login = true;

            // Set session variables
            $_SESSION['username'] = $row['username'];
            $_SESSION['user_id'] = $row['id'];
            $_SESSION['loggedin'] = true;

            // Fetch cart items for the user
            $stmt = $conn->prepare("SELECT * FROM cart WHERE user_id = ?");
            $stmt->bind_param("i", $_SESSION['user_id']);
            $stmt->execute();
            $cartResult = $stmt->get_result();

            $cart = [];
            while ($item = $cartResult->fetch_assoc()) {
                $cart[] = [
                    'productName' => $item['product_name'],
                    'price' => $item['price'],
                    'quantity' => $item['quantity']
                ];
            }
            // Store the cart in the session
            $_SESSION['cart'] = $cart;

            // Redirect to welcome page
            header("Location: welcome.php");
            exit();
        }
    }

    // If login fails
    echo '<script>
            alert("Login failed. Invalid username or password!!");
            window.location.href = "login.php";
          </script>';
}
?>

<?php 
include("connection.php");
include("navbar.php");
?>

<html>
<head>
    <title>Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <br><br>
    <div id="form">
        <h1 id="heading">Login Form</h1>
        <form name="form" action="login.php" method="POST" onsubmit="return isvalid()" required>
            <label>Enter Username/Email: </label>
            <input type="text" id="user" name="user" required></br></br>
            <label>Password: </label>
            <input type="password" id="pass" name="pass" required></br></br>
            <input type="submit" id="btn" value="Login" name="submit"/>
        </form>
    </div>
    
    <script>
        function isvalid() {
            var user = document.form.user.value;
            if (user.length == "") {
                alert("Enter username or email id!");
                return false;
            }
            return true; // Allow form submission if valid
        }
    </script>
</body>
</html>
