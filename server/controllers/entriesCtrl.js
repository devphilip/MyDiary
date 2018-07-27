import entriesDB from "../models/entriesDB";

const entriesCtrl = {};

entriesCtrl.getAllEntries = (req, res) => {
  res.status(200).send(entriesDB);
};

entriesCtrl.getOneEntry = (req, res) => {
  const entryId = entriesDB.find(e => e.id === parseInt(req.params.id));
  
  res.status(200).send(entryId);
};

entriesCtrl.createEntry = (req, res) => {
	if (req.body == {}) {
    return res.status(400).send("The entry cannot be empty.");
	}

  const entry = {
    id: entriesDB.length + 1,
    title: req.body.title, 
    content: req.body.content
  };

  entriesDB.push(entry);
  res.send(entry);
};

entriesCtrl.update = (req, res) => {

  const entryId = entriesDB.find(e => e.id === parseInt(req.params.id));

  if (!entryId) {
      return res.status(404).send("The Diary entry with the given ID was not found.")
  };

  entryId.title = req.body.title;
  entryId.content = req.body.content;
  res.send(entryId);
};

entriesCtrl.delete = (req, res) => {
  const entryId = entriesDB.find(e => e.id === parseInt(req.params.id));

  if (!entryId) {
      return res.status(404).send("The Diary entry with the given ID was not found.")
  };

  const index = entriesDB.indexOf(entryId);
    entriesDB.splice(index, 1);

  res.send(entryId);
};

export default entriesCtrl;