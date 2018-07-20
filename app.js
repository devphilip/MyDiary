const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const diary = require("./model/diary.data.js");

app.get("/", (req, res) => {
  res.send("Hello");
  //res.redirect("/api/v1/diary")
});

require("./routes/diary.route.js")(app);

exports.readAll = (req, res) => {
  res.send("woooooo");
  console.log(diary);
  //res.send(myDiary);
}

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});