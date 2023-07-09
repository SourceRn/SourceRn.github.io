let btnPerimetroTriangulo = document.getElementById("btnPerimetroTriangulo");
let btnAreaTriangulo = document.getElementById("btnAreaTriangulo");
let areaTriangulo, perimetroTriangulo, altura, lado1, lado2, lado3, base;

function perimetro_triangulo() {
    lado1 = prompt("Ingrese un lado del triangulo: ");
    lado1 = parseFloat(lado1);
    lado2 = prompt("Ingrese otro lado del triangulo: ");
    lado2 = parseFloat(lado2);
    lado3 = prompt("Ingrese el ultimo lado del triangulo: ");
    lado3 = parseFloat(lado3);
    perimetroTriangulo = lado1 + lado2 + lado3;
    alert("El perimetro es: " + perimetroTriangulo);
}

function area_triangulo() {
    base = prompt("Ingrese la base del triangulo: ");
    base = parseFloat(base);
    altura = prompt("Ingrese la altura del triangulo: ");
    altura = parseFloat(altura);
    areaTriangulo = (base * altura) / 2;
    alert("El area es: " + areaTriangulo);
}

btnPerimetroTriangulo.onclick = perimetro_triangulo;
btnAreaTriangulo.onclick = area_triangulo;