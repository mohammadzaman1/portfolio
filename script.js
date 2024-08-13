function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

let currentSlideIndices = [0, 0]; // Array to keep track of the current slide for each project with sliders
const slideContainers = document.querySelectorAll(".slides");

function showSlide(index, projectIndex) {
    const slides = slideContainers[projectIndex].children;
    if (index >= slides.length) {
        currentSlideIndices[projectIndex] = 0;
    } else if (index < 0) {
        currentSlideIndices[projectIndex] = slides.length - 1;
    } else {
        currentSlideIndices[projectIndex] = index;
    }

    slideContainers[projectIndex].style.transform = `translateX(${-currentSlideIndices[projectIndex] * 100}%)`;
}

function changeSlide(direction, projectIndex) {
    showSlide(currentSlideIndices[projectIndex] + direction, projectIndex);
}

// Initialize the sliders to show the first slide for each project
slideContainers.forEach((container, index) => {
    showSlide(0, index);
});