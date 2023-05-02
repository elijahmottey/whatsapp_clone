
const menu = document.querySelector(".hamburger");


const slide = document.querySelector("#sideBar");


menu.addEventListener("click", ()=>{
    slide.classList.toggle("reveal")
   menu.classList.toggle("rmenu")
})

