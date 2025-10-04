<!-- <nav class="navbar navbar-expand-lg bg-body-tertiary pt-3">
  <div class="container-fluid">

    <h1><a class="navbar-brand" href="index.php">Tech Coffee Break</a></h1>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="welcome.php">Home</a>
        </li>
</ul>
    <form class="d-flex" >
        <a class="btn btn-outline-success mx-2" type="submit" href="signup.php">Signup</a>
        <a class="btn btn-outline-primary mx-2" type="submit" href="login.php">Login</a>
        <a class="btn btn-outline-danger mx-2" type="submit" href="logout.php">Logout</a>
    </form>
    

  </div>
</nav> -->

<?php
// Start the session only if it hasn't been started yet
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
?>

<nav class="navbar navbar-expand-lg bg-body-tertiary pt-3">
  <div class="container-fluid">
    <h1><a class="navbar-brand" href="index.php">Tech Coffee Break</a></h1>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="welcome.php">Home</a>
        </li>
    </ul>

    <form class="d-flex">
      <?php 
      // Check if the user is logged in
      if (isset($_SESSION['username'])) {
        // Show only the Logout button
        echo '<a class="btn btn-outline-danger mx-2" href="logout.php">Logout</a>';
      } else {
        // Show Signup and Login buttons if the user is not logged in
        echo '
          <a class="btn btn-outline-success mx-2" href="signup.php">Signup</a>
          <a class="btn btn-outline-primary mx-2" href="login.php">Login</a>
        ';
      }
      ?>
    </form>
  </div>
</nav>
