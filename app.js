const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.redirect("/api/v1/diary")
})

app.get("/api/v1/diary", (req, res) => {
  res.send("Hello from redirect");
})

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});