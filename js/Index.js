// Thos file is used to set up the Dark and the Light mode

const lightMode = document.querySelector(".moon");
const darkMode = document.querySelector(".sun");
let select = document.querySelector("select");
console.log(select);

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

lightMode.addEventListener("click", function () {
  document.documentElement.setAttribute("data-theme", "dark");
  lightMode.style = "display: none";
  darkMode.style = "display: block";
  localStorage.setItem("theme", "dark");
  // document.querySelector("svg").style.fill = "#ffb100";
  // select.style.color = "#ececec";
  // select.style.border = "2px solid #ececec";
});

darkMode.addEventListener("click", function () {
  document.documentElement.setAttribute("data-theme", "light");
  lightMode.style = "display: block";
  darkMode.style = "display: none";
  localStorage.setItem("theme", "light");
  // document.querySelector("svg").style.fill = "#1b1e24";
  // select.style.color = "#1b1e24";
  // select.style.border = "2px solid #1b1e24";
});

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    lightMode.style = "display: none";
    darkMode.style = "display: block";
    // document.querySelector("svg").style.fill = "#ffb100";
    // select.style.color = "#ececec";
    // select.style.border = "2px solid #ececec";
  }
  if (currentTheme === "light") {
    darkMode.style = "display: none";
    lightMode.style = "display: block";
    // document.querySelector("svg").style.fill = "#1b1e24";
    // select.style.color = "#1b1e24";
    // select.style.border = "2px solid #1b1e24";
  }
}

var rotate = false;
var runner;
var degrees = 0;

darkMode.addEventListener("mouseover", function () {
  runner = setInterval(function () {
    degrees = degrees + 10;
    darkMode.style.webkitTransform = "rotate(" + degrees + "deg)";
  }, 50);
});

darkMode.addEventListener("mouseout", function () {
  clearInterval(runner);
});

lightMode.addEventListener("mouseover", function () {
  runner = setInterval(function () {
    degrees = degrees + 10;
    lightMode.style.webkitTransform = "rotate(" + degrees + "deg)";
  }, 50);
});

lightMode.addEventListener("mouseout", function () {
  clearInterval(runner);
});
