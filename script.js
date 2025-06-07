function activeLink(tabName) {
  let tabLinks = document.getElementsByClassName("tab-link");
  let skillContents = document.getElementsByClassName("skill-content");

  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (let skillContent of skillContents) {
    skillContent.classList.remove("active-skill-content");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-skill-content");
}

let fa_moon = document.getElementsByClassName("fa-moon");
let fa_stroke = document.getElementsByClassName("fa-circle-half-stroke");

function darkMode(darkmode) {
  let body = document.getElementsByTagName("body");
  body[0].style.backgroundColor = "black";
  body[0].style.color = "gray";
  fa_moon[0].classList.add("showMode");
  fa_stroke[0].classList.remove("showMode");
}

function lightMode(lightmode) {
  let body = document.getElementsByTagName("body");
  body[0].style.backgroundColor = "white";
  body[0].style.color = "black";
  fa_moon[0].classList.remove("showMode");
  fa_stroke[0].classList.add("showMode");
}
