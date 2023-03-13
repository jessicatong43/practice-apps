const db = require('./db.js');
const Promise = require("bluebird");

const insert = (objValues) => {
  console.log('MODEL INSERT: ', objValues);
  return db.write(objValues)
  .then((dbData) =>  {
    console.log('WRITE SUCCESS - MODEL: ', dbData);
    return dbData;
  })
  .catch((err) => {
    console.log('MODEL WRITE ERROR: ', err);
    return err;
  })
};


exports.insert = insert;