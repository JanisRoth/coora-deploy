<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "loan.delessert@coora.com";
    $subject = "Kontaktformular Nachricht";

    $vorname = htmlspecialchars($_POST['vorname']);
    $nachname = htmlspecialchars($_POST['nachname']);
    $email = htmlspecialchars($_POST['email']);
    $telefon = htmlspecialchars($_POST['telefon']);
    $anliegen = htmlspecialchars($_POST['anliegen']);

    $message = "Vorname: $vorname\n";
    $message .= "Nachname: $nachname\n";
    $message .= "E-Mail: $email\n";
    $message .= "Telefonnummer: $telefon\n";
    $message .= "Anliegen:\n$anliegen";

    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Nachricht erfolgreich gesendet.";
    } else {
        echo "Nachricht konnte nicht gesendet werden.";
    }
}
?>
