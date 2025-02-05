<?php
include 'db.php';
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $conn->real_escape_string($_POST['email']);
    $contraseña = $_POST['contraseña'];

    $stmt = $conn->prepare("SELECT id, nombre, contraseña FROM usuarios WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $nombre, $hashed_password);
        $stmt->fetch();

        if (password_verify($contraseña, $hashed_password)) {
            $_SESSION['user_id'] = $id;
            $_SESSION['user_name'] = $nombre;
            header("Location: main.php");
            exit();
        } else {
            echo "Contraseña incorrecta. Inténtalo de nuevo.";
        }
    } else {
        echo "Correo electrónico no registrado.";
    }
    $stmt->close();
    $conn->close();
} else {
    header("Location: login.php");
    exit();
}
?>
