import { default as locations } from "./data/LocationsWithSchedules";

class Api {
  constructor() {
    // get the locations instead of reading them from a js file
  }

  getLocations() {
    return locations;
  }

  getCities() {
    return locations.map(location => location.city);
  }

  getScheduleForCity(city) {
    return locations.find(l => l.city === city).schedule;
  }

  getTalkAtIndexForCity(city, talkIndex) {
    return locations.find(l => l.city === city).schedule[talkIndex];
  }
}

const API = new Api();
export default API;
