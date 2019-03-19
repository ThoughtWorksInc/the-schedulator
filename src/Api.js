import { default as conferenceSchedule } from "./data/ConferenceSchedule";

class Api {
  constructor() {
    // get the locations instead of reading them from a js file
  }

  getConferenceSchedule() {
    return conferenceSchedule;
  }

  getDays() {
    return conferenceSchedule.map(location => location.day);
  }

  getScheduleForDay(day) {
    return conferenceSchedule.find(l => l.day === day).schedule;
  }

  getTalkAtIndexForDay(day, talkIndex) {
    return conferenceSchedule.find(l => l.day === day).schedule[talkIndex];
  }
}

const API = new Api();
export default API;
