class Weather {
  constructor(city, state) {
    this.apiKey = "8f1164be0565ff50499d9b5458a42890";
    this.city = city;
    this.state = state;
  }
  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // change the weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
