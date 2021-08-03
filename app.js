// Tomamos variables

let click = document.querySelector(".click");
let icono = document.querySelector(".icono");
let menu = document.querySelector(".menu")
let abierto = false;
// creamos la funciuon para abrir y cerrar el menu

let openClose = () =>{
    if(abierto == false){
        menu.classList.add("menu2");

        abierto= true;
    } else if (abierto == true){
        menu.classList.remove("menu2");
        abierto=false;
    }
}
click.addEventListener("click", openClose)

// codigo para cerrar tocando cualquier parte de la pantalla

let closeWindow= (e) =>{
    let placeOpen = e.target;
    if(placeOpen !== click & placeOpen !== menu & abierto){
        openClose();
        abierto=false;
    }
}
window.addEventListener("click", closeWindow)
// scroll bug
window.addEventListener("scroll", closeWindow);

 // codigo para que el "hover" del menu en Css no afecte la optimacicion en tablets

