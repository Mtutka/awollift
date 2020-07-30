const burger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const home = document.querySelector(".hero");
const about = document.querySelector(".about");
const services = document.querySelector(".services");
const contact = document.querySelector("footer");
const servImg = document.querySelector(".servicing.image");
const servTxt = document.querySelector(".servicing.text");
const repairImg = document.querySelector(".repairing.image");
const repairTxt = document.querySelector(".repairing.text");
const buildImg = document.querySelector(".building.image");
const buildTxt = document.querySelector(".building.text");
const modImg = document.querySelector(".modernisation.image");
const modTxt = document.querySelector(".modernisation.text");
const homeBtn = document.querySelector(".homeButton");
const aboutBtn = document.querySelector(".aboutButton");
const servicesBtn = document.querySelector(".servicesButton");
const contactBtn = document.querySelector(".footerButton");
const texts = document.getElementsByClassName("text");
let servHeight = 100;
let clicksCountServ = 0;
let clicksCountRepair = 0;
let clicksCountBuild = 0;
let clicksCountMod = 0;

const clear = () => {
  clicksCountRepair = 0;
  clicksCountBuild = 0;
  clicksCountServ = 0;
  clicksCountMod = 0;
  servTxt.classList.remove("txtOn");
  repairTxt.classList.remove("txtOn");
  buildTxt.classList.remove("txtOn");
  modTxt.classList.remove("txtOn");
  services.classList.remove("long");
};

for (i = 0; i < texts.length; i++) {
  texts[i].addEventListener("click", () => {
    if (window.innerWidth < 1025) {
      window.scrollTo(0, services.offsetTop);
    }

    clicksCountRepair = 0;
    clicksCountBuild = 0;
    clicksCountServ = 0;
    clicksCountMod = 0;
    servTxt.classList.remove("txtOn");
    repairTxt.classList.remove("txtOn");
    buildTxt.classList.remove("txtOn");
    modTxt.classList.remove("txtOn");
    services.classList.remove("long");
    servImg.classList.remove("long");
    modImg.classList.remove("long");
    repairImg.classList.remove("long");
    buildImg.classList.remove("long");
  });
}

burger.addEventListener("click", () => {
  nav.classList.toggle("show");
  burger.classList.toggle("is-active");
});

let prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", () => {
  let width = window.innerWidth;
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos && width >= 1024) {
    nav.classList.remove("hidden");
  } else if (width >= 1024) {
    nav.classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
});

servImg.addEventListener("click", () => {
  clicksCountServ = ++clicksCountServ;
  if (clicksCountServ % 2 == 1) {
    services.classList.add("long");
    servImg.classList.add("long");
  } else if (clicksCountServ % 2 == 0) {
    services.classList.remove("long");
    servImg.classList.remove("long");
  }

  clicksCountRepair = 0;
  clicksCountBuild = 0;
  clicksCountMod = 0;
  servTxt.classList.toggle("txtOn");
  repairTxt.classList.remove("txtOn");
  buildTxt.classList.remove("txtOn");
  modTxt.classList.remove("txtOn");
  modImg.classList.remove("long");
  repairImg.classList.remove("long");
  buildImg.classList.remove("long");

  if (window.innerWidth < 1025) {
    window.scrollTo(0, services.offsetTop);
  }
});

repairImg.addEventListener("click", () => {
  clicksCountRepair = ++clicksCountRepair;
  if (clicksCountRepair % 2 == 1) {
    services.classList.add("long");
    repairImg.classList.add("long");

    if (window.innerWidth < 1025) {
      window.scrollTo(0, services.offsetTop + window.innerHeight / 4 + 1);
    }
  } else if (clicksCountRepair % 2 == 0) {
    services.classList.remove("long");
    repairImg.classList.remove("long");

    if (window.innerWidth < 1025) {
      window.scrollTo(0, services.offsetTop);
    }
  }

  clicksCountServ = 0;
  clicksCountBuild = 0;
  clicksCountMod = 0;
  servTxt.classList.remove("txtOn");
  repairTxt.classList.toggle("txtOn");
  buildTxt.classList.remove("txtOn");
  modTxt.classList.remove("txtOn");
  servImg.classList.remove("long");
  modImg.classList.remove("long");
  buildImg.classList.remove("long");
});

buildImg.addEventListener("click", () => {
  clicksCountBuild = ++clicksCountBuild;
  if (clicksCountBuild % 2 == 1) {
    services.classList.add("long");
    buildImg.classList.add("long");
    if (window.innerWidth < 1025) {
      window.scrollTo(0, services.offsetTop + window.innerHeight / 2 + 1);
    }
  } else if (clicksCountBuild % 2 == 0) {
    services.classList.remove("long");
    buildImg.classList.remove("long");
    if (window.innerWidth < 1025) {
      window.scrollTo(0, services.offsetTop);
    }
  }

  clicksCountRepair = 0;
  clicksCountServ = 0;
  clicksCountMod = 0;
  servTxt.classList.remove("txtOn");
  repairTxt.classList.remove("txtOn");
  buildTxt.classList.toggle("txtOn");
  modTxt.classList.remove("txtOn");
  servImg.classList.remove("long");
  modImg.classList.remove("long");
  repairImg.classList.remove("long");
});

modImg.addEventListener("click", () => {
  clicksCountMod = ++clicksCountMod;
  if (clicksCountMod % 2 == 1) {
    services.classList.add("long");
    modImg.classList.add("long");
    if (window.innerWidth < 1025) {
      window.scrollTo(0, services.offsetTop + window.innerHeight * 0.75 + 1);
    }
  } else if (clicksCountMod % 2 == 0) {
    services.classList.remove("long");
    modImg.classList.remove("long");
    if (window.innerWidth < 1025) {
      window.scrollTo(0, services.offsetTop);
    }
  }

  clicksCountRepair = 0;
  clicksCountBuild = 0;
  clicksCountServ = 0;
  servTxt.classList.remove("txtOn");
  repairTxt.classList.remove("txtOn");
  buildTxt.classList.remove("txtOn");
  modTxt.classList.toggle("txtOn");
  servImg.classList.remove("long");
  repairImg.classList.remove("long");
  buildImg.classList.remove("long");
});

homeBtn.addEventListener("click", () => {
  window.scroll(0, 0);
  nav.classList.remove("show");
  burger.classList.remove("is-active");
  clear();
});

aboutBtn.addEventListener("click", () => {
  const scroll = about.offsetTop;
  window.scroll(0, scroll);
  nav.classList.remove("show");
  burger.classList.remove("is-active");
  clear();
});

servicesBtn.addEventListener("click", () => {
  const scroll = services.offsetTop;
  window.scroll(0, scroll);
  nav.classList.remove("show");
  burger.classList.remove("is-active");
  clear();
});

contactBtn.addEventListener("click", () => {
  const scroll = contact.offsetTop;
  window.scroll(0, scroll);
  nav.classList.remove("show");
  burger.classList.remove("is-active");
  clear();
});
