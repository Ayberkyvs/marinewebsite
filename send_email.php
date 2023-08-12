<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Girilen verilerin boş olup olmadığını kontrol et
    if (empty($name) || empty($email) || empty($message)) {
        $titleMessage = "Please fill out all fields.";
        $outputTitle = "An error occurred while sending the email.";
        $outputText = "The form requires completion of all fields to proceed. Kindly provide the necessary information in each section to ensure a successful submission. Your attention to these details helps us better understand your needs and respond effectively.";
        $isSuccess = "red";
    } else {
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
           $titleMessage = "Sent successfully!";
           $outputTitle = "Your Mail Sent Successfully!";
           $outputText = "The email you sent using our website's contact form has been successfully received and is now on its way to the recipient. While representing an important step for you, we would like to emphasize that the process has been completed successfully.";
            $isSuccess = "#00c137";
        } else {
            $titleMessage = "An error occurred.";
            $outputTitle = "An error occurred while sending the email.";
            $outputText = "The email you attempted to send using our website's contact form could not be delivered at this time. We apologize for any inconvenience this may have caused. Please ensure that all required fields are properly filled out and try again. If the issue persists, feel free to reach out to our support team for further assistance. Thank you for your understanding.";
            $isSuccess = "red";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title><?php echo $titleMessage; ?></title>
</head>
<style>
    body {
        width: 100%;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgb(240, 240, 240);
        background-image: url("img/logo.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 50%;
    }

    .container {
        width: 100% !important;
        height: 100% !important;
    }

    .mail-seccess {
        text-align: center;
        background: transparent;
    }

    .mail-seccess .success-inner {
        display: inline-block;
    }

    .mail-seccess .success-inner h1 {
        font-size: 100px;
        text-shadow: 3px 5px 2px #3333;
        color: <?php echo $isSuccess; ?>;
        font-weight: 700;
    }

    .mail-seccess .success-inner h1 span {
        display: block;
        font-size: 25px;
        color: #333;
        font-weight: 600;
        text-shadow: none;
        margin-top: 20px;
    }

    .mail-seccess .success-inner p {
        padding: 20px 15px;
    }

    .mail-seccess .success-inner .btn {
        color: #fff;
    }
</style>

<body>
    <section class="mail-seccess section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 col-12">
                    <!-- Error Inner -->
                    <div class="success-inner">
                        <h1><i class="fa fa-envelope"></i><span><?php echo $outputTitle; ?></span></h1>
                        <p><?php echo $outputText ?></p>
                        <h6>developed by <a href="ayberkyavas.com" target="_blank">YAVAS</a></h6>
                    </div>
                    <!--/ End Error Inner -->
                </div>
            </div>
        </div>
    </section>
</body>

</html>