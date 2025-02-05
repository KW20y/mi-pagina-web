<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Bienvenido - Pastelería Deliciosa</title>
    <link rel="stylesheet" href="css/styles.css">
    <script src="js/script.js" defer></script>
</head>
<body>
    <header>
        <h1>Bienvenido, <?php echo $_SESSION['user_name']; ?> - Pastelería Deliciosa</h1>
        <nav>
            <ul>
                <li><a href="#inicio" onclick="mostrarSeccion('inicio')">Inicio</a></li>
                <li><a href="#nosotros" onclick="mostrarSeccion('nosotros')">Sobre Nosotros</a></li>
                <li><a href="#productos" onclick="mostrarSeccion('productos')">Productos</a></li>
                <li><a href="#contacto" onclick="mostrarSeccion('contacto')">Contacto</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="contenido-principal">
            <!-- Contenido dinámico cargado por JavaScript -->
        </section>
    </main>
    <footer>
        <p>&copy; 2025 Pastelería Deliciosa</p>
    </footer>
</body>
</html>
