const mainLogo = document.querySelector(".mainLogo");
const itemlinks = document.querySelectorAll(".menu-item-link");
const header = document.querySelector(".header");
const text = document.querySelector(".banner-slogan");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuLine = document.querySelectorAll(".hamburger-line");
const menu = document.querySelector(".menu");

run();

function run() {
  document.addEventListener("scroll", handleScroll);
  document.addEventListener("DOMContentLoaded", contentLoaded);
  hamburgerMenu.addEventListener("click", toggleMenu);
}
function handleScroll() {
  if (window.scrollY <= 0) {
    mainLogo.src = "img/bluelogo.svg";
    header.classList.remove("header-2");
  } else {
    mainLogo.src = "img/logo.svg";
    header.classList.add("header-2");
  }
}

function contentLoaded() {
  animateHeader();
  animateTexts();
}
function animateHeader() {
  header.style.height = "80px";
}
function animateTexts() {
  text.style.opacity = 1;
  typeWrite();
}
function typeWrite() {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };
}

let isOpen = false;
let popupVisible = false;
function toggleMenu() {
  hamburgerMenu.classList.toggle("open");
  isOpen = !isOpen;
  const popup = document.getElementById("popup");
  popupVisible = !popupVisible;
  popup.style.display = popupVisible ? "block" : "none";

  if (popupVisible) {
    // Pop-up açıldığında, sayfanın scroll işlemini durdur
    document.body.style.overflow = "hidden";
    hamburgerMenuLine.forEach((x) => {
      x.classList.add("hamburger-line-white");
    });

    setTimeout(() => menu.classList.add("showw"), 10);
  } else {
    // Pop-up kapatıldığında, sayfanın scroll işlemini tekrar etkinleştir
    document.body.style.overflow = "auto";
    hamburgerMenuLine.forEach((x) => {
      x.classList.remove("hamburger-line-white");
    });
    menu.classList.remove("showw");
  }
}
