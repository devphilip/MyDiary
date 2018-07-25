import entriesDB from "../models/entriesDB";

const entriesCtrl = {};

entriesCtrl.getAllEntries = (req, res) => {
  res.status(200).send(entriesDB);
};

entriesCtrl.getOneEntry = (req, res) => {
  const entryId = entriesDB.find((e) => {
    e.id === parseInt(req.params.id)
  });

  res.status(200).send(entryId);
};

export default entriesCtrl;