require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const controller = require('./controller.js');

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

// Router
app.post('/checkout', ((req, res) => {
  controller.post(req.body)
  .then((response) => {
    res.status(201).send();
  })
}));
app.get('/checkout', ((req, res) => {
  controller.get('SERVER GET REQ: ', req)
}))


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
