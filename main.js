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
const insideTextServ = document.querySelector(".servicing .insideText");
const insideTextRepair = document.querySelector(".repairing .insideText");
const insideTextBuild = document.querySelector(".building .insideText");
const insideTextMod = document.querySelector(".modernisation .insideText");
const animServ = document.querySelector(".servicing .click");
const animRepair = document.querySelector(".repairing .click");
const animBuild = document.querySelector(".building .click");
const animMod = document.querySelector(".modernisation .click");

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
  servImg.classList.remove("long");
  modImg.classList.remove("long");
  repairImg.classList.remove("long");
  buildImg.classList.remove("long");
  modImg.classList.remove("short");
  servImg.classList.remove("short");
  repairImg.classList.remove("short");
  buildImg.classList.remove("short");
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

servImg.addEventListener("click", () => {
  servImg.classList.remove("short");
  if (window.innerWidth < 1025) {
    window.scrollTo(0, services.offsetTop);
  }

  clicksCountServ = ++clicksCountServ;
  if (clicksCountServ % 2 == 1) {
    modImg.classList.add("short");
    servImg.classList.add("long");
    repairImg.classList.add("short");
    buildImg.classList.add("short");
  } else if (clicksCountServ % 2 == 0) {
    modImg.classList.remove("short");
    servImg.classList.remove("long");
    repairImg.classList.remove("short");
    buildImg.classList.remove("short");
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
  insideTextServ.classList.remove("anim");
  animServ.classList.remove("anim");
});

repairImg.addEventListener("click", () => {
  repairImg.classList.remove("short");
  if (window.innerWidth < 1025) {
    window.scrollTo(0, services.offsetTop);
  }

  clicksCountRepair = ++clicksCountRepair;
  if (clicksCountRepair % 2 == 1) {
    modImg.classList.add("short");
    servImg.classList.add("short");
    repairImg.classList.add("long");
    buildImg.classList.add("short");
  } else if (clicksCountRepair % 2 == 0) {
    modImg.classList.remove("short");
    servImg.classList.remove("short");
    repairImg.classList.remove("long");
    buildImg.classList.remove("short");
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
  insideTextRepair.classList.remove("anim");
  animRepair.classList.remove("anim");
});

buildImg.addEventListener("click", () => {
  buildImg.classList.remove("short");
  if (window.innerWidth < 1025) {
    window.scrollTo(0, services.offsetTop);
  }

  clicksCountBuild = ++clicksCountBuild;
  if (clicksCountBuild % 2 == 1) {
    modImg.classList.add("short");
    servImg.classList.add("short");
    repairImg.classList.add("short");
    buildImg.classList.add("long");
  } else if (clicksCountBuild % 2 == 0) {
    modImg.classList.remove("short");
    servImg.classList.remove("short");
    repairImg.classList.remove("short");
    buildImg.classList.remove("long");
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
  insideTextBuild.classList.remove("anim");
  animBuild.classList.remove("anim");
});

modImg.addEventListener("click", () => {
  modImg.classList.remove("short");
  if (window.innerWidth < 1025) {
    window.scrollTo(0, services.offsetTop);
  }

  clicksCountMod = ++clicksCountMod;
  if (clicksCountMod % 2 == 1) {
    modImg.classList.add("long");
    servImg.classList.add("short");
    repairImg.classList.add("short");
    buildImg.classList.add("short");
  } else if (clicksCountMod % 2 == 0) {
    modImg.classList.remove("long");
    servImg.classList.remove("short");
    repairImg.classList.remove("short");
    buildImg.classList.remove("short");
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
  insideTextMod.classList.remove("anim");
  animMod.classList.remove("anim");
});

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

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
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
