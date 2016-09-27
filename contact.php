<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = "From: " . $name . "</br>Email: " . $email . "</br>Message: " . $_POST['message'];
$to = 'amandaderijk@gmail.com';

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$headers .= 'From: ' . $name . ' <email@amandaderijk.com>' . "\r\n";
$headers .= 'Cc: birthdayarchive@amandaderijk.com' . "\r\n";
$headers .= 'Bcc: birthdaycheck@amandaderijk.com' . "\r\n";

mail ($to,$subject,$message,$headers);

require 'index.html';
?>