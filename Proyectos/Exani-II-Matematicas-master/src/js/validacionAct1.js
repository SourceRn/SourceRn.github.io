function validarRespuestasAct1(){
    preguntasCorrectas=['c','c','a','c','d'];
    puntacion = 0;
    preguntasTotales = 5;
    form = document.forms.formAct1;
    resultado = document.getElementById('resultado');
    
    for (let i = 1; i <= 5; i++) {
        if (form["eje"+i].value === null || form["eje"+i].value === "") {
            resultado.innerHTML = '<h3>Responde Todas las Preguntas: <span> Revisa desde la Pregunta ' + i + ' Porfavor</span>';
            return false;
        } else {
            if (form["eje"+i].value === preguntasCorrectas[i-1]) {
                puntacion++;
            }
        }
    }

    resultado.innerHTML = '<h3>Obtuviste <span>' + puntacion + '</span> de <span>' + preguntasTotales + '</span> puntos <h/3>';
    
    for (let index = 1; index <= 5; index++) {
        document.getElementById('btnProced'+index).removeAttribute('hidden');
    }

    document.getElementById('reiniciar').removeAttribute('hidden');
    document.getElementById('repasar').removeAttribute('hidden');
    document.getElementById('inicio').removeAttribute('hidden');
    document.getElementById('siguiente').removeAttribute('hidden');

    return false;
}