const express = require("express")
const router = express.Router();
const addPage = require("../views/addPage"); 

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/", (req, res) => {
  res.send("Add a post");
});

router.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = router;
