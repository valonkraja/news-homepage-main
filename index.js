const menu = document.querySelector(".menu-list")
const openMenu = document.querySelector(".menu-icon")
const closeMenu = document.querySelector(".close-menu")
const overlay = document.querySelector(".overlay")

openMenu.addEventListener("click", function(){
    menu.classList.add("active")
    overlay.classList.add("active")
})

closeMenu.addEventListener("click", function(){
    menu.classList.remove("active")
    overlay.classList.remove("active")
})
