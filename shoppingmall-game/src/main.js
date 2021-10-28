"use strict";

let shoppingList = [
  {
    type: "tshirt",
    gender: "male",
    color: "yellow",
    size: "large",
    image: "../shoppingmall-game/img/yellow_t.png",
  },
  {
    type: "skirt",
    gender: "female",
    color: "pink",
    size: "small",
    image: "../shoppingmall-game/img/pink_s.png",
  },
  {
    type: "skirt",
    gender: "female",
    color: "blue",
    size: "large",
    image: "../shoppingmall-game/img/blue_s.png",
  },
  {
    type: "pants",
    gender: "female",
    color: "blue",
    size: "small",
    image: "../shoppingmall-game/img/blue_p.png",
  },
  {
    type: "pants",
    gender: "female",
    color: "pink",
    size: "large",
    image: "../shoppingmall-game/img/pink_p.png",
  },
  {
    type: "tshirt",
    gender: "male",
    color: "blue",
    size: "small",
    image: "../shoppingmall-game/img/blue_t.png",
  },
  {
    type: "skirt",
    gender: "female",
    color: "yellow",
    size: "large",
    image: "../shoppingmall-game/img/yellow_s.png",
  },
  {
    type: "tshirt",
    gender: "male",
    color: "pink",
    size: "small",
    image: "../shoppingmall-game/img/pink_t.png",
  },
  {
    type: "pants",
    gender: "female",
    color: "yellow",
    size: "small",
    image: "../shoppingmall-game/img/yellow_p.png",
  },
  {
    type: "tshirt",
    gender: "female",
    color: "blue",
    size: "small",
    image: "../shoppingmall-game/img/blue_t.png",
  },
  {
    type: "pants",
    gender: "male",
    color: "blue",
    size: "large",
    image: "../shoppingmall-game/img/blue_p.png",
  },
];

function filterType(type) {
  let data = shoppingList.filter((item) => item.type == type);
  renderItems(data);
}

function filterColor(color) {
  let data = shoppingList.filter((item) => item.color == color);
  renderItems(data);
}

function renderItems(data) {
  let h = [];
  for (let item of data) {
    h.push(`<li class="item" data-type="${item.type}" data-color="${item.color}">
    <img src="${item.image}" /> <span>${item.gender}, ${item.size} size</span>
  </li>`);
  }

  document.getElementById("itemList").innerHTML = h.join("");
}

renderItems(shoppingList);
