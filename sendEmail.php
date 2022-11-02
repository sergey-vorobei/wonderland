<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
if (isset($_POST["send"])) {
  $mail = new PHPMailer(true);
  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'antoxawp@gmail.com';
  $mail->Password =  'sukrqzprlgkdnorb';
}
$mail->SMTPSecure = 'ssl';
 $mail->Port = 465;
 $mail->CharSet = 'UTF-8';
$mail->setFrom($_POST["email"]);
$mail->addAddress('antoxawp@gmail.com');
$mail->isHTML(true);
$mail->Subject = 'Нова заявка з сайту wonderland';
$mail->Body = '
    <b>Нова заявка з сайту wonderland</b><br>'
    .$_POST["name"]
    .'<br>'
    .$_POST['email']
    .'<br>'
    .$_POST['message'];

$mail->send();
echo "
 <script>
alert('Ваша заявка успішно відправлена');
window.location.href='index.html'

</script>
"
?>
