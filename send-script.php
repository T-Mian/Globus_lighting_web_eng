<?php

$mailToSend = "t.mianecki@globuslighting.pl";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $surName=$_POST["surname"];
    $topic=$_POST["topic"];
    $email = $_POST["email"];
    $message = $_POST["message"];

  $errors = [];
	$return = [];

    if (empty($name)) { //jeżeli pusta wartość
        array_push($errors, "name");
    }
  if (empty($surName)) { //jeżeli pusta wartość
        array_push($errors, "surname");
    }
  if (empty($topic)) { //jeżeli pusta wartość
        array_push($errors, "topic");
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { //sprawdzamy czy email ma zły wzór
        array_push($errors, "email");
    }
    if (empty($message)) {
        array_push($errors, "message");
    }

    if (count($errors) > 0) {
        $return["errors"] = $errors;
    } else {
        //każde wysłanie wiadomości musi być poprzedzone ustawieniem nagłówków
        $headers  = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type: text/html; charset=UTF-8". "\r\n";
        $headers .= "From: ".$email."\r\n";
        $headers .= "Reply-to: ".$email;
        $message  = "
            <html>
                <head>
                    <meta charset=\"utf-8\">
                </head>
                <body>
                    <div> 
                    <h2>
                    Imię: $name, 
                    Nazwisko:$surName ,
                    Email: <a href=\"mailto:$email\">$email</a>  
                    </h2>
                    </div>
                    <div><h3>Topic:$topic </h3> </div>
                    <div><h4> Wiadomość:</h4> </div>
                    <div> $message </div>
                </body>
            </html>";

        if (mail($mailToSend, "Wiadomość ze strony - globuslighting(dot)com" . date("d-m-Y"), $message, $headers)) {
            $return["status"] = "ok";
        } else {
            $return["status"] = "error";
        }
    }

    header("Content-Type: application/json");
    echo json_encode($return);
}
?>