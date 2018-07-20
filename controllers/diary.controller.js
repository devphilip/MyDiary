const myDiary = require("../model/diary.data.js");

exports.readAll = (req, res) => {
  res.status(200).send(myDiary);
}