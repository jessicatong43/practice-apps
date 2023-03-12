const db = require('./db.js');

const insert = (objValues) => {
  console.log('MODEL INSERT: ', objValues);
  db.write(objValues);

};

exports.insert = insert;