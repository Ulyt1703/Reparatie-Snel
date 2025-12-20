let hamburger = document.querySelector(".hamburger")
let menuNav = document.querySelector(".nav-menu")

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active")
    menuNav.classList.toggle("active-menu")
})