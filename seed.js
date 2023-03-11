const { db } = require("./server/db");
const Users = require("./server/db/models/Users");
const Runs = require("./server/db/models/Runs");

const users = [
  {
    firstName: "Alex",
    lastName: "Bernt",
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
    hours: 0,
    minutes: 45,
    seconds: 23,
    UserId: 1,
  },
  {
    totalMiles: 10,
    perceivedEffort: "Vigorous",
    hours: 1,
    minutes: 45,
    seconds: 23,
    UserId: 1,
  },
  {
    totalMiles: 2,
    perceivedEffort: "Light",
    hours: 0,
    minutes: 24,
    seconds: 23,
    UserId: 1,
  },
  {
    totalMiles: 7,
    perceivedEffort: "Moderate",
    hours: 1,
    minutes: 0,
    seconds: 0,
    UserId: 1,
  },
  {
    totalMiles: 9,
    perceivedEffort: "Moderate",
    hours: 1,
    minutes: 10,
    seconds: 20,
    UserId: 1,
  },
  {
    totalMiles: 4,
    perceivedEffort: "Light",
    hours: 0,
    minutes: 17,
    seconds: 23,
    UserId: 1,
  },
  {
    totalMiles: 12,
    perceivedEffort: "Vigorous",
    hours: 1,
    minutes: 7,
    seconds: 23,
    UserId: 1,
  },
  {
    totalMiles: 3,
    perceivedEffort: "Light",
    hours: 0,
    minutes: 19,
    seconds: 23,
    UserId: 1,
  },
  {
    totalMiles: 20,
    perceivedEffort: "Max",
    hours: 2,
    minutes: 45,
    seconds: 23,
    UserId: 1,
  },
  {
    totalMiles: 4.5,
    perceivedEffort: "Light",
    hours: 0,
    minutes: 45,
    seconds: 8,
    UserId: 1,
  },
  {
    totalMiles: 6,
    perceivedEffort: "Moderate",
    hours: 0,
    minutes: 40,
    seconds: 23,
    UserId: 1,
  },
  {
    totalMiles: 8,
    perceivedEffort: "Moderate",
    hours: 1,
    minutes: 2,
    seconds: 15,
    UserId: 1,
  },
  {
    totalMiles: 9,
    perceivedEffort: "Moderate",
    hours: 1,
    minutes: 13,
    seconds: 23,
    UserId: 1,
  },
  {
    totalMiles: 2,
    perceivedEffort: "Light",
    hours: 0,
    minutes: 13,
    seconds: 23,
    UserId: 1,
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
