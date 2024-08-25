document.addEventListener('DOMContentLoaded', () => {
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;
        const savedLanguage = localStorage.getItem('language') || 'en';
        switchLanguage(savedLanguage);

    // Get Menu Icon
    const menuIcon = document.getElementById('menuIcon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('active'); // Toggle Menu
        menuIcon.classList.toggle('active');
    });
    });
});