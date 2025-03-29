//navbar-logic

let openNav = document.querySelector("#nav-btn");
let closeNav = document.querySelector("#cross-btn");
let navDrawer = document.querySelector("#navbar");

openNav.onclick = ()=>{
    navDrawer.classList.remove("hidden");
    navDrawer.classList.add("flex");
    openNav.classList.add("hidden");
};

closeNav.onclick= ()=>{
    navDrawer.classList.toggle("hidden");
    navDrawer.classList.remove("flex");
    openNav.classList.remove("hidden");
};