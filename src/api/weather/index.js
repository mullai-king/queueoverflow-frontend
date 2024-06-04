
export const fetchWeather = async (lat, long) => {
    try {
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`)
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=`) // add meta process
        const jsonData = await response.json()
        const weather = jsonData.weather[0]
        return weather;
    } catch (err) {
        console.log("Error fetching weather");
        return err
    }
}