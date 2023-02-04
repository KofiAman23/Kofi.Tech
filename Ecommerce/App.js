const nav = document.getElementById("navbar");
const menu= document.getElementById("menu-btn");
const button= document.getElementById("button")

if (navbar) {
    navbar.addEventlistener("click",() =>{
        nav.classList.addEventlistener("active")
    });
};

if (button) {
    button.addEventListener("click",() =>{
        button.classList.addEventListener("active")
    });
};

