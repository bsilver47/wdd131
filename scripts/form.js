document.getElementById("current-year").innerHTML = new Date().getFullYear();

document.getElementById("last-updated").innerHTML = document.lastModified;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

products.forEach(product => {
    document.getElementById("product").innerHTML += `
        <option value="${product.id}">${product.name}</option>
    `;
});

// use local storage to store and track number of reviews submitted each time review.html loads successfully after form submission increment counter by one
const reviewCount = window.addEventListener("load", () => {
    if (window.location.href.includes("review.html")) {
        let count = localStorage.getItem("reviewCount") || 0;
        count++;
        localStorage.setItem("reviewCount", count);
        document.getElementById("review-count").innerHTML = `Total Reviews Submitted: ${count}`;
    }
});
