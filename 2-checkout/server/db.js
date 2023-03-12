const mysql = require("mysql2");
const Promise = require("bluebird");
// const schema = require("./schema.sql");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,      // "localhost"
  user: process.env.DB_USER,      // "root"
  password: process.env.DB_PASS,  // ""
  database: process.env.DB_NAME,  // "checkout"
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => {
    console.log(`Connected to MySQL as id: ${db.threadId}`);
    return db.threadId;
  })
  .then((threadId) => {
    console.log('BEFORE TABLE CREATION: ', threadId);
    // console.log('SCHEMA: ', schema);
    // Expand this table definition as needed:
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, session_id INT, user VARCHAR(50), email VARCHAR(50), addressLine1 VARCHAR(30), addressLine2 VARCHAR(30), city VARCHAR(20), state VARCHAR(2), zipcode INT, phone VARCHAR(20), ccNum VARCHAR(20), expDate DATE, cvv INT, ccZipcode INT)`
    )
  })
  .catch((err) => console.log(err));


var write = (objValues) => {
  console.log('DB WRITE: ', objValues);
  db.queryAsync(
    `INSERT INTO responses (session_id, user, email, addressLine1, addressLine2, city, state, zipcode, phone, ccNum, expDate, cvv, ccZipcode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, objValues
  )
  .then(() => {
    console.log('WRITE SUCCESSFUL');
  })
  .catch((err) => {
    console.log('WRITE ERROR: ', err);
  })
}

module.exports.db = db;
module.exports.write = write;