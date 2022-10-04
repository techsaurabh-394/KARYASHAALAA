<?php
if (isset($_POST['submit'])) {
    if (isset($_POST['fullname']) && isset($_POST['email']) &&
        isset($_POST['username']) && isset($_POST['phonenumber']) &&
        isset($_POST['college']) && isset($_POST['course'])&& isset($_POST['interest'])&& isset($_POST['password'])) {
        
        $username = $_POST['fullanme'];
        $password = $_POST['email'];
        $gender = $_POST['username'];
        $email = $_POST['phonenumber'];
        $phoneCode = $_POST['college'];
        $phone = $_POST['course'];
        $phone = $_POST['interest'];
        $phone = $_POST['password'];

        $host = "localhost";
        $dbUsername = "root";
        $dbPassword = "";
        $dbName = "test";

        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

        if ($conn->connect_error) {
            die('Could not connect to the database.');
        }
        else {
            $Select = "SELECT email FROM register WHERE email = ? LIMIT 1";
            $Insert = "INSERT INTO register(fullname, email, username, phonenumber, college, course,interest,password) values(?, ?, ?, ?, ?, ?,?,?)";

            $stmt = $conn->prepare($Select);
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->bind_result($resultEmail);
            $stmt->store_result();
            $stmt->fetch();
            $rnum = $stmt->num_rows;

            if ($rnum == 0) {
                $stmt->close();

                $stmt = $conn->prepare($Insert);
                $stmt->bind_param("sssissss",$fullname, $email, $username, $phonenumber, $college, $course,$interst,$password);
                if ($stmt->execute()) {
                    echo "New record inserted sucessfully.";
                }
                else {
                    echo $stmt->error;
                }
            }
            else {
                echo "Someone already registers using this email.";
            }
            $stmt->close();
            $conn->close();
        }
    }
    else {
        echo "All field are required.";
        die();
    }
}
else {
    echo "You have succesfully Registered";
}
?>