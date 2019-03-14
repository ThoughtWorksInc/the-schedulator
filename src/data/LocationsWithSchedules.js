const LocationsWithSchedule = [
  {
    city: "Manchester",
    date: "July 04 2019",
    schedule: [
      {
        title: "My awesome talk",
        time: "09: 00 - 10: 00",
        speaker: {
          name: "John",
          bio: "Senior dev",
          img: "https://robohash.org/YOUR-TEXT.png?size=150x150&set=set3",
          homepage: undefined,
          twitter: "@john"
        },
        abstract: "My awesome talk abstract",
        track: undefined
      },
      {
        title: "My amazing talk",
        time: "10: 00 - 11: 00",
        speaker: {
          name: "Maria",
          bio: "Senior dev",
          img: "https://robohash.org/YOUR-TEXT.png?size=150x150&set=set3",
          homepage: "maria.com",
          twitter: "@maria"
        },
        abstract: "My amazing talk abtract",
        track: undefined
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
