const model = require('./model.js');

const post = (reqBody) => {
  console.log('SERVER POST: ', reqBody);
  let objValues = Object.values(reqBody);
  console.log('OBJ VALUES: ', objValues);
  // objValues appears in expected order

  model.insert(objValues);
}

exports.post = post;