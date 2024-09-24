let menu = document.querySelector("#menu");
let html = document.querySelector("html");
let body = document.querySelector("body");

let menuIsOpen = false;

let toggleMenu = () => {
    menuIsOpen ? closeMenu() : openMenu();
}

function openMenu() {
    menu.classList.add("--show-menu");
    html.classList.add("--overflow-hidden");
    body.classList.add("--overflow-hidden");

    menuIsOpen = true;
}

function closeMenu(){
    menu.classList.remove("--show-menu");
    html.classList.remove("--overflow-hidden");
    body.classList.remove("--overflow-hidden");

    menuIsOpen = false;
}

