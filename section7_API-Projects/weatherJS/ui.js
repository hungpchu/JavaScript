class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.visibility = document.getElementById("w-visibility");
    this.wind = document.getElementById("w-wind");
  }
  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = `${Math.floor(
      parseFloat(weather.main.temp) - 273.15
    )} C`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${Math.floor(
      parseFloat(weather.main.feels_like) - 273.15
    )} C`;
    this.visibility.textContent = `Visibility: ${weather.visibility}`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
  }
}
