const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.define("runs", {
  week: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  totalMiles: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  averageHR: {
    type: Sequelize.INTEGER,
  },
  averagePace: {
    type: Sequelize.DECIMAL,
  },
});
