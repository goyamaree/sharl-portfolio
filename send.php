<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/vendor/autoload.php';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';
    $mail->Port = 587;
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // tls
    $mail->Username = 'mail_1@pbodavaodelsur.com';
    $mail->Password = 'It'; 
    $mail->setFrom('mail_1@pbodavaodelsur.com', 'SMTP Demo');
    $mail->addAddress('roilokai5@gmail.com');
    $mail->isHTML(true);
    $mail->Subject = 'Website Contact Form Submission';
    $mail->Body = '<p>Name: ' . $name . '</p><p>Email: ' . $email . '</p><p>Message: ' . $message . '</p>';
    $mail->AltBody = 'Sent with PHPMailer.';

    if ($mail->send()) {
        header('Location: email_sent.php');
        exit();
    } else {
        echo 'Email Not Sent';
    }
} catch (Exception $e) {
    echo 'Failed: ' . $mail->ErrorInfo;
}
