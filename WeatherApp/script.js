const apiKey = "8070cc68086d7d200221c219b8777b6e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon=document.querySelector(".weatherState")
async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        const data = await response.json();

        if (response.ok) {
            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".degree").innerHTML = data.main.temp + " °C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            if(data.weather[0].main=="Clouds"){
                weatherIcon.src="images/clouds.png"
            }if(data.weather[0].main=="Clear"){
                weatherIcon.src="images/clear.png"
            }
            if(data.weather[0].main=="Drizzle"){
                weatherIcon.src="images/drizzle.png"
            }
            if(data.weather[0].main=="Rain"){
                weatherIcon.src="images/rain.png"
            }if(data.weather[0].main=="Mist"){
                weatherIcon.src="images/mist.png"
            }

            
        } else {
            console.error(`Error: ${data.message}`);
            document.querySelector(".city").innerHTML = "City not found";
            document.querySelector(".degree").innerHTML = "";
            document.querySelector(".humidity").innerHTML = "";
            document.querySelector(".wind").innerHTML = "";
            weatherIcon.src="images/notFound.webp"
        }
    } catch (error) {
        console.error(`Fetch error: ${error.message}`);
        document.querySelector(".city").innerHTML = "City not Found";
        document.querySelector(".degree").innerHTML = "";
        document.querySelector(".humidity").innerHTML = "";
        document.querySelector(".wind").innerHTML = "";
        weatherIcon.src="images/notFound.webp"
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value.trim());
});
