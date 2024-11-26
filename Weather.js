import React, { useState } from "react";

const Weather = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const API_KEY = "YOUR_OPENWEATHERMAP_KEY"; // Replace with your OpenWeatherMap API key

    const fetchWeather = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setWeather(data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    return (
        <div className="container text-center">
            <h1>Weather Information</h1>
            <div>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                    className="form-control my-3"
                />
                <button onClick={fetchWeather} className="btn btn-primary">
                    Search
                </button>
            </div>
            {weather && (
                <div className="mt-4">
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Condition: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
