// Initialize smooth scrolling and back-to-top functionality
document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor click behavior
            const targetSectionId = link.getAttribute('href').slice(1); // Get the target section ID
            const targetSection = document.getElementById(targetSectionId); // Find the target section

            if (targetSection) {
                const scrollPosition = targetSection.getBoundingClientRect().top + window.scrollY; // Calculate scroll position
                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth' // Smooth scroll effect
                });
            }
        });
    });

    // Create a 'Back to Top' button
    const topButton = document.createElement('button');
    topButton.textContent = '↑ Top';
    topButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        display: none;
        padding: 12px 18px;
        background-color: #28a745;
        color: #fff;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        z-index: 999;
        transition: opacity 0.3s;
    `;
    document.body.appendChild(topButton); // Add button to the body

    // Show or hide button based on scroll position
    window.addEventListener('scroll', () => {
        topButton.style.display = window.scrollY > 250 ? 'block' : 'none'; // Toggle button visibility
    });

    // Scroll to top when button is clicked
    topButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll to top
        });
    });
});
