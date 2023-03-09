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
  // TODO: implement save to write to db
}

let getAll = () => {
  console.log('INSIDE GETALL');
  // TODO: implement getAll to query to db
  return Word.find({});
}

let editOne = () => {
  // TODO: implement edit to write to db
}

let deleteOne = () => {
  // TODO: implement delete to remove from db
}

exports.createOne = createOne;
exports.getAll = getAll;
exports.editOne = editOne;
exports.deleteOne = deleteOne;