// Function to open a new tab with the same URL when the website name is clicked
document.querySelector(".webName").addEventListener("click", () => {
    window.open(window.location.href, "_blank");
});

// Function to handle search button click event
document.querySelector(".button").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission to stay on the page
    const searchQuery = document.querySelector("#things").value.trim();

    if (searchQuery) {
        alert(`Search completed for: ${searchQuery}`);
        // Logic to handle search functionality can be added here
    } else {
        alert("Please enter a search term");
    }
});

// Function to handle slideshow image transitions more dynamically
document.querySelectorAll(".slideshow").forEach(slideshow => {
    let images = slideshow.querySelectorAll(".slideshowImage");
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1;
    }, 4000); // 4 seconds per slide
});

// Function to dynamically change the 'SELL' button color on hover
const sellButton = document.querySelector(".sell");
sellButton.addEventListener("mouseenter", () => {
    sellButton.style.background = "linear-gradient(to right, #085208, #c1fc34)";
});
sellButton.addEventListener("mouseleave", () => {
    sellButton.style.background = "linear-gradient(to right, #073707, #a4f32a)";
});

// Adding keyboard accessibility: Enter key for search and navigation
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (document.activeElement === document.querySelector("#things")) {
            document.querySelector(".button").click();
        }
        if (document.activeElement.classList.contains("webName")) {
            document.querySelector(".webName").click();
        }
    }
});

// Optional: Smooth scroll for anchor links (if any are added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
