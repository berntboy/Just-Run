const express = require("express");
const { Runners, Runs } = require("../db");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const runners = await Runners.findAll({ include: [{ model: Runs }] });

    res.json(runners);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const runner = await Runners.findByPk(req.params.id, {
      include: [{ model: Runs }],
    });

    res.json(runner);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const addRun = await Runs.create(req.body);

    res.json(addRun);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
