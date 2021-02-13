const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const arrowDown = document.querySelector(".fa-angle-double-down");
const main = document.querySelector(".main");

hamburger.addEventListener("click", function () {   
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
});

arrowDown.addEventListener("click", function() {
    main.scrollIntoView()
});