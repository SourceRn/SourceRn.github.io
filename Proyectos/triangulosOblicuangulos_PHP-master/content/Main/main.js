const window_resolveTriangle = document.getElementById("popUp_resolverTriangle");

function popUpFor_cosenosORsenos(ley_senosORcosenos){
    if (ley_senosORcosenos == "senos") {
        window_resolveTriangle.style.display = "block";
        setTimeout(() => {
            window_resolveTriangle.innerHTML = `
            <img src="content/Main/main-images/x-mark.png" id="closeIcon_resolveTriangle" width="50px" alt="close" onclick="close_popUpFor_triangle()">
            <div id="white_line"><p class="title_window_resolveTriangle">Resolver Triangulos Oblicuangulos Por Ley de Senos</p></div>
            <br><br>
            <strong>Los datos con los que no cuente dejelos vacios!! <br>
            ¡Recuerde! Para usar la ley de senos es necesario conocer AAL, ALA, o LLA
            </strong>
            <div id="formContainer">
                <div class="questionContainer" id="input_lados">
                    <p class="question_ToDo_triangle">Ingrese el valor del lado --> a</p>
                    <input type="text" name="lado_a" id="lado_a">
                    <p class="question_ToDo_triangle">Ingrese el valor del lado --> b</p>
                    <input type="text" name="lado_b" id="lado_b">
                    <p class="question_ToDo_triangle">Ingrese el valor del lado --> c</p>
                    <input type="text" name="lado_c" id="lado_c">
                </div>
                <div class="questionContainer" id="input_angulos">
                    <p class="question_ToDo_triangle">Ingrese el valor del angulo --> A</p>
                    <input type="text" name="angulo_A" id="angulo_A">
                    <p class="question_ToDo_triangle">Ingrese el valor del angulo --> B</p>
                    <input type="text" name="angulo_B" id="angulo_B">
                    <p class="question_ToDo_triangle">Ingrese el valor del angulo --> C</p>
                    <input type="text" name="angulo_C" id="angulo_C">
                    <br><br><br>
                </div>
                <div onclick="resolverTriangle()" id="btn_resolverTriangle">Resolver Triangulo</div>
            </div>
            <div id="resultados"></div>
        `; 
        }, 1000);
    } else if (ley_senosORcosenos == "cosenos"){
        window_resolveTriangle.style.display = "block";
        setTimeout(() => {
            window_resolveTriangle.innerHTML = `
            <img src="content/Main/main-images/x-mark.png" id="closeIcon_resolveTriangle" width="50px" alt="close" onclick="close_popUpFor_triangle()">
            <div id="white_line"><p class="title_window_resolveTriangle">Resolver Triangulos Oblicuangulos Por Ley de Cosenos</p></div>
            <br><br>
            <strong>Los datos con los que no cuente dejelos vacios!!
            </strong>
            <div id="formContainer">
                <div class="questionContainer" id="input_lados">
                    <p class="question_ToDo_triangle">Ingrese el valor del lado --> a</p>
                    <input type="text" name="lado_a" id="lado_a">
                    <p class="question_ToDo_triangle">Ingrese el valor del lado --> b</p>
                    <input type="text" name="lado_b" id="lado_b">
                    <p class="question_ToDo_triangle">Ingrese el valor del lado --> c</p>
                    <input type="text" name="lado_c" id="lado_c">
                </div>
                <div class="questionContainer" id="input_angulos">
                    <p class="question_ToDo_triangle">Ingrese el valor del angulo --> A</p>
                    <input type="text" name="angulo_A" id="angulo_A">
                    <p class="question_ToDo_triangle">Ingrese el valor del angulo --> B</p>
                    <input type="text" name="angulo_B" id="angulo_B">
                    <p class="question_ToDo_triangle">Ingrese el valor del angulo --> C</p>
                    <input type="text" name="angulo_C" id="angulo_C">
                    <br><br><br>
                </div>
                <div onclick="resolverTriangle()" id="btn_resolverTriangle">Resolver Triangulo</div>
            </div>
            <div id="resultados"></div>
        `;
        }, 1000);
    }
}

function getLey(HTML_ELEMENT_ID){
    var ley_obtained = HTML_ELEMENT_ID.getAttribute("id");
    return ley_obtained;
}

function resolveTriangle_popUp(id){
    ley = getLey(id);
    popUpFor_cosenosORsenos(ley);
}

function close_popUpFor_triangle(){
    window_resolveTriangle.innerHTML = "";
    window_resolveTriangle.style.display = "none";
}

function resolverTriangle(){
    var lado_a = document.getElementById("lado_a").value;
    var lado_b = document.getElementById("lado_b").value;
    var lado_c = document.getElementById("lado_c").value;
    var angulo_A = document.getElementById("angulo_A").value;
    var angulo_B = document.getElementById("angulo_B").value;
    var angulo_C = document.getElementById("angulo_C").value;
    resolverTriangle_senos(lado_a, lado_b, lado_c, angulo_A, angulo_B, angulo_C);
    //resultados = [lado_a];
    //writeResultados_in_divResultados(resultados)
}

function writeResultados_in_divResultados(resultados){
    document.getElementById("resultados").innerHTML = `
        <p>El valor del lado "a" es: ${resultados[0]} </p> <br>
        <p>El valor del lado "b" es: ${resultados[1]} </p> <br>
        <p>El valor del lado "c" es: ${resultados[2]} </p> <br>
        <p>El valor del angulo "A" es: ${resultados[3]} </p> <br>
        <p>El valor del angulo "B" es: ${resultados[4]} </p> <br>
        <p>El valor del angulo "C" es: ${resultados[5]} </p> <br>
    `;
}

function resolverTriangle_senos(lado_a, lado_b, lado_c, angulo_A, angulo_B, angulo_C){
    writeResultados_in_divResultados(resolverTriangle_senos_LLA(lado_a, lado_b, lado_c, angulo_A, angulo_B, angulo_C));
}

function resolverTriangle_senos_LLA(lado_a, lado_b, lado_c, angulo_A, angulo_B, angulo_C){
    if (lado_a != "" && lado_b != "" && lado_c == "" && angulo_A != "" && angulo_B == "" && angulo_C == "") {

    } else if (lado_a != "" && lado_b != "" && lado_c == "" && angulo_A == "" && angulo_B != "" && angulo_C == ""){
        
    } else if (lado_a != "" && lado_b != "" && lado_c == "" && angulo_A == "" && angulo_B == "" && angulo_C != ""){
        console.log("a,b,C");
    } else if (lado_a == "" && lado_b != "" && lado_c != "" && angulo_A != "" && angulo_B == "" && angulo_C == ""){
        console.log("b,c,A");
    } else if (lado_a == "" && lado_b != "" && lado_c != "" && angulo_A == "" && angulo_B != "" && angulo_C == ""){
        console.log("b,c,B");
    } else if (lado_a == "" && lado_b != "" && lado_c != "" && angulo_A == "" && angulo_B == "" && angulo_C != ""){
        console.log("b,c,C");
    } else if (lado_a != "" && lado_b == "" && lado_c != "" && angulo_A != "" && angulo_B == "" && angulo_C == ""){
        console.log("a,c,A");
    } else if (lado_a != "" && lado_b == "" && lado_c != "" && angulo_A == "" && angulo_B == "" && angulo_C != ""){
        console.log("a,c,C");
    } else {
        console.log("Esa combinacion pertence a la ley de cosenos!!");
    }
}

function convertRadians_to_degrees(rad){
    var degrees =  rad * (180 / Math.PI);

    return degrees;
}