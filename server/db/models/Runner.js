const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.define("runners", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://news.belmont.edu/wp-content/uploads/2019/07/The-Lawn.jpg",
  },
  weeklyGoal: {
    type: Sequelize.INTEGER,
  },
});
