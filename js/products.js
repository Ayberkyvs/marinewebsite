// AJAX ile verileri PHP'den alıp işleyelim
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var productsData = JSON.parse(this.responseText);
    displayProducts(productsData);
  }
};
const currentDomain = window.location.host;
xmlhttp.open("GET", "https://pinyin-marine.com/php/connect.php", true);
xmlhttp.send();

// Verileri ekrana yazdıralım
function displayProducts(productsData) {
  for (var i = 0; i < productsData.length; i++) {
    var product = productsData[i];
    console.log("Product Name: " + product.product_name + "<br>");
    console.log("Price: " + product.price + "<br>");
  }
}
