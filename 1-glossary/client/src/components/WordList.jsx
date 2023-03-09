import React, { useState } from "react";


var WordList = () => {

  const [wordList, setWordList] = useState([]);

  console.log('inside WordList');
  return (
    <div>WordList goes here.</div>
  );
}

export default WordList;