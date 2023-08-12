<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "ayberk.yavas@pinyin-marine.com";
    $subject = "Website Form Submission from $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $email_content = "
    <html>
    <head>
        <title>Website Form Submission</title>
    </head>
    <body>
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Message:</strong><br>$message</p>
    </body>
    </html>
    ";

    // E-postayı gönder
    if (mail($to, $subject, $email_content, $headers)) {
        echo "E-posta başarıyla gönderildi!";
    } else {
        echo "E-posta gönderilirken bir hata oluştu.";
    }
}
?>
