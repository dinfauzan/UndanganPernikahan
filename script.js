document.addEventListener('DOMContentLoaded', () => {
    const openInvitationBtn = document.getElementById('open-invitation');
    const heroSection = document.getElementById('hero');
    const sections = document.querySelectorAll('.section.hidden');

    // Function to show sections with staggered animation
    const showSections = () => {
        heroSection.style.display = 'none'; // Hide the hero section
        let delay = 100;
        sections.forEach(section => {
            section.style.display = 'block'; // Make section visible
            setTimeout(() => {
                section.classList.add('visible'); // Add visible class for animation
            }, delay);
            delay += 200; // Stagger animation for each section
        });

        // Scroll to the top of the content after opening, or to a specific section
        window.scrollTo({
            top: 0, // Or document.getElementById('couple').offsetTop if you want to scroll to the first content section
            behavior: 'smooth'
        });
    };

    // Event listener for the "Buka Undangan" button
    if (openInvitationBtn) {
        openInvitationBtn.addEventListener('click', showSections);
    } else {
        // Fallback for direct page load if button not clicked (e.g. for testing)
        // If you always want to require the button click, remove this else block.
        // For debugging, you might temporarily uncomment a direct call to showSections() here.
        // showSections();
        console.warn("Tombol 'Buka Undangan' tidak ditemukan. Pastikan id='open-invitation' ada di HTML.");
    }


    // RSVP Form Submission (Frontend only example)
    const rsvpForm = document.getElementById('rsvp-form');
    const rsvpStatus = document.getElementById('rsvp-status');

    if (rsvpForm) {
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
            rsvpStatus.style.color = '#588157'; // Set color for success message
            rsvpForm.reset(); // Clear the form

            // Optionally, hide the form after submission
            // rsvpForm.style.display = 'none';
        });
    }

    // Copy to Clipboard functionality for Bank Details
    const copyButtons = document.querySelectorAll('.btn-copy');
    if (copyButtons.length > 0) {
        copyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const textToCopy = button.getAttribute('data-text');
                navigator.clipboard.writeText(textToCopy).then(() => {
                    button.textContent = 'Disalin!';
                    setTimeout(() => {
                        button.textContent = 'Salin No. Rekening';
                    }, 2000); // Reset button text after 2 seconds
                }).catch(err => {
                    console.error('Gagal menyalin teks: ', err);
                    alert('Gagal menyalin. Silakan salin manual: ' + textToCopy);
                });
            });
        });
    }
});
