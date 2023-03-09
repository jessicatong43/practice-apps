import React, { useState } from "react";
import Axios from "axios";

var AddWord = ({allWords, setAllWords, setWordList}) => {

const [wordToAdd, setWordToAdd] = useState('');

  var handleChange = (e) => {
    e.preventDefault();
    setWordToAdd(e.target.value);
  }

  var handleClick = (e) => {
    e.preventDefault();

    if (wordToAdd === '') {
      return;
    }

    var newDef = prompt("Add a definition:", "Type definition here...");
    var newWordObj = {word: wordToAdd, definition: newDef};
    var allWordsCopy = allWords.slice();
    allWordsCopy.push(newWordObj);

    Axios.post('/glossary', newWordObj)
    .then((res) => {
      console.log('POST SUCCESS: ', res);
    })
    .catch((err) => {
      console.log('POST ERROR: ', err);
    })

    setAllWords(allWordsCopy);
    setWordList(allWordsCopy);
    document.getElementById("addInput").value = '';

  }

  return (
    <form id="addWord">
      <input id="addInput" type="text" onChange={handleChange} />
      <button id="addButton" onClick={handleClick}><i className="fa-solid fa-book" /> Add word</button>
    </form>
  )
}

export default AddWord;