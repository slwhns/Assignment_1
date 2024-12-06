(function () {
    "use strict";
    
    /* Contact Form */
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();
      
        document.getElementById("success-message").style.display = "block";
      
        document.getElementById("form").reset();
      
        setTimeout(function() {
            document.getElementById("success-message").style.display = "none";
        }, 5000);
    });

    /* Smooth Scrolling */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function (e) {

            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({

                behavior: 'smooth'
            });
        });
    });

    /* Dark or Light Mode */
    const toggleButton = document.getElementById('toggle-mode');

         toggleButton.addEventListener('click', () => {

            document.body.classList.toggle('dark-mode');
        });

    /* Form Validation */
    document.getElementById("form").addEventListener("submit", function(event) {
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const subject = document.querySelector('input[name="subject"]').value;
        const message = document.querySelector('textarea[name="text"]').value;
    
        if (!name || !email || !subject || !message) {
            alert("Please fill out all fields.");
            event.preventDefault();
        }
    });

    /* Scroll to Top Button */
    document.addEventListener('DOMContentLoaded', function() {
        const scrollToTopButton = document.createElement('button');
        scrollToTopButton.innerText = '↑';
        scrollToTopButton.id = 'scrollToTop';
        document.body.appendChild(scrollToTopButton);
    
        scrollToTopButton.style.position = 'fixed';
        scrollToTopButton.style.bottom = '20px';
        scrollToTopButton.style.right = '20px';
        scrollToTopButton.style.display = 'none';
    
        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        };
    
        scrollToTopButton.onclick = function() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }; 
    }); 

    /* Image Carousel */
    function moveSlide(event, carouselClass, direction) {
        const carousel = event.target.closest('.interest-item').querySelector(`.${carouselClass}`);
        const slides = carousel.querySelector('.carousel-images').children;
        let currentIndex = Array.from(slides).findIndex(slide => slide.style.transform === 'translateX(0%)');
    
        // Hide the current slide
        slides[currentIndex].classList.remove('active');
    
        // Calculate the new index
        let newIndex = currentIndex + direction;
        if (newIndex < 0) {
            newIndex = slides.length - 1;
        }
        else if (newIndex >= slides.length) {
            newIndex = 0;
        }
    
        // Show the new slide
        slides[newIndex].classList.add('active');
    }
    
    function initializeCarousel(carouselClass) {
        document.querySelectorAll('.$carouselClass}').forEach((carousel) => {
            const slides = carousel.querySelector('.carousel-images').children;
    
            // Set initial positions of slides
            for (let i = 1; i < slides.length; i++) {
                slides[i].classList.remove('active'); // Hide all but the first slide
            }
                slides[0].classList.add('active'); // Show the first slide
    
            // Add event listeners for next and previous buttons
            const nextButton = carousel.querySelector('.next');
            const prevButton = carousel.querySelector('.prev');
    
            nextButton.addEventListener('click', (event) => moveSlide(event, carouselClass, 1));
            prevButton.addEventListener('click', (event) => moveSlide(event, carouselClass, -1));
        });
    }
    
    // Initialize each carousel
    initializeCarousel('travel-carousel');
    initializeCarousel('music-carousel');
    initializeCarousel('hiking-carousel');
    initializeCarousel('photography-carousel');
    
})();