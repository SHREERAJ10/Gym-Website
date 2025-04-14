// MOBILE NAVBAR LOGIC

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

// SMART NAVBAR LOGIC

let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector("#navbar-heading");

window.addEventListener("scroll",()=>{
    const curScrollPos = window.pageYOffset;

    if(curScrollPos > prevScrollPos && curScrollPos > 50){
        navbar.classList.add("nav-hidden");
    }
    else{
        navbar.classList.remove("nav-hidden");
    }

    prevScrollPos = curScrollPos;
});

// JOIN BUTTON EVENT

document.querySelectorAll(".joinBtn").forEach(el =>{
    el.onclick = ()=>{
        alert("This is just a practice/dummy website. But Thanks for visiting!\n --- Shreeraj Shrestha");
    };
});