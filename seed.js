const { db } = require("./server/db");
const Users = require("./server/db/models/Users");
const Runs = require("./server/db/models/Runs");

const users = [
  {
    firstName: "Jane",
    lastName: "Doe",
    username: "berntboy",
    password: "test",
    imageUrl:
      "https://images.fosterwebmarketing.com/1094/young%20woman%20runner.jpg",
  },
];

const runs = [
  {
    totalMiles: 4.5,
    perceivedEffort: "Light",
    time: "02:03:12",
    userId: 1,
  },
  {
    totalMiles: 10,
    perceivedEffort: "Vigorous",
    time: "02:03:12",
    userId: 1,
  },
  {
    totalMiles: 2,
    perceivedEffort: "Light",
    time: "02:03:12",
    userId: 1,
  },
  {
    totalMiles: 7,
    perceivedEffort: "Moderate",
    time: "02:03:12",
    userId: 1,
  },
  {
    totalMiles: 9,
    perceivedEffort: "Moderate",
    time: "02:03:12",
    userId: 1,
  },
  {
    totalMiles: 4,
    perceivedEffort: "Light",
    time: "02:03:12",
    userId: 1,
  },
  {
    totalMiles: 12,
    perceivedEffort: "Vigorous",
    time: "02:03:12",
    userId: 1,
  },
  {
    totalMiles: 3,
    perceivedEffort: "Light",
    time: "02:03:12",
    userId: 1,
  },
  {
    totalMiles: 20,
    perceivedEffort: "Max",
    time: "02:03:12",
    userId: 1,
  },
  {
    totalMiles: 4.5,
    perceivedEffort: "Light",
    time: "02:03:12",
    userId: 1,
  },
  {
    totalMiles: 6,
    perceivedEffort: "Moderate",
    time: "02:03:12",
    userId: 1,
  },
  {
    totalMiles: 8,
    perceivedEffort: "Moderate",
    time: "02:03:12",
    userId: 1,
  },
  {
    totalMiles: 9,
    perceivedEffort: "Moderate",
    time: "02:03:12",
    userId: 1,
  },
  {
    totalMiles: 2,
    perceivedEffort: "Light",
    time: "02:03:12",
    userId: 1,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      users.map((user) => {
        return Users.create(user);
      })
    );

    await Promise.all(
      runs.map((run) => {
        return Runs.create(run);
      })
    );

    console.log("Seeding success");
    db.close();
  } catch (err) {
    console.error(err);
    db.close();
  }
};

seed();
