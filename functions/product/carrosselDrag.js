import { get } from "../utils/utils.js";

// Grab-to-scroll logic for horizontal scrolling carousels on desktop
export function initDragToScroll() {
    const carousels = document.querySelectorAll(".carrossel");
    
    carousels.forEach(carousel => {
        let isDown = false;
        let startX;
        let scrollLeft;

        carousel.addEventListener("mousedown", (e) => {
            isDown = true;
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
            carousel.style.scrollBehavior = "auto"; // Disable smooth scroll while dragging
        });

        carousel.addEventListener("mouseleave", () => {
            if (isDown) {
                isDown = false;
                carousel.classList.remove("grabbing");
                carousel.style.scrollBehavior = "smooth";
            }
        });

        carousel.addEventListener("mouseup", () => {
            if (isDown) {
                isDown = false;
                carousel.classList.remove("grabbing");
                carousel.style.scrollBehavior = "smooth";
            }
        });

        carousel.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 1.5; // Speed multiplier
            
            if (Math.abs(x - startX) > 5) {
                carousel.classList.add("grabbing");
            }
            
            carousel.scrollLeft = scrollLeft - walk;
        });
    });
}
