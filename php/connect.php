<?php
$host = "154.49.245.1";
$user = "u681468163_admin";
$pass = "Ayberk123";
$db = "u681468163_pinyin";

try {
    // PDO ile veritabanına bağlanma
    $dbh = new PDO("mysql:host=$host;dbname=$db", $user, $pass);

    // Hata modunu ayarlama
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Tablodan verileri almak için bir sorgu yapın
    $sql = "SELECT * FROM products"; // "tablo_adi" yerine işlem yapmak istediğiniz tablonun adını yazın
    $stmt = $dbh->prepare($sql);
    $stmt->execute();

    // Verileri bir dizi olarak alın
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Verileri JSON formatına dönüştürün
    $json_data = json_encode($data);

    // JSON verilerini yazdırın
    echo $json_data;
} catch (PDOException $e) {
    // Hata durumunda hata mesajını yakalayın
    echo "Hata: " . $e->getMessage();
}
?>