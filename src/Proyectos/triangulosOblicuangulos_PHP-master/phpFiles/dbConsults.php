<?php
    include 'connection.php';

    $nombre = $_POST['username'];
    $pass = $_POST['password'];

    $result = $conn -> query("SELECT nombreUser, pass FROM usuarios WHERE nombreUser = '$nombre' AND pass = '$pass'");

    if ($result -> num_rows == 1) {
        while ($fila = $result -> fetch_assoc()) {
            $nombreUser = $fila["nombreUser"];
        }
    }

    $result -> close();
    $conn -> close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="../content/Nav/nav.css">
    <link rel="stylesheet" href="../content/Home/home.css">
    <link rel="stylesheet" href="../content/Main/main.css">
    <link rel="stylesheet" href="../content/Footer/footer.css">
    <title>Triangulos Oblicuangulos</title>
</head>
<body>
    <div id="mobileNav">
        <ul id="mobileNav_ul">
            <li class="mobileNav_li"><a class="mobileNav_a" href="#home" onclick="closeMobileMenu()">Home</a></li>
            <li class="mobileNav_li"><a class="mobileNav_a" href="#linkMain" onclick="closeMobileMenu()">Main Content</a></li>
            <li class="mobileNav_li"><a class="mobileNav_a" href="#footer" onclick="closeMobileMenu()">Info</a></li>
            <li class="mobileNav_li"><a class="mobileNav_a" href="../index.php" id="cerrarSesion" onclick="closeMobileMenu()">Cerrar Sesion</a></li>
        </ul>
    </div>
    <nav id="mainNav">
        <li id="logo"><div id="bienvenidaInicioSesion">Bienvenido de nuevo <?php echo $nombreUser ?>!!</div></li>
        <ul id="mainNav_ul">
            <li class="mainNav_li"><a class="mainNav_a" href="#home">Home</a></li>
            <li class="mainNav_li"><a class="mainNav_a" href="#linkMain">Main Content</a></li>
            <li class="mainNav_li"><a class="mainNav_a" href="#footer">Info</a></li>
            <li class="mainNav_li"><a class="mainNav_a" id="cerrarSesion">Cerrar Sesion</a></li>
        </ul>
        <span id="menuImg"><img src="../content/Nav/nav-images/menu.png" alt="menuImg" width="50px" onclick="openMobileMenu()"></span>
    </nav>
    <div id="iniciarSesion_window">
        <div id="iniciarSesionContent">
            <img src="../content/Main/main-images/x-mark.png" id="closeIcon_iniciarSesion" width="50px" alt="close" onclick="closeIniciarSesion_menu()">
            <p class="mainContent_title">Iniciar Sesion</p>
            <img src="../content/Nav/nav-images/user_color.png" alt="inicioSesion_img" width="100px">
            <br><br>
            <form action="phpFiles/dbConsults.php" name="formIniciarSesion" method="post">
                <strong>Nombre: </strong> <br><br>
                <input type="text" name="username" id="username">
                <br><br>
                <strong>Contraseña: </strong> <br><br>
                <input type="password" name="password" id="password">
                <br><br>
                <input type="submit" id="btn_iniciarSesion">
            </form>
            <br><br>
            <div id="link_registro">¿Eres Nuevo? <div id="registrarse">Registrate!</div></div>
        </div>
    </div>

    
    <div id="home">
        <div id="home-text">
            <br>
            RESUELVE TRIANGULOS OBLICUANGULOS USANDO...<br><br>
            LEY DE SENOS <br>
            a/sen(a) = b/sen(b) = c/sen(c) <br><br>
            LEY DE COSENOS <br>
            c^2 = a^2 + b^2 - 2ab Cos(C) <br>
            b^2 = a^2 + c^2 - 2ac Cos(B) <br>
            a^2 = b^2 + c^2 - 2bc Cos(A) <br>
            
            <br> <br> <a href="#linkMain"><img src="../content/Home/home-images/arrowDown.png" alt="resolver" id="arrowDown"/></a>
        </div>
    </div>
    <br><br><br>


    <div id="linkMain"></div>
    <div id="main">
        <div id="mainContent_content">
            <div class="mainContent_section" id="mainContent_first-section">
                <div class="rectangle"></div>
                <p class="mainContent_title">Resolver Triángulo Oblicuángulo Por Ley de Senos</p>
                <p class="mainContent_text">
                    La ley de los senos es la relación entre los lados y ángulos de triángulos no rectángulos (oblicuos). Simplemente, establece que la relación de la longitud de un lado de un triángulo al seno del ángulo opuesto a ese lado es igual para todos los lados y ángulos en un triángulo dado.
                    <br><br>
                    En ∆ABC es un triángulo oblicuo con lados a, b y c , entonces. <br> <img id="imgSenos" src="../content/Main/main-images/leySenos.gif" alt="leySenos">
                    <br><br>
                    <img id="imgTriangulos" src="../content/Main/main-images/triangulos.gif" alt="triangulos">
                    <br><br>
                    Para usar la ley de los senos necesita conocer ya sea dos ángulos y un lado del triángulo (AAL o ALA) o dos lados y un ángulo opuesto de uno de ellos (LLA).
                    Dese cuenta que para el primero de los dos casos usamos las mismas partes que utilizó para probar la congruencia de triángulos en geometría pero en el segundo caso no podríamos
                    probar los triángulos congruentes dadas esas partes. Esto es porque las partes faltantes podrían ser de diferentes tamaños. Esto es llamado el caso ambiguo y lo discutiremos más adelante.
                </p>
                <br>
                <p onclick="resolveTriangle_popUp(this)" class="mainContent_popUp-resolve" id="senos">Resolver Usando Ley de Senos</p>
            </div>
            <div id="popUp_resolverTriangle"></div>
            <div class="mainContent_section" id="mainContent_second-section">
                <div class="rectangle"></div>
                <p class="mainContent_title">Resolver Triángulo Oblicuángulo Por Ley de Cosenos</p>
                <p class="mainContent_text">
                    La ley de los cosenos es usada para encontrar las partes faltantes de un triángulo oblicuo (no rectángulo) cuando ya sea las medidas de dos lados y la medida del ángulo 
                    ncluído son conocidas (LAL) o las longitudes de los tres lados (LLL) son conocidas. En cualquiera de estos casos, es imposible usar la ley de los senos porque no podemos 
                    establecer una proporción que pueda resolverse.
                    <br><br>
                    <strong>La ley de los cosenos establece:</strong>
                    <br><br>
                    c 2 = a 2 + b 2 – 2 ab cos C .
                    <br><br>
                    Esto se parece al teorema de Pitágoras excepto que para el tercer término y si C es un ángulo recto el tercer término es igual 0 porque el coseno de 90° es 0 y 
                    se obtiene el teorema de Pitágoras. Así, el teorema de Pitágoras es un caso especial de la ley de los cosenos.
                    <br><br>
                    La ley de los cosenos también puede establecerse como
                    <br><br>
                    b 2 = a 2 + c 2 – 2 ac cos B or
                    <br>
                    a 2 = b 2 + c 2 – 2 bc cos A .
                </p>
                <br>
                <p onclick="resolveTriangle_popUp(this)" class="mainContent_popUp-resolve" id="cosenos">Resolver Usando Ley de Cosenos</p>
            </div>
        </div>
    </div>

    <div id="footer">
        <div id="footer_content">
            <div id="credits" class="footer_content-text">
                <br>
                <p class="mainContent_title">Créditos</p>
                <p class="mainContent_text">
                    Imagen utilizada en el HOME perteneciente a <a href="https://pixabay.com/es/users/denis_azarenko-1289618/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2484499" target="_blank">Denis Azarenko</a> en <a href="https://pixabay.com/es/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2484499" target="_blank">Pixabay</a>
                    <br><br>
                    <a target="_blank" href="https://icons8.com/icon/8113/menu">Menu</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                    <br><br>
                    Info usada en el MAIN CONTENT perteneciente a <a href="https://www.varsitytutors.com/" target="_blank" rel="noopener noreferrer">Varsitytutors</a>
                    <br>
                    <a href="https://www.varsitytutors.com/hotmath/hotmath_help/spanish/topics/law-of-sines" target="_blank" rel="noopener noreferrer">Info Ley de Senos</a>
                    <br>
                    <a href="https://www.varsitytutors.com/hotmath/hotmath_help/spanish/topics/law-of-cosines" target="_blank" rel="noopener noreferrer">Info Ley de Cosenos</a>
                </p>

            </div>
            <div id="socialMedia" class="footer_content-text">
                <br>
                <p class="mainContent_title">Redes Sociales</p>
                <p class="mainContent_text">
                    <a href="https://github.com/SourceRn" target="_blank" rel="noopener noreferrer">Sourcern</a> en <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a>
                </p>
            </div>
        </div>
    </div>

    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <script src="../content/Nav/nav.js"></script>
    <script src="../content/Main/main.js"></script>
</body>
</html>