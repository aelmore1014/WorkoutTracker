const router = require("express").Router()
const db = require("../models")
const path = require("path")

router.use("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

router.use("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

router.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

module.exports = router