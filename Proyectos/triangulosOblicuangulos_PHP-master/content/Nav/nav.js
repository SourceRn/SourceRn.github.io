const menuImg_btn = document.getElementById('mobileNav');
const mainNav = document.getElementById('mainNav');
const menuIniciarSesion = document.getElementById('iniciarSesion_window');

function openMobileMenu(){
    menuImg_btn.style.display = "block";
    mainNav.style.display = "none";
}

function closeMobileMenu(){
    menuImg_btn.style.display = "none";
    mainNav.style.display = "block";
}

function openIniciarSesion_menu(){
    menuIniciarSesion.style.display = "block";
}

function closeIniciarSesion_menu(){
    menuIniciarSesion.style.display = "none";
}