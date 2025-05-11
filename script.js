console.log("JavaScript file is loaded!");
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
    reviewContainer.innerHTML = ""; // Clear previous reviews
    reviewData.forEach((review) => {
        const reviewCard = document.createElement("div");
        reviewCard.className = "review-card mb-4 p-4 border rounded";
        reviewCard.innerHTML = `
            <div class="review-author">${review.author}</div>
            <div class="review-rating">${generateReviewStars(review.rating)}</div>
            <p class="review-comment">${review.comment}</p>
        `;
        reviewContainer.appendChild(reviewCard);
    });
}

// Function to handle form submission
document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    const author = document.getElementById("author").value;
    const rating = parseInt(document.getElementById("rating").value);
    const comment = document.getElementById("comment").value;

    // Add the new review to the reviewData array
    reviewData.push({ author, rating, comment });

    // Reset the form fields
    this.reset();

    // Display updated reviews
    displayReviews();
});

// Call the function to display reviews when the page loads
document.addEventListener('DOMContentLoaded', displayReviews);

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

        // Simulate sending email (replace with actual backend logic)
        const enquiryDetails = {
            name: name,
            email: email,
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            message: message,
        };

        console.log("Enquiry Details:", enquiryDetails); // Log enquiry details
        alert("Your enquiry has been sent! We will get back to you shortly."); // Confirmation alert
        enquiryForm.reset(); // Reset the form fields
    });
};

// Event listener for navigating links to highlight active link
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active")); // Remove active class from all links
            this.classList.add("active"); // Add active class to the clicked link
        });
    });
});

// Function to store user preferences in localStorage
function saveUserPreference(key, value) {
    localStorage.setItem(key, value);
}

// Function to retrieve user preferences from localStorage
function getUserPreference(key) {
    return localStorage.getItem(key);
}

// Function to trigger an animation by adding a class
function triggerAnimation(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add('animate'); // Add animation class

        // Remove the class after the animation ends for repeated triggers
        element.addEventListener('animationend', () => {
            element.classList.remove('animate');
        });
    }
}

// Example usage of user preference and animation
document.addEventListener('DOMContentLoaded', () => {
    // Save a user preference (for example, theme)
    saveUserPreference('theme', 'dark');

    // Retrieve and log the user preference
    const userTheme = getUserPreference('theme');
    console.log('User theme preference:', userTheme);

    // Trigger an animation when a button is clicked
    const button = document.getElementById('animateButton');
    button.addEventListener('click', () => {
        triggerAnimation('animatedElement'); // Trigger animation on the specified element
    });
});

// Slideshow functionality
let slideIndex = 0; // Initialize slide index
let slideshowActive = false; // Track slideshow state

function showSlides() {
    const slides = document.getElementsByClassName("slides");
    if (slides.length > 0) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; // Hide all slides
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; } // Loop back to the first slide
        slides[slideIndex - 1].style.display = "block"; // Show the current slide
    }
}

// Function to start the slideshow
function startSlideshow() {
    const slideshow = document.querySelector('.slideshow');
    slideshow.style.display = "block"; // Show the slideshow
    slideshowActive = true;
    showSlides(); // Show the first slide
    setInterval(showSlides, 3000); // Change slide every 3 seconds
}

// Event listener for the slideshow button
document.getElementById('animateButton').addEventListener('click', () => {
    if (!slideshowActive) {
        startSlideshow(); // Start the slideshow if not already active
    }
});

// Email validation function
function validateEmail() {
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');

    // Regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        errorMessage.textContent = 'Please enter a valid email address.'; // Set error message
        errorMessage.style.display = 'block'; // Show the error message
        return false; // Prevent form submission
    } else {
        errorMessage.style.display = 'none'; // Hide the error message
        return true; // Allow form submission
    }
}


const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let counter = 0;
const slideWidth = slides[0].offsetWidth; // Get the width of a single slide

// Set the initial position of the carousel container
carouselContainer.style.transform = `translateX(-${slideWidth * counter}px)`;

function changeSlide(direction) {
    if (direction === 1) {
        counter++;
        if (counter >= slides.length) {
            counter = 0; // Loop back to the first slide
        }
    } else if (direction === -1) {
        counter--;
        if (counter < 0) {
            counter = slides.length - 1; // Loop to the last slide
        }
    }

    carouselContainer.style.transform = `translateX(-${slideWidth * counter}px)`;
}

// Event listeners for the navigation buttons
if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
        changeSlide(-1);
    });

    nextButton.addEventListener('click', () => {
        changeSlide(1);
    });
}

// Optional: Automatic sliding
let intervalId;
const autoSlideInterval = 3000; // Time in milliseconds between slides

function startAutoSlide() {
    intervalId = setInterval(() => {
        changeSlide(1);
    }, autoSlideInterval);
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

// Start automatic sliding when the page loads
startAutoSlide();

// Optional: Pause automatic sliding on hover
carouselContainer.addEventListener('mouseenter', stopAutoSlide);
carouselContainer.addEventListener('mouseleave', startAutoSlide);