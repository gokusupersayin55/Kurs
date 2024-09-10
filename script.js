// Valgfritt: Legg til JavaScript hvis du har interaktive funksjoner

// Eksempel på en enkel formvalidering (kan utvides etter behov)
document.getElementById('booking-form').addEventListener('submit', function(event) {
    const contactInfo = document.getElementById('contact-info').value;
    if (!contactInfo) {
        alert('Vennligst legg inn e-post eller telefonnummer.');
        event.preventDefault();
    }
});
