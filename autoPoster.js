document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.img-container .image');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    let currentIndex = 0;
    const intervalTime = 3000;
    let autoSlide;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('image-active', i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    // Auto animation
    function startAutoSlide() {
        autoSlide = setInterval(nextImage, intervalTime);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    // Manual animation
    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        nextImage();
        startAutoSlide();
    })

    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        prevImage();
        startAutoSlide();
    })

    // Initialize Animation
    showImage(currentIndex);
    startAutoSlide();
});
