const LocationsWithSchedule = [
  {
    city: "Manchester",
    date: "July 04 2019",
    schedule: [
      {
        title: "My awesome talk",
        time: "09: 00 - 09: 50",
        type: "talk",
        speaker: {
          name: "John",
          bio: "Senior dev",
          img: "https://robohash.org/YOUR-TEXT.png?size=150x150&set=set3",
          homepage: undefined,
          twitter: "@john"
        },
        abstract: "My awesome talk abstract",
        track: "track 1"
      },
      {
        title: "Break",
        time: "09: 50 - 10: 00",
        type: "break"
      },
      {
        title: "My amazing talk",
        time: "10: 00 - 12: 00",
        type: "talk",
        speaker: {
          name: "Maria",
          bio: "Senior dev",
          img: "https://robohash.org/YOUR-TEXT.png?size=150x150&set=set3",
          homepage: "maria.com",
          twitter: "@maria"
        },
        abstract: "My amazing talk abtract",
        track: "track 2"
      },
      {
        title: "Lunch Break",
        time: "09: 50 - 10: 00",
        type: "break"
      }
    ]
  },
  {
    city: "Munich",
    date: "July 05 2019",
    schedule: []
  },
  {
    city: "Barcelona",
    date: "July 06 2019",
    schedule: []
  }
];

export default LocationsWithSchedule;
