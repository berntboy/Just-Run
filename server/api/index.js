const express = require("express");

const router = express.Router();

router.use("/runners", require("./runners"));
router.use("/user", require("./user"));

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
