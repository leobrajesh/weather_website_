async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'e20aab0be86d44019be125030241108'; // Replace with your WeatherAPI key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error) {
            document.getElementById('weather-info').innerHTML = `<p>City not found. Please try again.</p>`;
        } else {
            const weatherInfo = `
                <h2>${data.location.name}, ${data.location.country}</h2>
                <p>Temperature: ${data.current.temp_c} °C</p>
                <p>Condition: ${data.current.condition.text}</p>
                <img src="${data.current.condition.icon}" alt="weather icon">
                <p>Humidity: ${data.current.humidity}%</p>
                <p>Wind: ${data.current.wind_kph} kph</p>
            `;
            document.getElementById('weather-info').innerHTML = weatherInfo;
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        document.getElementById('weather-info').innerHTML = `<p>Error fetching data. Please try again later.</p>`;
    }
}
