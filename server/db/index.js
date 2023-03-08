const db = require("./database");
const Runners = require("./models/Runner");
const Runs = require("./models/Runs");

Runs.belongsTo(Runners);
Runners.hasMany(Runs);

module.exports = {
  db,
  Runners,
  Runs,
};
