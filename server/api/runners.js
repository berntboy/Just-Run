const express = require("express");
const { Users, Runs } = require("../db");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const runners = await Users.findAll({ include: [{ model: Runs }] });

    res.json(runners);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const runner = await Users.findByPk(req.params.id, {
      include: [{ model: Runs }],
    });

    res.json(runner);
  } catch (err) {
    next(err);
  }
});

router.put("/logout", async (req, res, next) => {
  res.clearCookie("token");
  res.end();
});

router.post("/", async (req, res, next) => {
  try {
    const addRun = await Runs.create(req.body);
    res.json(addRun);
  } catch (err) {
    next(err);
  }
});

router.post("/addUser", async (req, res, next) => {
  try {
    const addUser = await Users.create(req.body);

    res.json(addUser);
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    res.cookie("token", await Users.authenticate(req.body));
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get("/verify", async (req, res, next) => {
  try {
    if (!req.cookies.token) {
      res.send(false);
    } else if (await Users.Verify(req.cookies)) {
      console.log("COOKIES:", req.cookies);
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
