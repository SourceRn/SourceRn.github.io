let iconos;
let selecciones = [];
let contador = 0;
let puntuacion = 0;
let numCartas = 12;
let colors = [
    "#272727",
    "#FED766",
    "#009FB7",
    "#696773",
    "#EFF1F3"
];

function cargarIconos() {
    iconos = [
        '<img src="src/images/img-mem/par1.1.png" width="95%" height="95%" id="icono1">', //<i class="fas fa-traffic-light"></i>
        '<img src="src/images/img-mem/par2.1.png" width="95%" height="95%" id="icono2">', //<i class="fas fa-disease"></i>
        '<img src="src/images/img-mem/par7.1.png" width="95%" height="95%" id="icono3">', //<i class="fas fa-cube"></i>
        '<img src="src/images/img-mem/par4.1.png" width="95%" height="95%" id="icono4">', //<i class="fas fa-dice-d20"></i>
        '<img src="src/images/img-mem/par5.1.png" width="95%" height="95%" id="icono5">', //<i class="fas fa-cubes"></i>
        '<img src="src/images/img-mem/par6.1.png" width="95%" height="95%" id="icono6">', //<i class="fas fa-dice-four"></i>
        '<i class="fas fa-dice-two"></i>',
        '<i class="fas fa-dice-five"></i>',
        '<i class="fas fa-dice-one"></i>',
        '<i class="fas fa-dice-three"></i>',
        '<i class="fas fa-folder-open"></i>',
        '<i class="fas fa-question-circle"></i>'
    ]
}

generarTablero();
//style="background-image: url(src/images/img-mem/1.png); background-size: cover; background-repeat: no-repeat;"
function generarTablero() {
    //contador = 0;
    //selecciones = [];
    document.getElementById("puntuacion").innerHTML = "<h3><b>Puntuacion: "+puntuacion+"</b></h3>";
    cargarIconos();
    let tablero = document.getElementById("tablero");
    let tarjetas = [];
    for (let i = 0; i < numCartas; i++) {
        tarjetas.push(`
            <div class="area-tarjeta" onclick = "seleccionarTarjeta(${i})">
                <div class="tarjeta" id="tarjeta${i}">
                    <div class="cara trasera" id = "trasera${i}">
                        ${iconos[0]}
                    </div>
                    <div class="cara superior">
                        <img src="src/images/img-mem/1.png" alt="tapadera" style="width: 100%; height: 100%">
                    </div>
                </div>
            </div>
        `);
        if (i % 2 == 1) {
            iconos.splice(0, 1);
        }
    }
    tarjetas.sort(() => Math.random() - 0.5);
    tablero.innerHTML = tarjetas.join(" ");

    document.getElementById("stylesTab").innerHTML = `
        <style>
            #tablero{
                padding-top: 20px;
                padding-bottom: 20px;
            }
        </style>
    `;
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i);
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)";
        selecciones.push(i);
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones);
        selecciones = []
    }
}

// style="background-color:${}"

function deseleccionar(selecciones) {
    setTimeout(() => {
        let tr1 = document.getElementById("trasera" + selecciones[0]);
        let tr2 = document.getElementById("trasera" + selecciones[1]);
        if (tr1.innerHTML != tr2.innerHTML) {
            let t1 = document.getElementById("tarjeta" + selecciones[0]);
            let t2 = document.getElementById("tarjeta" + selecciones[1]);
            t1.style.transform = "rotateY(0deg)";
            t2.style.transform = "rotateY(0deg)";
        } else {
            changeColor = true;
            tr1.style.background = "plum";
            tr2.style.background = "plum";
            contador++;
            puntuacion++;
            document.getElementById("puntuacion").innerHTML = "<h3><b>Puntuacion: "+puntuacion+"</b></h3>";
            //validacion
            if (contador == (numCartas / 2)) {
                let resultado = document.getElementById("result");
                let infoDiv = document.getElementById("info");
                infoDiv.removeAttribute("hidden");
                resultado.innerHTML = `
                        <br><br><br>
                        <div id="resultado"><h3><b>GANASTE!!</b> <br> Con una puntuacion de: <b>6</b> !!!</h3></div>
                        <br><br><br>
                    `;
                let btn = document.getElementById("btnNewGame");
                btn.removeAttribute("hidden");
                btn.innerHTML = "Nuevo Juego"
                document.getElementById("saltosdeLinea").innerHTML = "<br><br><br>";
                document.getElementById("puntuacion").innerHTML = "";
            }
        }
    }, 1000);
}
