function switchLanguage(language) {
    document.querySelectorAll('[data-en]').forEach(element => {
        element.innerText = element.getAttribute('data-' + language);
    });
    localStorage.setItem('language', language);
    if (language == 'cn') {
        document.getElementById('logo-nihonga').style.top = '70%'
        document.getElementById('logo-crayon').style.top = '70%'
        document.getElementById('logo-caricature').style.top = '70%'
        document.getElementById('logo-about').style.top = '70%'
        document.body.style.fontFamily = '"Noto Serif", serif';
        // document.getElementById('header').style.fontFamily
        // document.getElementById('contact-title').style.fontSize = '25px';
    }
    else {
        document.getElementById('logo-nihonga').style.top = '50%'
        document.getElementById('logo-crayon').style.top = '50%'
        document.getElementById('logo-caricature').style.top = '50%'
        document.getElementById('logo-about').style.top = '50%'
        document.body.style.fontFamily = '"Arsenal SC", sans-serif';
    }
}

// Saved language first.
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('language') || 'en';
    switchLanguage(savedLanguage);
});
