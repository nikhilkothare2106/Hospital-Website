let ham = document.querySelector(".ham button");
let crs = document.querySelector(".cross");
let menu = document.querySelector(".hamburger");
let body = document.querySelector("body");
ham.addEventListener("click",()=>{
    menu.style.right = "0";
    menu.style.display = "block";
    body.style.overflow = "hidden";
    menu.style.transition = "linear 0.2s"
    ham.style.display = "none";
    crs.style.display = "block";
    
})
crs.addEventListener("click",()=>{
    menu.style.right = "-500px";
    menu.style.display = "none";
    body.style.overflow = "visible";
    ham.style.display = "block";
    crs.style.display = "none";
})