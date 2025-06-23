document.addEventListener('DOMContentLoaded', () => {
    const openInvitationBtn = document.getElementById('open-invitation');
    const heroSection = document.getElementById('hero');
    const sections = document.querySelectorAll('.section.hidden'); // Get all initially hidden sections

    openInvitationBtn.addEventListener('click', () => {
        heroSection.style.display = 'none'; // Hide the hero section

        sections.forEach(section => {
            section.style.display = 'block'; // Make hidden sections visible
        });

        // Add 'visible' class with a slight delay for animation effect
        let delay = 100;
        sections.forEach(section => {
            setTimeout(() => {
                section.classList.add('visible');
            }, delay);
            delay += 200; // Stagger animation for each section
        });

        // Scroll to the top of the content after opening
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // RSVP Form Submission (Frontend only example)
    const rsvpForm = document.getElementById('rsvp-form');
    const rsvpStatus = document.getElementById('rsvp-status');

    rsvpForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const attendeeCount = document.getElementById('attendee-count').value;
        const message = document.getElementById('message').value;

        // In a real application, you would send this data to a server (e.g., using fetch API)
        // For demonstration, we'll just display a success message.

        console.log({
            name: name,
            attendeeCount: attendeeCount,
            message: message
        });

        rsvpStatus.textContent = `Terima kasih, ${name}! Konfirmasi kehadiran Anda (${attendeeCount} orang) telah kami terima.`;
        rsvpForm.reset(); // Clear the form
    });
});