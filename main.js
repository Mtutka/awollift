const burger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("show");
  burger.classList.toggle("is-active");
});

let prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", () => {
  let width = window.innerWidth;
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos && width >= 1024) {
    document.querySelector("nav").style.top = "0";
  } else if (width >= 1024) {
    document.querySelector("nav").style.top = "-7vh";
  }
  prevScrollpos = currentScrollPos;
});
