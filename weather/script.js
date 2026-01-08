

const input = document.getElementById("city");
const button = document.getElementById("search");

const locationEl = document.getElementById("location");
const tempEl = document.getElementById("temp");
const descEl = document.getElementById("desc");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const errorEl = document.getElementById("error");

button.addEventListener("click", getWeather);
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    getWeather();
  }
});


function getWeather() {
  const city = input.value.trim();

  errorEl.innerText = ""; // clear old error

  if (city === "") {
    errorEl.innerText = "⚠️ Please enter a city name";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&units=metric&appid=your_api_key_here`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.cod === "404") {
        errorEl.innerText = "❌ City not found. Try: Delhi, Srinagar";
        return;
      }

      displayWeather(data);
    })
    .catch(() => {
      errorEl.innerText = "⚠️ Network error. Try again.";
    });
}


function displayWeather(data) {
  if (data.cod === "404") {
    alert("City not found");
    return;
  }

  locationEl.innerText = data.name;
  tempEl.innerText = `${Math.round(data.main.temp)}°C`;
  descEl.innerText = data.weather[0].description;
  humidityEl.innerText = `Humidity: ${data.main.humidity}%`;
  windEl.innerText = `Wind: ${data.wind.speed} km/h`;

  const emojiMap = {
  Clear: "☀️",
  Clouds: "☁️",
  Rain: "🌧️",
  Snow: "❄️",
  Thunderstorm: "⛈️",
  Drizzle: "🌦️",
  Mist: "🌫️"
};

const weatherMain = data.weather[0].main;
locationEl.innerText = `${emojiMap[weatherMain] || "🌍"} ${data.name}`;

}

