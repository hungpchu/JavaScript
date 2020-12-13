class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = "Miami";
    this.defaultState = "FL";
  }

  getLocationData() {
    this.city = localStorage.getItem("city")
      ? localStorage.getItem("city")
      : this.defaultCity;
    this.state = localStorage.getItem("state")
      ? localStorage.getItem("state")
      : this.defaultState;
    return {
      city: this.city,
      state: this.state,
    };
  }

  setLocationData(city, state) {
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
  }
}
