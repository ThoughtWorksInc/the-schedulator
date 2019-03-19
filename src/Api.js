import { default as locations } from "./data/LocationsWithSchedules";

class Api {
  constructor() {
    // get the locations instead of reading them from a js file
  }

  getLocations() {
    return locations;
  }

  getDays() {
    return locations.map(location => location.day);
  }

  getScheduleForDay(day) {
    return locations.find(l => l.day === day).schedule;
  }

  getTalkAtIndexForDay(day, talkIndex) {
    return locations.find(l => l.day === day).schedule[talkIndex];
  }
}

const API = new Api();
export default API;
