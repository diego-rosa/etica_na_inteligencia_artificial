document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('fine-print-modal');
    const btn = document.getElementById('fine-print-btn');
    const closeBtn = document.querySelector('.close');

    btn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        // Add a small animation effect or delay if needed
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
