const express = require("express")
const router = express.Router();


router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/", (req, res) => {
  res.send("Add a post");
});

router.get("/add", (req, res) => {
  res.send("Add a form");
});

module.exports = router;
