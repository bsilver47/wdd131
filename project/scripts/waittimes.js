document.getElementById("current-year").innerHTML = new Date().getFullYear();

document.getElementById("last-updated").innerHTML = document.lastModified;

const themeparkAPIURL = "https://api.themeparks.wiki/v1/entity/9fc68f1c-3f5e-4f09-89f2-aab2cf1a0741/live";
fetch(themeparkAPIURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const liveData = data.liveData;
        const ridesList = document.getElementById("rides");
        const showsList = document.getElementById("shows");
        for (let i = 0; i < liveData.length; i++) {
            const attraction = liveData[i];
            if (attraction.status === "OPERATING") {
                if (attraction.entityType === "ATTRACTION") {
                    const listItem = document.createElement("li");
                    listItem.textContent = `${attraction.name}: ${attraction.queue.STANDBY.waitTime} minutes`;
                    ridesList.appendChild(listItem);
                } else if (attraction.entityType === "SHOW") {
                    const listItem = document.createElement("li");
                    if (attraction.showtimes.length) {
                        const nextShowTime = attraction.showtimes[0].startTime;
                        const formattedNextShowTime = new Date(nextShowTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
                        listItem.textContent = `${attraction.name}: Next show at ${formattedNextShowTime}`;
                    } else {
                        listItem.textContent = attraction.name;
                    }
                    showsList.appendChild(listItem);
                }
            }

        }
    })
    .catch((error) => console.error("Error fetching theme park data:", error));
