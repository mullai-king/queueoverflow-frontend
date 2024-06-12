import axios from "axios";

export const fetchWeather = async (lat, long) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${import.meta.env.VITE_APP_API_KEY}`)
        const weather = response.data.weather[0];
        return weather;
    } catch (err) {
        console.log("Error fetching weather");
        return err
    }
}