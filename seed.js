const { db } = require("./server/db");
const Runners = require("./server/db/models/Runner");
const Runs = require("./server/db/models/Runs");

const runners = [
  {
    name: "Maria",
    imageUrl:
      "https://images.fosterwebmarketing.com/1094/young%20woman%20runner.jpg",
    weeklyGoal: 40,
  },
  {
    name: "Lexy",
    imageUrl:
      "https://runrocknroll.kleecks-cdn.com/cdn1/attachments/news_article/132d-151632941/900x460_tempo_Nutrition-for-Long-Distance-Runners.jpg",
    weeklyGoal: 35,
  },
  {
    name: "Mark",
    imageUrl: "https://i.insider.com/57d803998f89f52c008b46f1?width=700",
    weeklyGoal: 45,
  },
  {
    name: "Joe",
    imageUrl:
      "https://orrrc.org/wp-content/uploads/2022/07/WingMan-10k-2022-11-400x284.jpg",
    weeklyGoal: 25,
  },
  {
    name: "Kayla",
    imageUrl:
      "https://msmagazine.com/wp-content/uploads/2012/11/marathoner.jpg",
    weeklyGoal: 30,
  },
];

const runs = [
  {
    week: 1,
    totalMiles: 30,
    averageHR: 125,
    averagePace: 8.5,
    runnerId: 1,
  },
  {
    week: 2,
    totalMiles: 35,
    averageHR: 145,
    averagePace: 7.3,
    runnerId: 1,
  },
  {
    week: 3,
    totalMiles: 40,
    averageHR: 162,
    averagePace: 6.2,
    runnerId: 1,
  },
  {
    week: 4,
    totalMiles: 35,
    averageHR: 140,
    averagePace: 6.9,
    runnerId: 1,
  },
  {
    week: 5,
    totalMiles: 42,
    averageHR: 127,
    averagePace: 7.9,
    runnerId: 1,
  },
  {
    week: 6,
    totalMiles: 47,
    averageHR: 137,
    averagePace: 5.9,
    runnerId: 1,
  },
  {
    week: 1,
    totalMiles: 31,
    averageHR: 141,
    averagePace: 8.0,
    runnerId: 2,
  },
  {
    week: 2,
    totalMiles: 42,
    averageHR: 135,
    averagePace: 6.5,
    runnerId: 2,
  },
  {
    week: 3,
    totalMiles: 40,
    averageHR: 125,
    averagePace: 8.2,
    runnerId: 2,
  },
  {
    week: 4,
    totalMiles: 37,
    averageHR: 170,
    averagePace: 7.6,
    runnerId: 2,
  },
  {
    week: 5,
    totalMiles: 42,
    averageHR: 120,
    averagePace: 6.0,
    runnerId: 2,
  },
  {
    week: 6,
    totalMiles: 60,
    averageHR: 170,
    averagePace: 6.7,
    runnerId: 2,
  },
  {
    week: 1,
    totalMiles: 42,
    averageHR: 125,
    averagePace: 7.5,
    runnerId: 3,
  },
  {
    week: 2,
    totalMiles: 68,
    averageHR: 161,
    averagePace: 8.9,
    runnerId: 3,
  },
  {
    week: 3,
    totalMiles: 57,
    averageHR: 148,
    averagePace: 7.6,
    runnerId: 3,
  },
  {
    week: 4,
    totalMiles: 51,
    averageHR: 143,
    averagePace: 7.2,
    runnerId: 3,
  },
  {
    week: 5,
    totalMiles: 60,
    averageHR: 167,
    averagePace: 5.9,
    runnerId: 3,
  },
  {
    week: 6,
    totalMiles: 47,
    averageHR: 135,
    averagePace: 7.7,
    runnerId: 3,
  },
  {
    week: 1,
    totalMiles: 20,
    averageHR: 135,
    averagePace: 8.5,
    runnerId: 4,
  },
  {
    week: 2,
    totalMiles: 25,
    averageHR: 140,
    averagePace: 7.2,
    runnerId: 4,
  },
  {
    week: 3,
    totalMiles: 30,
    averageHR: 170,
    averagePace: 5.0,
    runnerId: 4,
  },
  {
    week: 4,
    totalMiles: 27,
    averageHR: 120,
    averagePace: 8.0,
    runnerId: 4,
  },
  {
    week: 5,
    totalMiles: 29,
    averageHR: 145,
    averagePace: 7.0,
    runnerId: 4,
  },
  {
    week: 6,
    totalMiles: 38,
    averageHR: 138,
    averagePace: 7.9,
    runnerId: 4,
  },
  {
    week: 1,
    totalMiles: 21,
    averageHR: 120,
    averagePace: 7.5,
    runnerId: 5,
  },
  {
    week: 2,
    totalMiles: 60,
    averageHR: 170,
    averagePace: 6.5,
    runnerId: 5,
  },
  {
    week: 3,
    totalMiles: 50,
    averageHR: 150,
    averagePace: 8.5,
    runnerId: 5,
  },
  {
    week: 4,
    totalMiles: 42,
    averageHR: 170,
    averagePace: 8.0,
    runnerId: 5,
  },
  {
    week: 5,
    totalMiles: 37,
    averageHR: 127,
    averagePace: 7.7,
    runnerId: 5,
  },
  {
    week: 6,
    totalMiles: 47,
    averageHR: 165,
    averagePace: 7.0,
    runnerId: 5,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      runners.map((runner) => {
        return Runners.create(runner);
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
