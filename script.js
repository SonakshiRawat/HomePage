"use strict";
const tab1 = document.querySelector(".tab1");
const booky = document.querySelector(".booky");
const tab = document.querySelectorAll(".topic");
const part = document.querySelectorAll(".card");
const ham = document.querySelector(".ham");
const navy = document.querySelector(".navy1");
const nav = document.querySelector("nav");
const close = document.querySelector(".close");
const body = document.querySelector("body");
const container = document.querySelector(".container");

ham.addEventListener("click", function (e) {
  e.preventDefault();
  navy.classList.toggle("hidden");
  nav.classList.add("hidden");
  body.style.overflow = "hidden";
});

close.addEventListener("click", function (e) {
  e.preventDefault();
  navy.classList.add("hidden");
  nav.classList.remove("hidden");
  body.style.overflow = "scroll";
});

let b = tab1.classList;
let prev = booky.getAttribute("data-type");

tab.forEach((n) =>
  n.addEventListener("click", function (e) {
    let y = e.target.getAttribute("data-type");
    if (!e.target.classList.contains("tab-active")) {
      //   console.log(y);
      handle(y);
      e.target.classList.add("tab-active");
      b.remove("tab-active");
      b = e.target.classList;
    }
  })
);

function handle(curr) {
  part.forEach((n) => {
    if (curr === n.getAttribute("data-type")) {
      document
        .querySelector(`.card[data-type="${prev}"]`)
        .classList.add("hidden");
      document
        .querySelector(`.card[data-type="${curr}"]`)
        .classList.remove("hidden");
      prev = curr;
    }
  });
}

const bg = document.querySelector(".bg");
var cycle = 0;
var all = [
  "images/priscilla-du-preez-XkKCui44iM0-unsplash.jpg",
  "images/pexels-pixabay-256541.jpg",
  "images/pexels-pixabay-267885.jpg",
];

setInterval(function () {
  if (cycle < 3) {
    bg.style.backgroundImage = "url('" + all[cycle] + "')";
    cycle += 1;
  } else {
    cycle = 0;
  }
}, 1500);

function next(t){
  let element = t.parentElement.parentElement.children[0];
  let item = element.querySelectorAll(".prev");
  element.append(item[0]);
  console.log(item);
}
function previous(t){
  let element = t.parentElement.parentElement.children[0];
  let item = element.querySelectorAll(".prev");
  element.prepend(item[item.length - 1]);
}