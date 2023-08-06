axios
  .get("../php/connect.php") // PHP dosyanızın yolunu doğru şekilde belirtin
  .then(function (response) {
    // Başarılı olduğunda çalışacak fonksiyon
    // JSON verilerini işleme
    var jsonData = JSON.stringify(response.data); // Gelen JSON verilerini string'e çevirme
    console.log(jsonData); // Verileri sayfada gösterme
  })
  .catch(function (error) {
    // Hata durumunda çalışacak fonksiyon
    console.log("Hata: ", error);
  });
