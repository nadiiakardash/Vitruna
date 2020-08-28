"use strict";

function openBurger() {
  document.getElementById("vitrunaNav").style.display = "block";
  document.getElementById("vitruna-menu-burger").style.display = "block";
  document.getElementById("vitrunaNav").style.width = "100%";
  document.getElementById("vitrunaNav").style.height = "100%";
  document.getElementById("vitrunaNav").style.position = "fixed";
}

function closeBurger() {
  document.getElementById("vitrunaNav").style.display = "none";
  document.getElementById("vitruna-menu-burger").style.display = "none";
  document.getElementById("vitrunaNav").style.width = "0%";
  document.getElementById("vitrunaNav").style.height = "0%";
  document.getElementById("vitrunaNav").style.position = "none";
}

function chooseItem() {
  var txt = document.getElementById("vitruna_choose-elem");

  if (txt.style.textAlign === "left") {
    txt.style.textAlign = "center";
  } else {
    txt.style.textAlign = "left";
  }

  if (txt.style.border === "none") {
    txt.style.border = "1px solid #666666";
  } else {
    txt.style.border = "none";
  }

  var x = document.getElementById("vitruna_check-list");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function buyCoost() {
  var buy = document.getElementById("vitruna_buy-input");

  if (buy.style.display === "none") {
    buy.style.display = "block";
  } else {
    buy.style.display = "none";
  }
}

function Sell() {
  var sell = document.getElementById("vitruna_sell-input");

  if (sell.style.display === "none") {
    sell.style.display = "block";
  } else {
    sell.style.display = "none";
  }
}