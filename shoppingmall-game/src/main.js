// function loadItems() {
//   return fetch("data/data.json");
// }
"use strict";

let shoppingList = [
  {
    type: "tshirt",
    gender: "male",
    color: "yello",
    size: "large",
    image: "../img/yellow_t.png",
  },
  {
    type: "skirt",
    gender: "female",
    color: "pink",
    size: "small",
    image: "../img/pink_s.png",
  },
  {
    type: "skirt",
    gender: "female",
    color: "blue",
    size: "large",
    image: "../img/blue_s.png",
  },
  {
    type: "pants",
    gender: "female",
    color: "blue",
    size: "small",
    image: "../img/blue_p.png",
  },
  {
    type: "pants",
    gender: "female",
    color: "pink",
    size: "large",
    image: "../img/pink_p.png",
  },
  {
    type: "tshirt",
    gender: "male",
    color: "blue",
    size: "small",
    image: "../img/blue_t.png",
  },
  {
    type: "skirt",
    gender: "female",
    color: "yellow",
    size: "large",
    image: "../img/yellow_s.png",
  },
  {
    type: "tshirt",
    gender: "male",
    color: "pink",
    size: "small",
    image: "../img/pink_t.png",
  },
  {
    type: "pants",
    gender: "female",
    color: "yellow",
    size: "small",
    image: "../img/yellow_p.png",
  },
  {
    type: "pants",
    gender: "male",
    color: "blue",
    size: "large",
    image: "../img/blue_p.png",
  },
];

const blueT = document.querySelector("blueT");
const blueP = document.querySelector("blueP");
const blueS = document.querySelector("blueS");
const blueBtn = document.querySelector("blueBtn");
const yellowBtn = document.querySelector("yellowBtn");
const pinkBtn = document.querySelector("pinkBtn");
