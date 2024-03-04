let menuBtn = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menuBtn.classList.remove("bx-x");
  navbar.classList.remove("active");
};
