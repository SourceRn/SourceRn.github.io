//Molde para Preguntas
class Preguntas {
    constructor(text, respuestas, resp_correcta) {
        this.text = text;
        this.respuestas = respuestas;
        this.resp_correcta = resp_correcta;
    }
}

//----------------PREGUNTAS Y VARIABLES--------------------//

pregunta1 = new Preguntas(
    '3 {1 + 2 [ 4 + 5 (6 - 7) + 8] - 9} =', ['a. -18', 'b. 18', 'c. 16', 'd. 13'],
    'b'
);
pregunta2 = new Preguntas(
    '3(4-5)2 + 4(5-1) - 3(1+2)2(2) + 2(3)(3) =', ['a. -26', 'b. -17', 'c. -94', 'd. 26'],
    'b'
);
pregunta3 = new Preguntas(
    '4 [ (5 + 3) - 22] =', ['a. -56', 'b. 10', 'c. 17', 'd. 18'],
    'a'
);
pregunta4 = new Preguntas(
    '150 + (25 * 2) + 32 / (8*2) =', ['a. 208', 'b. 202', 'c. 340', 'd. 58'],
    'b'
);
pregunta5 = new Preguntas(
    '(30 – 20) / 2 + (6*5) / 3 + (40 – 25) + (9-6) =', ['a. 20', 'b. 33', 'c. 30', 'd. 21'],
    'b'
);
pregunta6 = new Preguntas(
    '-5{[(-3*2)/3]+1}+2-[-7(7-2)+1] =', ['a. 13', 'b. 10', 'c. -9', 'd. 9'],
    'c'
);
pregunta7 = new Preguntas(
    '1/2(3/4 + 1/8) =', ['a. 7/14', 'b. 5/16', 'c. 6/14', 'd. 7/16'],
    'd'
);
pregunta8 = new Preguntas(
    '(3/2 + 1/4) / (5/6 - 1/3) =', ['a. 2/7', 'b. 3.5', 'c. -1.8', 'd. -7/2'],
    'b'
);
pregunta9 = new Preguntas(
    '(-1 + 3/4 - 1/3) / (2 - 1/4) =', ['a. -1/3', 'b. 1/3', 'c. -0.66', 'd. 0.66'],
    'a'
);
pregunta10 = new Preguntas(
    '-0.3(4.2/10.5+(5.2)^2x√1.69-1.7 =', //text
    ['a. -13.5', 'b. 9.915', 'c. 9.5', 'd. -9.915'], //respuestas
    'd' //resp_correcta
);
pregunta11 = new Preguntas(
    'En la fiesta, Aisha y sus amigos se comieron 2 1/2 pizzas. Despues de la fiesta, sobraba 1/8 de pizza.' +
    '\n¿Cuantas Pizzas habia al inicio de la fiesta?', //text
    ['a. 29/8 de pizza', 'b. 27/8 de pizza', 'c. 29/7 de pizza', 'd. 24/8 de pizza'], //respuestas
    'a' //resp_correcta
);
pregunta12 = new Preguntas(
    'El primer miembro de un equipo en una carrera de 3 relevos debe correr 2 1/4 vueltas, el segundo debe correr 1 1/2 vueltas y el tercero debe correr 3 5/8 vueltas.' +
    '\n¿Cuantas vueltas en total debe correr cada equipo?', //text
    ['a. 6 1/2 vueltas', 'b. 7 3/8 vueltas', 'c. 8 4/5 vueltas', 'd. 7 1/4 vueltas'], //respuestas
    'b' //resp_correcta
);
pregunta13 = new Preguntas(
    'Priya camino 1 1/2 dias en una excursion. Estuvo perdida 5/6 de ese tiempo' +
    '\n¿Que fraccion de un dia estuvo perdida Priya?', //text
    ['a. 8/4 dias', 'b. 1 1/2 dias', 'c. 1 1/4 dias', 'd. 1 4/5 dias'], //respuestas
    'c' //resp_correcta
);
pregunta14 = new Preguntas(
    'La estatura del hermano de Junior es 1 1/2 metros. La estatura de Junior es 1 1/5 de la de su hermano' +
    '\n¿Cuanto mide Junior?', //text
    ['a. 8/5 de metro', 'b. 3/5 de metro', 'c. 1 1/5 de metro', 'd. 4/5 metro'], //respuestas
    'd' //resp_correcta
);
pregunta15 = new Preguntas(
    'Stephen utiliza 2/25 kilogramos de tofu en cada porcion de su famoso platillo de tofu. Tiene 1 1/10 kilogramos de tofu' +
    '\n¿Cuantas porciones puede hacer Stephen?', //text
    ['a. 55/4 porciones', 'b. 50/8 porciones', 'c. 55/2 porciones', 'd. 54/4 porciones'], //respuestas
    'a' //resp_correcta
);
pregunta16 = new Preguntas(
    '(3-5)^2 + 4(3-1) - 3(1+1)^2(2) + 2(3)(2) =', //text
    ['a. -16', 'b. 0', 'c. 48', 'd. -19'], //respuestas
    'b' //resp_correcta
);
pregunta17 = new Preguntas(
    '3(3 - 1) + 3[1 + 2(2)] - 2(4 - 1)(2 + 1) =', //text
    ['a. -3', 'b. 9', 'c. 3', 'd. 39'], //respuestas
    'c' //resp_correcta
);
pregunta18 = new Preguntas(
    '3√19-3 + 4(3 - 1)(2)^2 - 3(2 + 1)^2 - 2[2 + 3(2 + 1)]  =', //text
    ['a. 5', 'b. -5', 'c. 0', 'd. -10'], //respuestas
    'b' //resp_correcta
);
pregunta19 = new Preguntas(
    '2(2 + 1)(3 - 1)^2 - 4(4 - 3)(3 + 1) =', //text
    ['a. 8', 'b. -40', 'c. 40', 'd. -8'], //respuestas
    'a' //resp_correcta
);
pregunta20 = new Preguntas(
    '7(3 - 1) - 3[1 - 2(2)] - 2(4 + 1)(2 + 1) =', //text
    ['a. -25', 'b. 25', 'c. 7', 'd. -7'], //respuestas
    'd' //resp_correcta
);
pregunta21 = new Preguntas(
    'Coloca el termino que corresponda a un monomio', //text
    ['a. 6sxyz - 10', 'b. 2a^3b^2 + 50x^3y', 'c. 7a^3b^2', 'd. 7a - 10b + 6b - 2a + 9a'], //respuestas
    'c' //resp_correcta
);
pregunta22 = new Preguntas(
    'Todos son binomios excepto:', //text
    ['a. 8a - 5b^2', 'b. 6b^2b^3', 'c. -6a^2b^3', 'd. 5x^2 - y'], //respuestas
    'c' //resp_correcta
);
pregunta23 = new Preguntas(
    'Selecciona la clasificación del siguiente termino 7a -10b + 6e', //text
    ['a. Monomio', 'b. Polinomio', 'c. Binomio', 'd. Trinomio'], //respuestas
    'd' //resp_correcta
);
pregunta24 = new Preguntas(
    'Coloca el termino que corresponda a un trinomio', //text
    ['a. 4ab^2 + 2b - 5c^4 - y^3', 'b. 50x^3y + 2x^5 + 8z', 'c. 2a^3b2 + 50x^3y', 'd. -5a2b'], //respuestas
    'b' //resp_correcta
);
pregunta25 = new Preguntas(
    'Determina la variable de mayor exponente en el siguiente polinomio 7x4 + 6y³ + 4a² + 15xb+ 5', //text
    ['a. y', 'b. x', 'c. a', 'd. b'], //respuestas
    'b' //resp_correcta
);
pregunta26 = new Preguntas(
    'Es una combinacion de letras y números ligadas por los signos de las operaciones.', //text
    ['a. Expresión Decimal', 'b. Expresion Algebraica', 'c. Expresion polinomica', 'd. otro'], //respuestas
    'b' //resp_correcta
);
pregunta27 = new Preguntas(
    '¿Por qué está conformada la expresión algebraica?', //text
    ['a. Términos', 'b. Base', 'c. Sumas', 'd. Numeros'], //respuestas
    'a' //resp_correcta
);
pregunta28 = new Preguntas(
    'Es el mayor de los grados de los términos que contiene el polinomio. Los polinomios se ordenan teniendo en cuenta los exponentes de las variables.', //text
    ['a. Grado Relativo', 'b. Grado Absoluto', 'c. Binomio y Trinomio', 'd. Expresión Algebraica'], //respuestas
    'b' //resp_correcta
);
pregunta29 = new Preguntas(
    'Es el mayor exponente que tiene la variable en el polinomio.', //text
    ['a. Grado Relativo', 'b. Grado Absoulto', 'c. Binomio Trinomio', 'd. Expresión Algebraica'], //respuestas
    'a' //resp_correcta
);
pregunta30 = new Preguntas(
    'De acuerdo a la cantidad de sumandos el polinomio recibe denominaciones particulares como:', //text
    ['a. Grado Relativo', 'b. Grado Absoluto', 'c. Binomio y Trinomio', 'd. Expresión Algebraica'], //respuestas
    'c' //resp_correcta
);
numTotalPreguntas = 10; //cantidad de preguntas que apareceran en el reto
arrayPreguntas = [
    pregunta1, pregunta2, pregunta3, pregunta4, pregunta5,
    pregunta6, pregunta7, pregunta8, pregunta9, pregunta10,
    pregunta11, pregunta12, pregunta13, pregunta14, pregunta15,
    pregunta16, pregunta17, pregunta18, pregunta19, pregunta20,     //Array que almacena las preguntas
    pregunta21, pregunta22, pregunta23, pregunta24, pregunta25,
    pregunta26, pregunta27, pregunta28, pregunta29, pregunta30
]; 
indiceAzar = [];
preguntasAzar = []; //Array para almacenar las preguntas elegidas al azar


//-------------------PROCEDIMIENTOS Y FUNCIONES--------------------------//

//Funcion que desordena un array y retorna uno nuevo
function indicesAzar(array) {
    indice = []; //Array que almacenara los indices de las preguntas
    
    for (let i = 0; i < array.length; i++) {
        indice[i] = i;                          //Se llena el array 'indice'
    }

    indice.sort(() => Math.random() > 0.5 ? 1 : -1); //Se colocan aleatoriamente los valores de indice

    return indice;
}

indiceAzar = indicesAzar(arrayPreguntas).slice(0, 10); //Se eligen los primeros 10 valores de indice y se almacenan en el array indiceAzar


for (let i = 0; i < numTotalPreguntas; i++) {
    preguntasAzar[i] = arrayPreguntas[indiceAzar[i]];      //se almacenan las preguntas al azar
}

function verificarRespuestas() {
    preguntasTotales = preguntasAzar.length;
    puntuacion = 0;

    formularioReto = document.forms.form;

    respuestas = [];    //array para almacenar respuestas correctas
    for (let index = 0; index < preguntasAzar.length; index++) {
        respuestas[index] = preguntasAzar[index].resp_correcta;     //buclque almacena las respuestas correctas de las preguntas al azar
    }


    for (let i = 1; i <= preguntasAzar.length; i++) {
        if (formularioReto["eje" + i].value === null || formularioReto["eje" + i].value === "") {
            resultado.innerHTML = '<h3>Responde Todas las Preguntas: <span> Revisa desde la Pregunta ' + i + ' Porfavor</span>';
            return false;
        } else {
            if (formularioReto["eje" + i].value === respuestas[i - 1]) {
                puntuacion++;
            }
        }
    }

    resultado = document.getElementById("resultado");
    resultado.innerHTML = '<h3>Obtuviste <span>' + puntuacion + '</span> de <span>' + preguntasTotales + '</span> puntos <h/3>';
    btnRepasar = document.getElementById("Repasar");
    btnRepasar.removeAttribute("hidden");
    btnReiniciar = document.getElementById("Reiniciar");
    btnReiniciar.removeAttribute("hidden");
    btnInicio = document.getElementById("Inicio");
    btnInicio.removeAttribute("hidden");

    return false;
}

function escribirHTML() {
    //Pregunta 1
    document.getElementById('pregunta1').innerHTML = preguntasAzar[0].text;
    document.getElementById('resp1Preg1').innerHTML = preguntasAzar[0].respuestas[0];
    document.getElementById('resp2Preg1').innerHTML = preguntasAzar[0].respuestas[1];
    document.getElementById('resp3Preg1').innerHTML = preguntasAzar[0].respuestas[2];
    document.getElementById('resp4Preg1').innerHTML = preguntasAzar[0].respuestas[3];
    //Pregunta 2
    document.getElementById('pregunta2').innerHTML = preguntasAzar[1].text;
    document.getElementById('resp1Preg2').innerHTML = preguntasAzar[1].respuestas[0];
    document.getElementById('resp2Preg2').innerHTML = preguntasAzar[1].respuestas[1];
    document.getElementById('resp3Preg2').innerHTML = preguntasAzar[1].respuestas[2];
    document.getElementById('resp4Preg2').innerHTML = preguntasAzar[1].respuestas[3];
    //Pregunta 3
    document.getElementById('pregunta3').innerHTML = preguntasAzar[2].text;
    document.getElementById('resp1Preg3').innerHTML = preguntasAzar[2].respuestas[0];
    document.getElementById('resp2Preg3').innerHTML = preguntasAzar[2].respuestas[1];
    document.getElementById('resp3Preg3').innerHTML = preguntasAzar[2].respuestas[2];
    document.getElementById('resp4Preg3').innerHTML = preguntasAzar[2].respuestas[3];
    //Pregunta 4
    document.getElementById('pregunta4').innerHTML = preguntasAzar[3].text;
    document.getElementById('resp1Preg4').innerHTML = preguntasAzar[3].respuestas[0];
    document.getElementById('resp2Preg4').innerHTML = preguntasAzar[3].respuestas[1];
    document.getElementById('resp3Preg4').innerHTML = preguntasAzar[3].respuestas[2];
    document.getElementById('resp4Preg4').innerHTML = preguntasAzar[3].respuestas[3];
    //Pregunta 5
    document.getElementById('pregunta5').innerHTML = preguntasAzar[4].text;
    document.getElementById('resp1Preg5').innerHTML = preguntasAzar[4].respuestas[0];
    document.getElementById('resp2Preg5').innerHTML = preguntasAzar[4].respuestas[1];
    document.getElementById('resp3Preg5').innerHTML = preguntasAzar[4].respuestas[2];
    document.getElementById('resp4Preg5').innerHTML = preguntasAzar[4].respuestas[3];
    //Pregunta 6
    document.getElementById('pregunta6').innerHTML = preguntasAzar[5].text;
    document.getElementById('resp1Preg6').innerHTML = preguntasAzar[5].respuestas[0];
    document.getElementById('resp2Preg6').innerHTML = preguntasAzar[5].respuestas[1];
    document.getElementById('resp3Preg6').innerHTML = preguntasAzar[5].respuestas[2];
    document.getElementById('resp4Preg6').innerHTML = preguntasAzar[5].respuestas[3];
    //Pregunta 7
    document.getElementById('pregunta7').innerHTML = preguntasAzar[6].text;
    document.getElementById('resp1Preg7').innerHTML = preguntasAzar[6].respuestas[0];
    document.getElementById('resp2Preg7').innerHTML = preguntasAzar[6].respuestas[1];
    document.getElementById('resp3Preg7').innerHTML = preguntasAzar[6].respuestas[2];
    document.getElementById('resp4Preg7').innerHTML = preguntasAzar[6].respuestas[3];
    //Pregunta 8
    document.getElementById('pregunta8').innerHTML = preguntasAzar[7].text;
    document.getElementById('resp1Preg8').innerHTML = preguntasAzar[7].respuestas[0];
    document.getElementById('resp2Preg8').innerHTML = preguntasAzar[7].respuestas[1];
    document.getElementById('resp3Preg8').innerHTML = preguntasAzar[7].respuestas[2];
    document.getElementById('resp4Preg8').innerHTML = preguntasAzar[7].respuestas[3];
    //Pregunta 9
    document.getElementById('pregunta9').innerHTML = preguntasAzar[8].text;
    document.getElementById('resp1Preg9').innerHTML = preguntasAzar[8].respuestas[0];
    document.getElementById('resp2Preg9').innerHTML = preguntasAzar[8].respuestas[1];
    document.getElementById('resp3Preg9').innerHTML = preguntasAzar[8].respuestas[2];
    document.getElementById('resp4Preg9').innerHTML = preguntasAzar[8].respuestas[3];
    //Pregunta 10
    document.getElementById('pregunta10').innerHTML = preguntasAzar[9].text;
    document.getElementById('resp1Preg10').innerHTML = preguntasAzar[9].respuestas[0];
    document.getElementById('resp2Preg10').innerHTML = preguntasAzar[9].respuestas[1];
    document.getElementById('resp3Preg10').innerHTML = preguntasAzar[9].respuestas[2];
    document.getElementById('resp4Preg10').innerHTML = preguntasAzar[9].respuestas[3];
}

escribirHTML();