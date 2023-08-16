const langTrBtn = document.querySelector(".langTr");
const langEnBtn = document.querySelector(".langEn");
// const elementToDelete = document.querySelectorAll(".carousel-item");

Loaded();

function Loaded() {
  document.addEventListener("DOMContentLoaded", veriCek);
  langTrBtn.addEventListener("click", languageHandleChange);
  langEnBtn.addEventListener("click", languageHandleChange);
}
function languageHandleChange() {
  window.location.reload();
}
async function veriCek() {
  try {
    const response = await fetch("/products/data.json");
    const data = await response.json();
    categorizeData(data);
  } catch (error) {
    console.error("Veri çekme hatası:", error);
  }
}
const LightList = [];
const ConnectorList = [];
const LifeSavingList = [];
const SparePartsList = [];

function categorizeData(data) {
  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].category === "Navigation & Signal Lights") {
        LightList.push(data[i]);
      }
      if (data[i].category === "Connector") {
        ConnectorList.push(data[i]);
      }
      if (data[i].category === "Life Saving") {
        LifeSavingList.push(data[i]);
      }
      if (data[i].category === "Spare Parts") {
        SparePartsList.push(data[i]);
      }
    }
    addToUI(LightList, 0);
    addToUI(ConnectorList, 1);
    addToUI(LifeSavingList, 2);
    addToUI(SparePartsList, 3);
  } else {
    console.log("Veri Yok");
  }
}

function addToUI(data, index) {
  if (data.length > 0) {
    const carouselInner = document.querySelectorAll(".carousel-inner")[index];

    let activeCarouselItem = true;

    for (let i = 0; i < data.length; i += 5) {
      const carouselItem = document.createElement("div");
      carouselItem.className =
        "carousel-item" + (activeCarouselItem ? " active" : "");
      const cardsWrapper = document.createElement("div");
      cardsWrapper.className = "cards-wrapper";
      carouselItem.appendChild(cardsWrapper);
      carouselInner.appendChild(carouselItem);

      for (let j = i; j < i + 5 && j < data.length; j++) {
        const card = createCard(
          data[j].title,
          data[j].titleEn,
          data[j].image,
          data[j].description,
          data[j].descriptionEn,
          j === i
        );
        cardsWrapper.appendChild(card);
      }

      activeCarouselItem = false;
    }
  } else {
    const carouselInner = document.querySelectorAll(".carousel-inner")[index];
    const errorMessage = document.createElement("div");
    errorMessage.className = "alert alert-danger alert-center";
    errorMessage.role = "alert";
    errorMessage.innerHTML = `Veri Bulunamadı !`;
    carouselInner.appendChild(errorMessage);
  }
}

function createCard(
  title,
  titleEn,
  image,
  description,
  descriptionEn,
  isFirstCard
) {
  const lang = checkLocalStorage();
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const img = document.createElement("img");
  const cardTitle = document.createElement("h5");
  const cardText = document.createElement("p");
  card.className = "card";
  if (!isFirstCard) {
    card.classList.add("d-none", "d-xl-block");
  }
  cardBody.className = "card-body";
  img.className = "card-img-top";
  cardTitle.className = "card-title";
  cardText.className = "card-text";
  img.src = image;
  if (lang === "tr") {
    cardTitle.innerHTML = title;
    cardText.innerHTML = description;
  } else {
    cardTitle.innerHTML = titleEn;
    cardText.innerHTML = descriptionEn;
  }
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  card.appendChild(img);
  card.appendChild(cardBody);
  return card;
}
function checkLocalStorage() {
  return localStorage.getItem("lang");
}

//? DİL DEĞİŞTİRİLDİĞİ ZAMAN ÜRÜNLERİN DİLİ SAYFAYI YENİLEMEDEN DEĞİŞMİYOR.
