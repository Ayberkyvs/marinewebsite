async function veriCek() {
  try {
    const response = await fetch("/products/data.json");
    const data = await response.json();

    // JSON verilerini işleme
    // Örneğin, verileri ekrana yazdırma:
    console.log("asdasdad");
    console.log(data);
  } catch (error) {
    console.error("Veri çekme hatası:", error);
  }
}
veriCek();
