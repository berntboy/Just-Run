const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.define("runs", {
  totalMiles: {
    type: Sequelize.DECIMAL,
    defaultValue: 0,
  },
  perceivedEffort: {
    type: Sequelize.STRING,
  },
  hours: {
    type: Sequelize.INTEGER,
  },
  minutes: {
    type: Sequelize.INTEGER,
  },
  seconds: {
    type: Sequelize.INTEGER,
  },
});
