const morgan = require("morgan");
const express = require("express");
const app = express();
const layout = require("./views/layout");

app.use(morgan);
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(layout(""));
});



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
