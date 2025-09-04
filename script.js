// Add any interactivity for the landing page here.
// For example, smooth scrolling for anchor links, animations, etc.

document.addEventListener('DOMContentLoaded', () => {
    // Example of smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
