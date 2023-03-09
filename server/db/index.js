const db = require("./database");
const Users = require("./models/Users");
const Runs = require("./models/Runs");

Runs.belongsTo(Users);
Users.hasMany(Runs);

module.exports = {
  db,
  Users,
  Runs,
};
