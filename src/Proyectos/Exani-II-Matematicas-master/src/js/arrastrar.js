let screenWidth = screen.width;
let imgOptions = [  "../src/images/index/multDivision.png", 
                    "../src/images/index/parentesis.png",
                    "../src/images/index/potencias.png",
                    "../src/images/index/sumaResta.png"];
let amountSquares = 4;
let totalPoints = 4;
let answers_correctOrder = ["opt1", "opt2", "opt0", "opt3"];
let answersGet_it_from_User = [];
let rtrnHTML_code_withFunction = 1;
let rtrnHTML_code_withoutFunction = 0;
let rtrnHTML_code_withoutFunction_withAnimation = 10;
let makeVisible_btnDeshacer = 1;
let unmakeVisible_btnDeshacer = 0;
let score = 0;


function getHTML_code_of_ImageElement(imageSource, imageID, rtrnHTML_code_condition){
    if (rtrnHTML_code_condition == 1) {
        return `<img src="${imageSource}" class="cursorPointer imgStyles" id="${imageID}" onclick="imagesAppear_and_Disappear(this)">`;
    } else if(rtrnHTML_code_condition == 0) {
        return `<img src="${imageSource}" class="cursorPointer imgStyles" id="${imageID}">`;
    } else if (rtrnHTML_code_condition == 10){
        return `<img src="${imageSource}" class="cursorPointer imgStyles optImageAnimationAppear" id="${imageID}">`;
    } else {
        return "It's needed any of this three arguments: '1', '0', '10'. In the function 'getHTML_code_of_ImageElement'";
    }
}

function getUserScore(answersGet_it_from_User, answers_correctOrder){
    for (let i = 0; i < answers_correctOrder.length; i++) {
        if (answersGet_it_from_User[i] == answers_correctOrder[i]) {
            score += 1;
        }
    }
    return score;
}

function insertIMG_optionsInArrastarHTML(imgOptions){
    for (let i = 0; i < imgOptions.length; i++) {
        let imageID = `opt${i}`;
        let imageSource = imgOptions[i];
        document.getElementById(`optImg${i}`).innerHTML = getHTML_code_of_ImageElement(imageSource, imageID, rtrnHTML_code_withFunction);
    }
}

function writeResponsiveHTML_for_ArrastarHTML(){
    if (screenWidth >= 768) {
        document.getElementById('arrastarContainer').innerHTML = `
        <div class="row">
            <div class="col-md-6 bigTitleSpace" id="titleSpace1">1</div>
            <div class="col-md-6 bigTitleSpace" id="titleSpace2">2</div>
        </div>
        <br>
        <div class="row">
            <div class="col-md-6 imgSquares" id="space1"></div>
            <div class="col-md-6 imgSquares" id="space2"></div>
        </div>

        <br>

        <div class="row">
            <div class="col-md-6 bigTitleSpace" id="titleSpace3">3</div>
            <div class="col-md-6 bigTitleSpace" id="titleSpace4">4</div>
        </div>
        <br>
        <div class="row">
            <div class="col-md-6 imgSquares" id="space3"></div>
            <div class="col-md-6 imgSquares" id="space4"></div>
        </div>
    `;
    } else {
        document.getElementById('arrastarContainer').innerHTML = `
        <div class="row">
            <div class="col-md-6 bigTitleSpace" id="titleSpace1">1</div>
            <div class="col-md-6 imgSquares" id="space1"></div>

            <div class="col-md-6 bigTitleSpace" id="titleSpace2">2</div>
            <div class="col-md-6 imgSquares" id="space2"></div>
        </div>
        <br>
        <div class="row">
            <div class="col-md-6 bigTitleSpace" id="titleSpace3">3</div>
            <div class="col-md-6 imgSquares" id="space3"></div>

            <div class="col-md-6 bigTitleSpace" id="titleSpace4">4</div>
            <div class="col-md-6 imgSquares" id="space4"></div>
        </div>
    `;
    }
}

function animationIMG_disappear(HTMLelement){
    let imageID = HTMLelement.getAttribute("id", "");
    let image_HTMLelement = document.getElementById(imageID);
    image_HTMLelement.setAttribute("class", "optImageAnimationDisappear");
    setTimeout(() => { image_HTMLelement.setAttribute("hidden", ""); }, 300);
}

function appearImages_in_squares(HTMLelement){
    let imageID = HTMLelement.getAttribute("id", "");
    let imageSource = HTMLelement.getAttribute("src", "");

    if (document.getElementById("space1").innerHTML == "") {
        document.getElementById("space1").innerHTML =  `${getHTML_code_of_ImageElement(imageSource, imageID, rtrnHTML_code_withoutFunction_withAnimation)}`;
    } else if( document.getElementById("space2").innerHTML == "") {
        document.getElementById("space2").innerHTML =  `${getHTML_code_of_ImageElement(imageSource, imageID, rtrnHTML_code_withoutFunction_withAnimation)}`;
    } else if( document.getElementById("space3").innerHTML == "") {
        document.getElementById("space3").innerHTML =  `${getHTML_code_of_ImageElement(imageSource, imageID, rtrnHTML_code_withoutFunction_withAnimation)}`;
    } else if( document.getElementById("space4").innerHTML == "") {
        document.getElementById("space4").innerHTML =  `${getHTML_code_of_ImageElement(imageSource, imageID, rtrnHTML_code_withoutFunction_withAnimation)}`;
    }
    answersGet_it_from_User.push(imageID);
}

function imagesAppear_and_Disappear(HTMLelement){
    animationIMG_disappear(HTMLelement);
    appearImages_in_squares(HTMLelement);
    visibility_btn_Deshacer(makeVisible_btnDeshacer);
}

function deshacerChanges(){
    answersGet_it_from_User = [];
    writeResponsiveHTML_for_ArrastarHTML();
    insertIMG_optionsInArrastarHTML(imgOptions);
    setTimeout(() => { visibility_btn_Deshacer(unmakeVisible_btnDeshacer); }, 500);
}

function visibility_btn_Deshacer(condition){
    if (condition == 1) {
        document.getElementById("btnDeshacer").removeAttribute("hidden");
    } else if (condition == 0) {
        document.getElementById("btnDeshacer").setAttribute("hidden", "");
    }
}

function removeAttributes_for_buttons(){
    document.getElementById("verificar").removeAttribute("hidden");
    document.getElementById("reiniciar").removeAttribute("hidden");
    document.getElementById("volver").removeAttribute("hidden");
    document.getElementById("siguiente").removeAttribute("hidden");
}

function validacion(){
    document.getElementById("resultado").innerHTML = `<h3> Obtuviste <span> ${getUserScore(answersGet_it_from_User, answers_correctOrder)} </span> <span> de ${totalPoints} </span> puntos </h3>`;
    visibility_btn_Deshacer(unmakeVisible_btnDeshacer);
    removeAttributes_for_buttons();
}

writeResponsiveHTML_for_ArrastarHTML();
insertIMG_optionsInArrastarHTML(imgOptions);