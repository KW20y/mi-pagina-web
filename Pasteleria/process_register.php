<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $conn->real_escape_string($_POST['nombre']);
    $email = $conn->real_escape_string($_POST['email']);
    $contraseña_plain = $_POST['contraseña'];
    $telefono = $conn->real_escape_string($_POST['telefono']);

    $checkEmail = $conn->prepare("SELECT id FROM usuarios WHERE email = ?");
    $checkEmail->bind_param("s", $email);
    $checkEmail->execute();
    $checkEmail->store_result();

    if ($checkEmail->num_rows > 0) {
        echo "El correo electrónico ya está registrado. Por favor, intenta con otro.";
        $checkEmail->close();
    } else {
        $checkEmail->close();
        $contraseña_hash = password_hash($contraseña_plain, PASSWORD_DEFAULT);

        $stmt = $conn->prepare("INSERT INTO usuarios (nombre, email, contraseña, telefono) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $nombre, $email, $contraseña_hash, $telefono);

        if ($stmt->execute()) {
            header("Location: login.php");
            exit();
        } else {
            echo "Error: " . $stmt->error;
        }
        $stmt->close();
    }
    $conn->close();
} else {
    header("Location: register.php");
    exit();
}
?>

