let menu = document.querySelector(".hamburger")
let list = document.querySelector(".navlist")
let icon = document.getElementById("icon")
let theme = document.querySelector(".theme")
let sun = document.getElementById("sun")

menu.addEventListener("click", () => {
    list.classList.toggle("navlist-active")
    icon.classList.toggle("fa-xmark")
    icon.classList.toggle("fa-bars");
})

theme.addEventListener("click", () => {
    document.body.classList.toggle("light-theme")
    sun.classList.toggle("fa-moon")

})