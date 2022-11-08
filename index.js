let menu = document.querySelector("#menu");
let box = document.querySelector("#side-menu");
// close
let close = document.querySelector("#close");
box.style.right = "-100%";
menu.addEventListener("click", show);

function show() {
    box.style.right = "0";
}
close.addEventListener("click", hide);

function hide() {
    box.style.right = "-100%";
}