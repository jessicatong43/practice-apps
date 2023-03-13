const model = require('./model.js');

const post = (reqBody, res) => {
  let objValues = Object.values(reqBody);
  // objValues appears in expected order

  return model.insert(objValues)
  .then((resData) => {
    console.log('WRITE SUCCESSFUL - CONTROLLER: ', resData);
    return resData;
  })
  .catch((err) => {
    console.log('CONTROLLER WRITE RES ERROR: ', err)
  })
}

exports.post = post;