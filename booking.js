document.addEventListener('DOMContentLoaded', function() {
    // Imposta la data minima a oggi
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;

    // Popola gli orari disponibili
    const timeSelect = document.getElementById('time');
    const timeSlots = [
        '09:00', '10:00', '11:00', '12:00', '13:00',
        '14:00', '15:00', '16:00', '17:00'
    ];

    timeSlots.forEach(slot => {
        const option = document.createElement('option');
        option.value = slot;
        option.textContent = slot;
        timeSelect.appendChild(option);
    });

    // Gestisci l'invio del form
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Previene l'invio al PHP
        
        // Crea l'oggetto prenotazione
        const booking = {
            id: Date.now().toString(), // ID unico
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            service: document.getElementById('service-type').value,
            name: document.getElementById('full-name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            notes: document.getElementById('notes').value,
            status: 'pending',
            created: new Date().toISOString()
        };

        // Salva la prenotazione nel localStorage
        const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(bookings));

        // Mostra messaggio di conferma
        alert('Booking submitted successfully!');
        this.reset(); // Resetta il form
    });
});
