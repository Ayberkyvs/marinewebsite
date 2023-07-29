const languageSelector = document.querySelector(".languageSelector");

run();

function run() {
  window.addEventListener("DOMContentLoaded", Localization("tr"));
  languageSelector.addEventListener("click", getLang);
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
}

//? Kullanıcının dil tercihini Local Storage de kaydet sayfa yenilendiğinde otomatik gelsin.

//? Seçili dilin yazısı kendi bayrağı renginde hatta bgimage alabilir ClassListTen cart curt yap iste
