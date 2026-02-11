document.getElementById("current-year").innerHTML = new Date().getFullYear();
document.getElementById("last-updated").innerHTML = document.lastModified;

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/92c33bcbf9cf85483e008d6871f8ced5f6d7b661/full/500%2C/0/default"
        //https://www.churchofjesuschrist.org/temples/details/salt-lake-temple?lang=eng
    },
    {
        templeName: "Fort Collins Colorado",
        location: "Fort Collins, Colorado, United States",
        dedicated: "2016, October, 16",
        area: 90000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fort-collins-colorado/2018/400x250/Fort-Collins-Temple02.jpg"
    },
    {
        templeName: "Lindon Utah",
        location: "Lindon, Utah, United States",
        dedicated: "2026, May, 3",
        area: 90000,
        imageUrl:
            "https://churchofjesuschrist.org/imgs/a541357d82b811eca9f8eeeeac1e3637d46e53d8/full/500%2C/0/default"
    },
    {
        templeName: "Sapporo Japan",
        location: "Sapporo, Japan",
        dedicated: "2023, October, 22",
        area: 90000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-night-1945721.jpg"
    },
    {
        templeName: "Orem Utah",
        location: "Orem, Utah, United States",
        dedicated: "2024, January, 21",
        area: 90000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/orem-utah/400x250/orem-utah-temple-exterior.jpeg"
    }


];



<img src="images/orem_utah_temple_exterior.jpeg" alt="Orem Utah Temple">
    <figcaption><a href="https://www.churchofjesuschrist.org/temples/details/orem-utah-temple?lang=eng"
        target="_blank">Orem Utah Temple</a></figcaption>
    <img src="images/london_england_temple_lds.jpeg" alt="London England Temple">
        <figcaption><a href="https://www.churchofjesuschrist.org/temples/details/london-england-temple?lang=eng"
            target="_blank">London England Temple</a></figcaption>
        <img src="images/kyiv_ukraine_temple_lds.jpeg" alt="Kyiv Ukraine Temple">
            <figcaption><a href="https://www.churchofjesuschrist.org/temples/details/kyiv-ukraine-temple?lang=eng"
                target="_blank">Kyiv Ukraine Temple</a></figcaption>
            <img src="images/rexburg_temple.jpeg" alt="Rexburg Idaho Temple">
                <figcaption><a href="https://www.churchofjesuschrist.org/temples/details/rexburg-idaho-temple?lang=eng"
                    target="_blank">Rexburg Idaho Temple</a></figcaption>
                <img src="images/phoenix_temple_lds.jpeg" alt="Phoenix Arizona Temple">
                    <figcaption><a href="https://www.churchofjesuschrist.org/temples/details/phoenix-arizona-temple?lang=eng"
                        target="_blank">Phoenix Arizona Temple</a></figcaption>

