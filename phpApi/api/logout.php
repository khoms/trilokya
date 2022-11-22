<?php



if($_SERVER["REQUEST_METHOD"] != "POST"):  
    session_start(); //we need to have the session running in order to destroy it
    session_unset();    // unset all the session variables inside the browser
    session_destroy(); //destroy the session
    header("Location: ../login.php");
    exit();
