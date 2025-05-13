document.addEventListener('DOMContentLoaded', function() {
    const startSlideshowButton = document.getElementById('startSlideshow');
    const aboutSlideshow = document.getElementById('aboutSlideshow');
    let slideIndex = 0;
    let slideshowInterval;

    // Initially hide the slideshow
    aboutSlideshow.style.display = 'none';

    function showSlides() {
        let i;
        const slides = aboutSlideshow.getElementsByClassName('slides');
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
    }

    startSlideshowButton.addEventListener('click', function() {
        // If the slideshow is currently hidden, start it
        if (aboutSlideshow.style.display === 'none') {
            aboutSlideshow.style.display = 'block';
            showSlides(); // Show the first slide immediately
            slideshowInterval = setInterval(showSlides, 2000); // Change slide every 2 seconds (adjust as needed)
            startSlideshowButton.textContent = 'Stop Slide Show 🛑'; // Update button text
        } else {
            // If the slideshow is visible, stop it
            clearInterval(slideshowInterval);
            aboutSlideshow.style.display = 'none';
            startSlideshowButton.textContent = '🐻 Slide Show'; // Revert button text
            slideIndex = 0; // Reset slide index
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
        });
    }
});