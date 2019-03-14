const LocationsWithSchedule = [
  {
    city: "Manchester",
    date: "July 04 2019",
    schedule: [
      {
        time: "9:45",
        title: "Keynote: Building Evolutionary Architectures",
        abstract:
          "For many years, software architecture was described as 'the parts that are hard to change later'. But then microservices showed that if architects build evolvability into the architecture, change becomes easier. This talk, based on the recently published book Building Evolutionary Architectures co-authored by Rebecca anf Neal Ford, investigates how to build evolvable systems. The software development ecosystem exists in a state of dynamic equilibrium, where any new tool, framework or technique leads to disruption and the establishment of a new equilibrium.",
        type: "talk",
        speaker: {
          name: "Rebecca Parsons",
          bio:
            "Dr. Rebecca Parsons has decades-long applications development experience across a range of industries and systems. Her technical experience includes leading the creation of large-scale distributed object applications and the integration of disparate systems. Separate from her passion for deep technology, Dr. Parsons is a strong advocate for diversity in the techn industry. Committed to increasing the number of women in coding and STEM fields, Dr. Parsons served on the board of CodeChix and acted as an advisor to Women Who Code.",
          img: "https://robohash.org/YOUR-TEXT.png?size=150x150&set=set3",
          homepage: undefined,
          twitter: "@john"
        },
        track: "track 1"
      },
      {
        title: "Break",
        time: "09: 50 - 10: 00",
        type: "break"
      },
      {
        time: "10:50",
        title:
          "Laptop Devops: Putting Modern Infrastructure Automation to Work For Local Development",
        abstract:
          "A talk around various development environment automations us and other ThoughtWorkers have seen and built on many different projects, and learnings around best practices. We've seen serious work put into this drastically increase the productivity of developers, and solve a lot of the problems that microservices can otherwise cause.",
        type: "talk",
        speaker: {
          name: "Marcos Mercuri & Daniel Lockman",
          bio: "Senior dev",
          img: "https://robohash.org/YOUR-TEXT.png?size=150x150&set=set3",
          homepage: "maria.com",
          twitter: "@maria"
        },
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
    schedule: [
      {
        time: "11.50am",
        title: "A Microservices Journey",
        abstract:
          "The journey from monolith to microservices is different for every organization. A variety of challenges come with introducing microservices itself, but also organizational circumstances impacting the transformation that needed to be considered. In this talk I would like to share some lessons learned from a microservices journey from a startup perspective - and in hindsight, what to watch out for if starting the journey again.",
        type: "talk",
        speaker: {
          name: "Susanne Kaiser",
          bio: "Senior dev",
          img: "https://robohash.org/YOUR-TEXT.png?size=150x150&set=set3",
          homepage: "maria.com",
          twitter: "@maria"
        },
        track: "track 1"
      }
    ]
  },
  {
    city: "Barcelona",
    date: "July 06 2019",
    schedule: []
  }
];

export default LocationsWithSchedule;
