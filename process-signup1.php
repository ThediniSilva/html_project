<?php
/*Validation of my details*/
if (empty($_POST["fname"])) {
    die("Name is required");
}
if (empty($_POST["lname"])) {
    die("Name is required");
}
if (! filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    die("Valid email is required");
}
if (empty($_POST["username"])) {
    die("Username is required");
}
if (strlen($_POST["username"]) < 6) {
    die("Username must be at least 6 characters");
}

if (!preg_match("/^[a-zA-Z0-9_]+$/", $_POST["username"])) {
    die("Username can only contain letters, numbers, and underscores");
}

if (strlen($_POST["password"]) < 8) {
    die("Password must be at least 8 characters");
}

if ( ! preg_match("/[a-z]/i", $_POST["password"])) {
    die("Password must contain at least one letter");
}

if ( ! preg_match("/[0-9]/", $_POST["password"])) {
    die("Password must contain at least one number");
}
/*Validation of my details*/
$mysqli = require __DIR__ . "/database.php";    //database file connected

$sql = "INSERT INTO user (FirstName, LastName, Email, Username, Password)
        VALUES (?, ?, ?, ?, ?)";

$stmt = $mysqli->stmt_init();

if ( ! $stmt->prepare($sql)) {
    die("SQL error: " . $mysqli->error);
} 

$stmt->bind_param("sssss",
                  $_POST["fname"],
				  $_POST["lname"],
                  $_POST["email"],
				  $_POST["username"],
				  $_POST["password"]);
                  
if($stmt->execute()){
echo "Signup sucessfully";  
} 
else {
    
    if ($mysqli->errno === 1062) {
        die("email already taken");
    } else {
        die($mysqli->error . " " . $mysqli->errno);
    }
}
