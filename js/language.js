const languageSelector = document.querySelector(".languageSelector");
const languageSelectorMobile = document.querySelector(
  ".languageSelectorMobile"
);
const langTr = document.querySelectorAll(".langTr");
const langEn = document.querySelectorAll(".langEn");
const bannerSloganEn = document.querySelector(".banner-slogan-en");
const bannerSloganTr = document.querySelector(".banner-slogan-tr");

run();

function run() {
  window.addEventListener(
    "DOMContentLoaded",
    Localization(checkLocalStorage())
  );
  languageSelector.addEventListener("click", getLang);
  languageSelectorMobile.addEventListener("click", getLang);
}

async function Localization(language) {
  const response = await fetch(`../lang/${language}.json`);
  const data = await response.json();
  Object.keys(data).forEach((key) => {
    if (document.querySelector(`[data-language="${key}"]`)) {
      document.querySelector(`[data-language="${key}"]`).innerHTML = data[key];
    }
  });
}

function getLang(e) {
  const language = e.target.dataset.use;
  Localization(language);
  setToLocalStorage(language);
  setBannerSlogan(language);
}

function checkLocalStorage() {
  const lang = localStorage.getItem("lang");
  console.log(lang);
  if (lang === null) {
    setToLocalStorage("tr");
    return "tr";
  } else {
    setToLocalStorage(lang);
    setBannerSlogan(lang);
    setLangToProducts(lang);
    return lang;
  }
}
function setBannerSlogan(lang) {
  if (lang === "en") {
    bannerSloganEn.style.display = "flex";
    bannerSloganTr.style.display = "none";
  } else {
    bannerSloganEn.style.display = "none";
    bannerSloganTr.style.display = "flex";
  }
}
function setToLocalStorage(language) {
  localStorage.setItem("lang", `${language}`);
  setToUI(language);
}
function setToUI(language) {
  console.log("settoUI", language);
  if (language === "en") {
    for (const x of langEn) {
      x.classList.add("selected");
    }
    for (const x of langTr) {
      x.classList.remove("selected");
    }
  } else {
    for (const x of langEn) {
      x.classList.remove("selected");
    }
    for (const x of langTr) {
      x.classList.add("selected");
    }
  }
}
function setLangToProducts(lang) {
  // const cardTitleEn = document.querySelectorAll(".card-title-en");
  // const cardTextEn = document.querySelectorAll(".card-text-en");
  // const cardTitle = document.querySelectorAll(".card-title");
  // const cardText = document.querySelectorAll(".card-text");
  // if (lang === "tr") {
  //   cardTitleEn.forEach((x) => (x.style.display = "none"));
  //   cardTextEn.forEach((x) => (x.style.display = "none"));
  //   cardTitle.forEach((x) => (x.style.display = "flex"));
  //   cardText.forEach((x) => (x.style.display = "flex"));
  // }
  // if (lang === "en") {
  //   cardTitle.forEach((x) => (x.style.display = "none"));
  //   cardText.forEach((x) => (x.style.display = "none"));
  //   cardTitleEn.forEach((x) => (x.style.display = "flex"));
  //   cardTextEn.forEach((x) => (x.style.display = "flex"));
  // }
}

//* Kullanıcının dil tercihini Local Storage de kaydet sayfa yenilendiğinde otomatik gelsin.
//* Seçili dilin yazısı kendi bayrağı renginde hatta bgimage alabilir ClassListTen cart curt yap iste
