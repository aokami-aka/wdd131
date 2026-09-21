// Temple data
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // Additional temples
    {
        templeName: "Belo Horizonte Brazil",
        location: "Belo Horizonte, Brazil",
        dedicated: "2026, August, 16",
        area: 28686,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/belo-horizonte-brazil-temple/belo-horizonte-brazil-temple-71963-main.jpg"
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
    },
    {
        templeName: "Salvador Brazil",
        location: "Salvador, Brazil",
        dedicated: "2024, October, 20",
        area: 29963,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salvador-brazil-temple/salvador-brazil-temple-51668-main.jpg"
    }
];
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");


// Display temples
const displayTemples = (templeList) => {
    const container = document.querySelector("#temple-container");

    container.innerHTML = "";

    templeList.forEach((temple) => {
        const figure = document.createElement("figure");

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        const caption = document.createElement("figcaption");

        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        caption.appendChild(name);
        caption.appendChild(location);
        caption.appendChild(dedicated);
        caption.appendChild(area);

        figure.appendChild(image);
        figure.appendChild(caption);

        container.appendChild(figure);
    });
};


// Filter temples
const filterTemples = (filter) => {
    let filteredTemples = temples;

    switch (filter) {
        case "old":
            filteredTemples = temples.filter((temple) => {
                const year = parseInt(temple.dedicated);
                return year < 1900;
            });
            break;

        case "new":
            filteredTemples = temples.filter((temple) => {
                const year = parseInt(temple.dedicated);
                return year > 2000;
            });
            break;

        case "large":
            filteredTemples = temples.filter((temple) => {
                return temple.area > 90000;
            });
            break;

        case "small":
            filteredTemples = temples.filter((temple) => {
                return temple.area < 10000;
            });
            break;

        case "home":
        default:
            filteredTemples = temples;
            break;
    }

    displayTemples(filteredTemples);
};


// Navigation
const navigationLinks = document.querySelectorAll(".navigation a");
const pageHeading = document.querySelector("#page-heading");

navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const filter = link.dataset.filter;

        filterTemples(filter);

        pageHeading.textContent =
            link.textContent;

        // Close mobile navigation after selecting an option
        navigation.classList.remove("open");
        hamButton.classList.remove("open");
        hamButton.setAttribute("aria-expanded", "false");
    });
});


// Responsive Hamburger Menu Toggle
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
    lastModifiedElement.textContent =
        `Last Modification: ${document.lastModified}`;
}


// Display all temples when page loads
displayTemples(temples);