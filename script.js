const Url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SearchBox = document.querySelector(".search input");
const SearchBtn = document.querySelector(".search button");
//console.log(SearchBox.value);
const weatherIcon = document.querySelector(".weather-icon");


const key = "859c75d7d68529613f8934b773d9f4e2";

async function checkWeather(city){
    const response = await fetch(Url +city+ `&appid=${key}`);
    var data = await response.json();

    console.log(data);
    console.log(response);
    const description = data.weather[0].main;
    console.log(description);
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    document.querySelector(".description").innerHTML = data.weather[0].description;

    if (description == "rain") {
        weatherIcon.src = "weather-app-img/images/rain.png"
        
    } else if (description == "Clouds"){
        weatherIcon.src = "weather-app-img/images/clouds.png"
    } else if
        (description == "Clear"){
            weatherIcon.src = "weather-app-img/images/clear.png"
    }else if
    (description == "Drizzle"){
        weatherIcon.src = "weather-app-img/images/drizzle.png"
    }else if
    (description == "Mist"){
        weatherIcon.src = "weather-app-img/images/mist.png"
    }else if(description == "Snow"){
        weatherIcon.src = "weather-app-img/images/snow.png"
    }else{
        
    }
    

    
}
// checkWeather()
SearchBtn.addEventListener("click", ()=>{checkWeather(SearchBox.value)})
SearchBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkWeather(SearchBox.value);
    }
});

