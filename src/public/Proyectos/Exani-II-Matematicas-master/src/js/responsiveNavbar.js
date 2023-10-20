let navBarItems = document.getElementsByClassName("dropdown-item");
//console.log(screenWidth, screenHeight);
if (screen.width <= 1144) {
    navBarItems[2].innerHTML = "Operaciones Combinadas";
    navBarItems[3].innerHTML = "Problemas Aritmeticos"
}