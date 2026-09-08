// Responsive Hamburger Menu Toggle
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

if (hamButton && navigation) {
    hamButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        hamButton.classList.toggle("open");

        const isOpen = navigation.classList.contains("open");
        hamButton.setAttribute("aria-expanded", isOpen);
    });
}

// Footer: Dynamic Copyright Year
const currentYearElement = document.getElementById("currentyear");
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Footer: Dynamic Last Modified Date
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}

