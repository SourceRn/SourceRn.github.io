let btnPerimetroTrapecio = document.getElementById("btnPerimetroTrapecio");
let btnAreaTrapecio = document.getElementById("btnAreaTrapecio");
let areaTrapecio, perimetroTrapecio, lado1, lado2, lado3, lado4, baseMenor, baseMayor, altura;

function perimetro_trapecio() {
    lado1 = prompt("Ingrese el primer lado del trapecio: ");
    lado1 = parseFloat(lado1);
    lado2 = prompt("Ingrese el segundo lado del trapecio: ");
    lado2 = parseFloat(lado2);
    lado3 = prompt("Ingrese el tercer lado del trapecio: ");
    lado3 = parseFloat(lado3);
    lado4 = prompt("Ingrese el cuarto lado del trapecio: ");
    lado4 = parseFloat(lado4);
    perimetroTrapecio = lado1 + lado2 + lado3 + lado4;
    alert("El perimetro es: " + perimetroTrapecio);
}

function area_trapecio() {
    baseMayor = prompt("Ingrese la base mayor del trapecio: ");
    baseMayor = parseFloat(baseMayor);
    baseMenor = prompt("Ingrese la base menor del trapecio: ");
    baseMenor = parseFloat(baseMenor);
    altura = prompt("Ingrese la altura del trapecio: ");
    altura = parseFloat(altura);
    areaTrapecio = ((baseMayor * baseMenor) * altura) / 2;
    alert("El area es: " + areaTrapecio);
}

btnPerimetroTrapecio.onclick = perimetro_trapecio;
btnAreaTrapecio.onclick = area_trapecio;