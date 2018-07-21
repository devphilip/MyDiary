module.exports = (app) => {
  const diaryCtrl = require("../controllers/diary.controller");

  // Retrieve all Diary
  app.get("/api/v1/diary", diaryCtrl.readAll);

  // Retrieve a single Diary with diaryId
  app.get("/api/v1/diary/:id", diaryCtrl.readOne);

  // // Create a new Diary
  // app.post("/api/v1/diary", diaryCtrl.create);

  // // Update a Diary with diaryId
  // app.put("/api/v1/diary/:id", diaryCtrl.update);

  // // Delete a Diary with diaryId
  // app.delete("/api/v1/diary/:id", diaryCtrl.delete);
}