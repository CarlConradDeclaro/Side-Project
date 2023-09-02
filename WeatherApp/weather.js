const apiKey ="4bf3e6e48c0d6331d19fbb507fcc1e5a";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city = document.getElementById("countryInput");
const searchButton = document.querySelector(".search button");


async function checkWeather(city){
    const respones = await fetch(apiURL + city +  `&appid=${apiKey} ` ) 
    var data= await respones.json();
  
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =  Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchButton.addEventListener("click", ()=> {
    checkWeather(city.value);
})

