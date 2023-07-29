// whF1diR5mvREaoZcjNRy3hxCX5sZZDZ6X2xphUEDl5qdiD8bjJiwx7AC;
const bannerImage = document.querySelector(".banner-image");

let photos = [];

// run();

function run() {
  document.addEventListener("DOMContentLoaded", getRandomPhoto);
}
async function getRandomPhoto() {
  const response = await fetch(`https://api.pexels.com/v1/search?query=ship`, {
    method: "GET",
    headers: {
      Authorization: `whF1diR5mvREaoZcjNRy3hxCX5sZZDZ6X2xphUEDl5qdiD8bjJiwx7AC`,
    },
  });
  const data = await response.json();
  photos = data.photos;
  randomNumber(photos);
}
function randomNumber(photos) {
  const i = Math.floor(Math.random() * photos.length);
  addToPhotos(photos[i].src.landscape);
  console.log(photos[i]);
}
function addToPhotos(photo) {
  bannerImage.src = `${photo}`;
}
