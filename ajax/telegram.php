<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$token = "5257455854:AAENM5A4VLACUtvxcOCGyWiWHDtx7ooMXgQ";
$chat_id = "-734345304";
$arr = array(
  'Номер пользователя: ' => $tel,
  'Имя пользователя: ' => $name
);

foreach ($arr as $key => $value) {
  $txt .= "<b>" . $key . "</b> " . $value . "";
};

$website = "https://api.telegram.org/bot" . $token;
$params = [
  'chat_id' => $chat_id,
  'text' => $txt,
];
$ch = curl_init($website . '/sendMessage');
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, ($params));
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$result = curl_exec($ch);
curl_close($ch);
echo $result;
