veriCek();
async function veriCek() {
  try {
    const response = await fetch("/products/data.json");
    const data = await response.json();

    // JSON verilerini işleme
    // Örneğin, verileri ekrana yazdırma:
    addToUI(data);
  } catch (error) {
    console.error("Veri çekme hatası:", error);
  }
}

const LightList = [];
function addToUI(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "light") {
      LightList.push(data[i]);
    }
  }
  addToLightSection(LightList);
}
function addToLightSection(data) {
  const image = document.querySelectorAll(".light-image");
  const title = document.querySelectorAll(".light-title");
  const text = document.querySelectorAll(".light-text");
  for (let i = 0; i < data.length; i++) {
    title[i].innerHTML = data[i].title;
    image[i].src = data[i].image;
    text[i].innerHTML = data[i].description;
  }
}
