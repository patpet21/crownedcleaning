// Password di admin (cambiala con una password sicura)
const ADMIN_PASSWORD = "test123";

function checkPassword() {
    const password = document.getElementById('adminPassword').value;
    if (password === ADMIN_PASSWORD) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        loadBookings();
    } else {
        alert('Password non corretta');
    }
}

// Carica le prenotazioni dal localStorage
function loadBookings() {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const bookingsList = document.getElementById('bookingsList');
    bookingsList.innerHTML = '';

    bookings.forEach(booking => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.date}</td>
            <td>${booking.time}</td>
            <td>${booking.service}</td>
            <td>${booking.name}</td>
            <td>${booking.email}<br>${booking.phone}</td>
            <td>
                <span class="booking-status status-${booking.status.toLowerCase()}">
                    ${booking.status}
                </span>
            </td>
            <td>
                <button onclick="updateStatus('${booking.id}', 'confirmed')">Confirm</button>
                <button onclick="updateStatus('${booking.id}', 'completed')">Complete</button>
                <button onclick="deleteBooking('${booking.id}')">Delete</button>
            </td>
        `;
        bookingsList.appendChild(row);
    });
}

// Aggiorna lo stato di una prenotazione
function updateStatus(bookingId, newStatus) {
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings = bookings.map(booking => {
        if (booking.id === bookingId) {
            return { ...booking, status: newStatus };
        }
        return booking;
    });
    localStorage.setItem('bookings', JSON.stringify(bookings));
    loadBookings();
}

// Elimina una prenotazione
function deleteBooking(bookingId) {
    if (confirm('Sei sicuro di voler eliminare questa prenotazione?')) {
        let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookings = bookings.filter(booking => booking.id !== bookingId);
        localStorage.setItem('bookings', JSON.stringify(bookings));
        loadBookings();
    }
}

// Aggiungi questa funzione per pulire tutte le prenotazioni (utile per i test)
function clearAllBookings() {
    if (confirm('Sei sicuro di voler eliminare tutte le prenotazioni?')) {
        localStorage.removeItem('bookings');
        loadBookings();
    }
}
