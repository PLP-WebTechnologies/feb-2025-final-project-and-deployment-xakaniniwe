// Array of review data
const reviewData = [
    {
        author: "John Smith",
        rating: 5,
        comment: "Excellent service and beautiful location. Highly recommended!",
    },
    {
        author: "Jane Doe",
        rating: 4,
        comment: "Comfortable accommodation and friendly staff. Will definitely return.",
    },
    {
        author: "David Johnson",
        rating: 5,
        comment: "The game reserve experience was unforgettable. A truly amazing place.",
    },
    {
        author: "Sarah Williams",
        rating: 4,
        comment: "The spa treatments were wonderful and relaxing. I feel very refreshed.",
    },
    {
        author: "Michael Brown",
        rating: 5,
        comment: "A perfect getaway! The lodge exceeded all our expectations.",
    },
];

// Get the review container from the DOM
const reviewContainer = document.getElementById("review-container");

// Function to generate star ratings based on the review rating
function generateReviewStars(rating) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
        stars += `<i class="fas fa-star ${i < rating ? "text-yellow-400" : "text-gray-300"}"></i>`;
    }
    return stars;
}

// Function to display all reviews on the page
function displayReviews() {
    reviewData.forEach((review) => {
        const reviewCard = document.createElement("div");
        reviewCard.className = "review-card";
        reviewCard.innerHTML = `
            <div class="review-author">${review.author}</div>
            <div class="review-rating">${generateReviewStars(review.rating)}</div>
            <p class="review-comment">${review.comment}</p>
        `;
        reviewContainer.appendChild(reviewCard);
    });
}

// Event listener for window load to display reviews and handle form submission
window.onload = function () {
    displayReviews(); // Call to display reviews

    const enquiryForm = document.getElementById("enquiry-form");
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve values from the form fields
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const checkInDate = document.getElementById("check-in").value;
        const checkOutDate = document.getElementById("check-out").value;
        const message = document.getElementById("message").value;

        // Basic validation (you can add more robust validation)
        if (!name || !email || !checkInDate || !checkOutDate || !message) {
            alert("Please fill in all fields.");
            return; // Exit function if validation fails
        }
        // ... (rest of your form submission logic, if any) ...
    });

    // Slideshow functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove("active");
            if (index === currentSlide) {
                slide.classList.add("active");
            }
        });
    }

    function changeSlide(direction) {
        currentSlide += direction;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        } else if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        updateSlides();
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener("click", () => changeSlide(-1));
        nextButton.addEventListener("click", () => changeSlide(1));
    }

    setInterval(() => changeSlide(1), 3000);
};

// Email validation function
function validateEmail() {
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.display = "block";
        return false;
    } else {
        errorMessage.style.display = "none";
        return true;
    }
}
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let slideInterval;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            slide.style.display = 'none'; // Ensure display: none is set
            if (index === currentSlide) {
                slide.classList.add('active');
                slide.style.display = 'block'; // Explicitly set display: block
            }
        });
    }

    function changeSlide(direction) {
        currentSlide += direction;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        } else if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        updateSlides();
    }

    function startSlideshow() {
        updateSlides(); // Show the first slide
        slideInterval = setInterval(() => changeSlide(1), 3000);
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => changeSlide(-1));
        nextButton.addEventListener('click', () => changeSlide(1));
    }

    startSlideshow(); // Start the slideshow when the page loads

    // Mobile menu toggle functionality (optional, if you have the button)
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('open');
        });
    }
});