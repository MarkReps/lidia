"use strict";

const burgerBtn = document.querySelector(".menu-header__burger");
burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
});
