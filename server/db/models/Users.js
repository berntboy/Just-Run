const Sequelize = require("sequelize");
const db = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Users = db.define("user", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Running/580/quote-1.jpg",
  },
});

Users.prototype.correctPassword = function (passedPassword) {
  // Comparing the "passed Password" to the actual password
  return bcrypt.compare(passedPassword, this.password);
};

// Generating a new token if other one expired
Users.prototype.generateToken = function () {
  return jwt.sign(
    {
      id: this.id,
      role: this.role,
    },
    "test"
  );
};

// Finding User by Token

Users.byToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, "test"); /* test = password */
    const user = Users.findByPk(id);
    if (!user) {
      throw new error(401);
    }
    return user;
  } catch (err) {
    const errMsg = Error("bad token");
    errMsg.status = 401;
    throw errMsg;
  }
};

Users.getId = async function (token) {
  try {
    const data = await jwt.verify(token, "test");
    return data.id;
  } catch (err) {
    const errMsg = Error("bad token");
    errMsg.status = 401;
    throw errMsg;
  }
};

// authenticating the User name and password connection
Users.authenticate = async function ({ username, password }) {
  const user = await this.findOne({ where: { username } });
  if (!user || !(await user.correctPassword(password))) {
    const errMsg = Error("Incorrect Username or Password");
    errMsg.status = 401;
    throw errMsg;
  }
  return user.generateToken();
};

Users.Verify = async function ({ token }) {
  if (jwt.verify(token, "test")) {
    return true;
  } else {
    return false;
  }
};

// Hooks to hash the password after a new user is created

const hashPassword = async (user) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, 5);
  }
};

// Hooks to make this happen on creation :D

Users.beforeCreate(hashPassword);
Users.beforeUpdate(hashPassword);

module.exports = Users;
