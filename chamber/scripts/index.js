document.addEventListener("DOMContentLoaded", () => {
    getWeather();
    loadSpotlights();
});


// Update Footer
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();

    document.getElementById("lastModified").textContent = ` ${document.lastModified}`;
});


// OpenWeatherMap API
const apiKey = '8f3aab2f34161b8a9e626d57272c3104'; 
const city = 'Lagos';
const countryCode = 'NG';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&units=metric&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        document.querySelector("#current-temp").textContent = `${Math.round(data.main.temp)}°C`;
        document.querySelector("#weather-desc").textContent = capitalizeWords(data.weather[0].description);

        getForecast();
    } catch (error) {
        console.error("Weather fetch error:", error);
        document.querySelector("#current-temp").textContent = "N/A";
        document.querySelector("#weather-desc").textContent = "Unable to fetch weather data.";
    }
}

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        const forecastContainer = document.querySelector("#forecast");

        // Filter forecasts for 12:00 PM each day (3-day forecast)
        const filteredForecast = data.list.filter(entry => entry.dt_txt.includes("12:00:00")).slice(0, 3);

        forecastContainer.innerHTML = '';
        filteredForecast.forEach(day => {
            const date = new Date(day.dt_txt);
            const dayName = date.toLocaleDateString('en-US', { weekday: 'long' }); // e.g., Monday
            const temp = Math.round(day.main.temp); // Round temperature for better readability

            const forecastItem = document.createElement("div");
            forecastItem.classList.add("forecast-item");
            forecastItem.innerHTML = `<p><strong>${dayName}</strong>: ${temp}°C</p>`;
            forecastContainer.appendChild(forecastItem);
        });
    } catch (error) {
        console.error("Forecast fetch error:", error);
        document.querySelector("#forecast").innerHTML = "<p>Unable to fetch forecast data.</p>";
    }
}

// Helper function to capitalize weather descriptions
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Call the function to fetch weather data on page load
document.addEventListener("DOMContentLoaded", getWeather);





async function loadSpotlights() {
    try {
        console.log("Fetching members.json...");
        const response = await fetch('data/members.json');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        console.log("Data received:", data);

        if (!data || !Array.isArray(data)) {
            throw new Error("Invalid JSON structure: Expected an array.");
        }

        // Convert numeric membership to text
        const membershipLevels = {
            1: "Bronze",
            2: "Silver",
            3: "Gold"
        };

        // Log all memberships
        data.forEach(member => {
            console.log(`Member: ${member.name}, Membership: ${membershipLevels[member.membership] || "Unknown"}`);
        });

        // Filter only Gold and Silver members
        const eligibleMembers = data.filter(member =>
            member.membership === 3 || member.membership === 2
        );

        console.log("Eligible members:", eligibleMembers);

        if (eligibleMembers.length === 0) {
            throw new Error("No Gold or Silver members found.");
        }

        // Randomly select 2-3 members
        const shuffled = eligibleMembers.sort(() => 0.5 - Math.random()).slice(0, 3);
        console.log("Selected spotlights:", shuffled);

        const spotlightsContainer = document.querySelector("#spotlights");
        spotlightsContainer.innerHTML = '';

        shuffled.forEach(member => {
            const spotlight = document.createElement("div");
            spotlight.classList.add("spotlight-card");

            const logoSrc = member.image ? member.image : "images/placeholder.jpg";
            const name = member.name || "Unknown Company";
            const membership = membershipLevels[member.membership] || "Member";
            const phone = member.phone || "No phone available";
            const address = member.address || "No address available";
            const website = member.website ? `<a href="${member.website}" target="_blank">Visit Website</a>` : "No website available";

            spotlight.innerHTML = `
                <div class="spotlight-content">
                    <img src="${logoSrc}" alt="${name} Logo">
                    <h3>${name}</h3>
                    <p><strong>${membership} Member</strong></p>
                    <p>${phone}</p>
                    <p>${address}</p>
                    ${website}
                </div>
            `;
            spotlightsContainer.appendChild(spotlight);
        });

    } catch (error) {
        console.error("Spotlights fetch error:", error);
        document.querySelector("#spotlights").innerHTML = "<p>Unable to load spotlights.</p>";
    }
}

document.addEventListener("DOMContentLoaded", loadSpotlights);

// Futher adjustment
shuffled.forEach(member => {
    const spotlight = document.createElement("div");

    // Assign class based on membership level
    let membershipClass = "";
    if (member.membership === 3) {
        membershipClass = "gold-member";
    } else if (member.membership === 2) {
        membershipClass = "silver-member";
    }

    spotlight.classList.add("spotlight-card", membershipClass);

    const logoSrc = member.image ? member.image : "images/hiart.jpg";
    const name = member.name || "Unknown Company";
    const membership = member.membership === 3 ? "Gold" : "Silver";
    const phone = member.phone || "No phone available";
    const address = member.address || "No address available";
    const website = member.website ? `<a href="${member.website}" target="_blank">Visit Website</a>` : "No website available";

    spotlight.innerHTML = `
        <div class="spotlight-content">
            <img src="${logoSrc}" alt="${name} Logo">
            <h3>${name}</h3>
            <p><strong>${membership} Member</strong></p>
            <p>${phone}</p>
            <p>${address}</p>
            ${website}
        </div>
    `;
    spotlightsContainer.appendChild(spotlight);
});

