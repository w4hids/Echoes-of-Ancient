// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.querySelectorAll('.mobile-menu-btn span').forEach(span => {
        span.classList.toggle('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // Get the scroll position
    const heroSection = document.querySelector('.hero');

    // Parallax scroll effect: move background at a different speed
    const parallaxEffect = scrollPosition * 0.5; // Adjust 0.5 to control the speed of movement

    // Apply the parallax effect
    heroSection.style.backgroundPosition = `center ${parallaxEffect}px`;

    // Optional zoom effect (based on scroll position)
    const zoomEffect = 120 + (scrollPosition * 0.1); // Adjust multiplier to control zoom speed
    heroSection.style.backgroundSize = `${zoomEffect}%`;
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // Get the scroll position
    const sections = document.querySelectorAll('section'); // Select all sections

    sections.forEach(function(section) {
        // Parallax effect: move background at a different speed
        const parallaxEffect = scrollPosition * 0.5; // Adjust 0.5 to control the speed of movement
        section.style.backgroundPosition = `center ${parallaxEffect}px`;

        // Optional zoom effect (based on scroll position)
        const zoomEffect = 120 + (scrollPosition * 0.1); // Adjust multiplier to control zoom speed
        section.style.backgroundSize = `${zoomEffect}%`;
    });
});
// Get the button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show the button when user scrolls down 200px
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
};

// When the button is clicked, scroll to the top
scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.feature-card, .gameplay-img, .platform-button').forEach(element => {
    observer.observe(element);
});

// Platform Download Buttons
document.querySelectorAll('.platform-button').forEach(button => {
    button.addEventListener('click', () => {
        // Add download functionality here
        alert('Downloading the game...');
    });
});

// Video Placeholder Click
const videoPlaceholder = document.querySelector('.video-placeholder');
if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', () => {
        alert('Video is going to play!');
    });
}

// Download Buttons
document.querySelector('.preorder').addEventListener('click', () => {
    alert('Downloading the game...');
});

window.addEventListener('load', function() {
    setTimeout(function() {
        const logoOverlay = document.getElementById('logo-overlay');
        const mainContent = document.getElementById('main-content');
        
        logoOverlay.classList.add('hidden');
        mainContent.classList.remove('hidden');
    }, 3000); // 3 seconds
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
