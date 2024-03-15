const apiKey = "392bef52866cde2bda2a6bbf77f8bd91";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityName = document.querySelector(".rcvCity");
const searchBtn = document.querySelector(".srcBtn");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(`.error`).style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    console.log(data);
    document.querySelector(`.city`).innerHTML = data.name;
    document.querySelector(`.temp`).innerHTML =
      Math.round(data.main.temp) + "° C";
    document.querySelector(`.wind-speed`).innerHTML = data.wind.speed + " km/h";
    document.querySelector(`.humidity-value`).innerHTML =
      data.main.humidity + "%";

    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/Rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Haze") {
      weatherIcon.src = "images/haze.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(`.error`).style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(cityName.value);
});

cityName.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkWeather(cityName.value);
  }
});
