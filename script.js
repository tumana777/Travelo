"use strict";
const prevBtn = document.querySelector(".slider-btn");
const bg1 = document.querySelector(".bg1");
const bg2 = document.querySelector(".bg2");
const bg3 = document.querySelector(".bg3");

prevBtn.addEventListener("click", () => {
  bg1.classList.remove("active");
  bg2.classList.add("active");
});
