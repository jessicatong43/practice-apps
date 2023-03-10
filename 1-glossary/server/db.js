const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/glossary');

const db = mongoose.connection;

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

const wordSchema = mongoose.Schema({
    word: {type: String, unique: true},
    definition: String
});

const Word = mongoose.model('Word', wordSchema);

let createOne = (wordObj) => {
  console.log('CREATEONE: ', wordObj);
  return Word.create(wordObj);
}

let getAll = () => {
  console.log('INSIDE GETALL');
  return Word.find({});
}

let editOne = () => {
  // TODO: implement edit to write to db
}

let deleteOne = (wordObj) => {
  // TODO: implement delete to remove from db
  console.log('INSIDE DELETE: ', wordObj);
  return Word.remove(wordObj);
}

exports.createOne = createOne;
exports.getAll = getAll;
exports.editOne = editOne;
exports.deleteOne = deleteOne;