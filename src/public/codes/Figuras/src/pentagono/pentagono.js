const btnPerimetroPentagono = document.getElementById("btnPerimetroPentagono");
const btnAreaPentagono = document.getElementById("btnAreaPentagono");
let areaPentagono, perimetroPentagono, lado, apotema;


function perimetro_pentagono() {
    lado = prompt("Ingrese un lado del pentagono: ");
    lado = parseFloat(lado);
    perimetroPentagono = lado * 5;
    alert("El perimetro es: " + perimetroPentagono);
}

function area_pentagono() {
    apotema = prompt( "Perimetro a usar: " + perimetroPentagono 
        + "\nIngrese el apotema del pentagono: ");
    apotema = parseFloat(apotema);
    areaPentagono = (perimetroPentagono * apotema) / 2;
    alert("El area es: " + areaPentagono);
}

btnPerimetroPentagono.onclick = perimetro_pentagono;
btnAreaPentagono.onclick = area_pentagono;