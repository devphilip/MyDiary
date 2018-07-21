const myDiary = require("../model/diary.data.js");

exports.readAll = (req, res) => {
  res.status(200).send(myDiary);
}

exports.readOne = (req, res) => {
  const myDiaryId = myDiary.find(d => d.id === req.params.id);
  
  res.send(myDiaryId);
}

exports.create = (req, res) => {
	if (req.body == {}) {
    return res.status(400).send("The Diary entry cannot be empty.");
	}

  const diary = {
    id: myDiary.length + 1,
      title: req.body.title, 
      content: req.body.content
  };

  myDiary.push(diary);
  res.send(diary);
};

exports.update = (req, res) => {

  const myDiaryId = myDiary.find(d => d.id === parseInt(req.params.id));

  if (!myDiaryId) {
      return res.status(404).send("The Diary entry with the given ID was not found.")
  };

  myDiaryId.title = req.body.title;
  myDiaryId.content = req.body.content;
  res.send(myDiaryId);
};