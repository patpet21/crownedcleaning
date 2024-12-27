<?php
// Connessione al database
$servername = "localhost";
$username = "username"; // Sostituisci con il tuo username
$password = "password"; // Sostituisci con la tua password
$dbname = "database_name"; // Sostituisci con il nome del tuo database

$conn = new mysqli($servername, $username, $password, $dbname);

// Controlla la connessione
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepara e lega
$stmt = $conn->prepare("INSERT INTO bookings (service_type, date, time, full_name, email) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $service_type, $date, $time, $full_name, $email);

// Imposta i parametri e esegue
$service_type = $_POST['service_type'];
$date = $_POST['date'];
$time = $_POST['time'];
$full_name = $_POST['full_name'];
$email = $_POST['email'];

$stmt->execute();
$stmt->close();
$conn->close();

// Invia un'email di conferma (opzionale)
// mail($email, "Conferma Prenotazione", "La tua prenotazione è stata ricevuta.");

// Reindirizza a una pagina di conferma
header("Location: confirmation.php");
exit();
?>
