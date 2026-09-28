const storageKey = "productReviewCount";

let reviewCount = Number(localStorage.getItem(storageKey)) || 0;
reviewCount += 1;

localStorage.setItem(storageKey, reviewCount);

document.querySelector("#reviewCount").textContent = reviewCount;
document.querySelector("#currentYear").textContent = new Date().getFullYear();
