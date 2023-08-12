<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "ayberk.yavas@pinyin-marine.com"; // Alıcı e-posta adresi
    $subject = "Form Submission from $name"; // E-posta konusu
    $headers = "From: $email";

    $full_message = "Name: $name\nEmail: $email\n\n$message";

    // E-postayı gönder
    if (mail($to, $subject, $full_message, $headers)) {
        echo "E-posta gönderildi!";
    } else {
        echo "E-posta gönderilemedi.";
    }
}
?>
