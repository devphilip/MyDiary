const myDiary = require("../model/diary.data.js");

exports.readAll = (req, res) => {
  res.status(200).send(myDiary);
}

exports.readOne = (req, res) => {
  const myDiaryId = myDiary.find(d => d.id === req.params.id);
  
  res.send(myDiaryId);
}

