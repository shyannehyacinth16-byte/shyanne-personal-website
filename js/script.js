// Wait for the page to fully load before running anything
document.addEventListener("DOMContentLoaded", () => {
    initWelcomeMessage();
    initClock();
    initFaqAccordion();
    initCharacterCounter();
    initBackToTop();
});

// 1. Welcome Message
function initWelcomeMessage() {
    const welcomeEl = document.getElementById("welcome-msg");
    if (!welcomeEl) return;

    const hour = new Date().getHours();
    let greeting = "Good evening";

    if (hour < 12) greeting = "Good morning";
    else if (hour < 18) greeting = "Good afternoon";

    welcomeEl.textContent = greeting;
}

// 2. Live Digital Clock
function initClock() {
    const clockEl = document.getElementById("live-clock");
    if (!clockEl) return;

    function updateClock() {
        const now = new Date();
        const pad = (num) => String(num).padStart(2, "0");
        const timeString = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
        clockEl.textContent = timeString;
    }

    updateClock(); 
    setInterval(updateClock, 1000); 
}

// 3. Interactive FAQ Accordion
function initFaqAccordion() {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach((btn) => {
        btn.addEventListener("click", () => {
            const item = btn.parentElement;
            item.classList.toggle("active");
            
            // Close other open items
            document.querySelectorAll(".faq-item.active").forEach((openItem) => {
                if (openItem !== item) openItem.classList.remove("active");
            });
        });
    });
}

// 4. Character Counter for Contact Form
function initCharacterCounter() {
    const textarea = document.getElementById("message");
    const counter = document.getElementById("char-count");
    
    if (!textarea || !counter) return;

    const maxLength = textarea.getAttribute("maxlength");

    textarea.addEventListener("input", () => {
        const currentLength = textarea.value.length;
        counter.textContent = `${currentLength} / ${maxLength} characters`;
        
        if (currentLength >= maxLength) {
            counter.style.color = "#ff4d4d"; 
        } else {
            counter.style.color = "var(--muted)";
        }
    });
}

// 5. Back to Top Button
function initBackToTop() {
    const btn = document.getElementById("back-to-top-btn");
    if (!btn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btn.classList.add("show");
        } else {
            btn.classList.remove("show");
        }
    });

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}