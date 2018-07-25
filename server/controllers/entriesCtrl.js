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

export default entriesCtrl;