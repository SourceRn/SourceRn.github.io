function logoAnimation() {
    const SPAN = document.getElementById("changing_span");
    let span_strings = [
        "Rammses Nieves Gutierrez",
        "Programmer Student",
        "Projects"
    ];
    let span_value = 0;
    
    setInterval(() => {
        if(span_value > (span_strings.length - 1)) {
            span_value = 0;
            clearInterval(logoAnimation);
        }
        SPAN.innerHTML = span_strings[span_value];
        span_value += 1;
    }, 1500);
}

function carouselProjects() {
    const RECENT_PROJECTS_CONTAINER = document.getElementById("main_content");
    let projects = [{
        id: "src/Proyectos/encript_oracleOne/inicio.html",
        name: "Encriptador | Oracle One Next Education",
        title: "Project - Encriptador",
        html_id: "recent_projects-first",
        logo_ubication: {
            logo_class: "project_logo",
            src: "src/Proyectos/encript_oracleOne/text_left_color.gif",
            width: "300px"
        }
    }, {
        id: "src/Proyectos/Exani-II-Matematicas-master/index.html",
        name: "MATEXANI II",
        title: "Project - Matexani",
        html_id: "recent_projects-second",
        logo_ubication: {
            logo_class: "project_logo",
            src: "src/Proyectos/Exani-II-Matematicas-master/src/images/index/MiLogo.png",
            width: "300px"
        }
    }, {
        id: "src/Proyectos/triangulosOblicuangulos_PHP-master/index.php",
        name: "Resolución de Triangulos Oblicuos",
        title: "Project - Triangulos Oblicuos",
        html_id: "recent_projects-third",
        logo_ubication: {
            logo_class: "project_logo",
            src: "src/Proyectos/triangulosOblicuangulos_PHP-master/content/Nav/nav-images/logo.png",
            width: "300px"
        }
    }];
    let projects_cont = 0;


    setInterval(() => {
        if (projects_cont > (projects.length - 1)) {
            projects_cont = 0;
            clearInterval();
        } else {
            RECENT_PROJECTS_CONTAINER.innerHTML = `
                <div id="${projects[projects_cont].html_id}" class="recent_projects">
                    <p class="title">${projects[projects_cont].title}</p> <br><br>
                    <ul>
                        <li><a href="${projects[projects_cont].id}">${projects[projects_cont].name}</a></li>
                        <li><a href="${projects[projects_cont].id}">
                                <img 
                                    src="${projects[projects_cont].logo_ubication.src}" 
                                    width = "${projects[projects_cont].logo_ubication.width}" 
                                    class="${projects[projects_cont].logo_ubication.logo_class}"
                                />
                            </a></li>
                    </ul>
                </div>
            `;
            projects_cont += 1;
        }

    }, 2000);
}

function shortCodes() {
    let short_codes = document.getElementById("short_codes");
    const arr_short_codes = [{
        id: "src/codes/Figuras/index.html",
        name: "Figuras. Calculo Perimetros y Areas",
        html_id: "short_codes-calculoFigurasPermitrosAreas"
    }];

    short_codes.innerHTML = `
        <ul id="short_code-ul">
            <li class="title" id="short_code-title">Short Codes</li>
            ${arr_short_codes.map(code => `<li class="short_code-li"><a href="${code.id}" id="${code.html_id}" class="short_code-link">${code.name}</a></li>`).join('')}
        </ul>
    `;
}

shortCodes();
carouselProjects();
logoAnimation();