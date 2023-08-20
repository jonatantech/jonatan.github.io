var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

/* Back-to-top button */

var button = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {
  var scrollY = window.scrollY;
  var pageHeight = document.documentElement.scrollHeight;

  if (scrollY > pageHeight * 0.75) {
    button.style.opacity = 1;
  } else {
    button.style.opacity = 0;
  }
});
