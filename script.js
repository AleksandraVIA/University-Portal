"use sctrict";

const navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

const currentYear = new Date().getFullYear();
const footer = document.querySelector(".copyright");
footer.innerHTML = `Copyright © ${currentYear} by <a href="https://github.com/AleksandraVIA"target="_blank">AleksandraVIA</a>. Used for learning purposes only.`;
