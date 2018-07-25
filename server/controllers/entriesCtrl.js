import entriesDB from "../models/entriesDB";

const entriesCtrl = {};

entriesCtrl.getAllEntries = (req, res) => {
  res.status(200).send(entriesDB);
};

export default entriesCtrl;