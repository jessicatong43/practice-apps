require("dotenv").config();
const express = require("express");
const path = require("path");
const model = require("./db.js");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

// Other routes here....
app.post('/glossary', (req, res) => {
  console.log('POST REQBODY: ', req.body); // already formatted
  model.createOne(req.body)
  .then((data) => {
    console.log('POST-CREATE: ', data);
    res.status(201).send();
  })
  .catch((err) => {
    console.log('SERVER POST ERROR: ', err);
  })
})

app.get('/glossary', (req, res) => {
  console.log('IN EXPRESS GET');
  model.getAll()
  .then ((allWordsData) => {
    console.log('GET RES: ', allWordsData);
    let formatted = allWordsData.map(wordObj => {
      return {
        word: wordObj.word,
        definition: wordObj.definition
      }
    });
    console.log('FORMATTED GET DATA: ', formatted);
    res.json(formatted);
  })
  .catch((err) => {
    console.log('SERVER GET ERROR: ', err);
  })
});


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
