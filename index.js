const morgan = require("morgan");
const express = require("express");
const app = express();
const layout = require("./views/layout");
const models = require('./models'); // Prev answer: { db, User, Page}
const user = require("./routes/user");
const wiki = require("./routes/wiki");
async function init() {
  await models.Page.sync(); // Page.sync
  await models.User.sync(); // User.sync

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));


models.db.authenticate(). // db.authenticate
  then(() => {
    console.log('connected to the database');
  })


app.get("/", (req, res) => {
  res.send(layout(""));
});


app.use('/wiki', wiki);
app.use('/user', user);

init();



const PORT = 3000;

