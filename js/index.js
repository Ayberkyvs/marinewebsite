const mainLogo = document.querySelector(".mainLogo");
const itemlinks = document.querySelectorAll(".menu-item-link");
const header = document.querySelector(".header");
const text = document.querySelector(".banner-slogan");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuLine = document.querySelectorAll(".hamburger-line");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll('a[href^="#"]');
run();
// Menü bağlantılarına tıklandığında yavaşça kayarak gitme

function run() {
  document.addEventListener("scroll", handleScroll);
  document.addEventListener("DOMContentLoaded", contentLoaded);
  hamburgerMenu.addEventListener("click", toggleMenu);
  jQuery(document).ready(menuLinksScrollHandler);
  window.onscroll = function () {
    scrollFunction();
  };
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
  removeLoader();
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
    // document.body.style.overflow = "hidden";
    hamburgerMenuLine.forEach((x) => {
      x.classList.add("hamburger-line-white");
    });

    setTimeout(() => menu.classList.add("showw"), 10);
  } else {
    // document.body.style.overflow = "auto";
    hamburgerMenuLine.forEach((x) => {
      x.classList.remove("hamburger-line-white");
    });
    menu.classList.remove("showw");
  }
}

function menuLinksScrollHandler($) {
  function scrollToSection(event) {
    if (isOpen) {
      toggleMenu();
    }
    event.preventDefault();
    var $section = $($(this).attr("href"));
    $("html, body").animate(
      {
        scrollTop: $section.offset().top - 60,
      },
      500
    );
  }
  $("[data-scroll]").on("click", scrollToSection);
}

function removeLoader() {
  // const loader = document.querySelector(".loader");
  // loader.style.display = "none";
  document.body.style.overflow = "hidden";
  var loader = document.querySelector(".loader");

  function hideLoader() {
    loader.classList.add("hidden");
  }

  // Sayfa yüklendikten 2 saniye sonra loader'ı gizle ve sayfayı kapat
  setTimeout(function () {
    hideLoader();
    document.body.style.overflow = "visible";
  }, 1000);

  // Sayfa yenilendiğinde loader'ı tekrar göster
  window.addEventListener("beforeunload", function () {
    loader.classList.remove("hidden");
  });

  var initialSize = 150;
  var targetSize = 1000;
  var duration = 10;

  var startTime = 980;

  function animateBackgroundSize(timestamp) {
    if (!startTime) startTime = timestamp;

    var progress = timestamp - startTime;
    var newSize =
      initialSize + (progress / duration) * (targetSize - initialSize);

    loader.style.backgroundSize = newSize + "px";

    if (progress < duration) {
      requestAnimationFrame(animateBackgroundSize);
    }
  }

  requestAnimationFrame(animateBackgroundSize);
}

function scrollFunction() {
  var scrollTopButton = document.getElementById("scrollTopButton");

  if (
    document.body.scrollTop > 1500 ||
    document.documentElement.scrollTop > 1500
  ) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Diğer tarayıcılar
}
