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

$sql = "SELECT * FROM bookings";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table><tr><th>Tipo di Servizio</th><th>Data</th><th>Ora</th><th>Nome Completo</th><th>Email</th></tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["service_type"]. "</td><td>" . $row["date"]. "</td><td>" . $row["time"]. "</td><td>" . $row["full_name"]. "</td><td>" . $row["email"]. "</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}
$conn->close();
?>
