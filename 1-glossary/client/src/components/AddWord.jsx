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

    var newDef = prompt("Add a definition:");
    var newWordObj = {word: wordToAdd, definition: newDef};
    console.log('allWords: ', allWords);
    var allWordsCopy = [...allWords];
    allWordsCopy.push(newWordObj);

    Axios.post('/glossary', newWordObj)
    .then((postRes) => {
      console.log('POST SUCCESS: ', postRes);
      return Axios.get('/glossary');
    })
    .then((wordData) => {
      console.log('POST-GET SUCCESS: ', wordData);
      setAllWords(wordData.data);
      setWordList(wordData.data);
      setWordToAdd('');
      document.getElementById("addInput").value = '';
      })
    .catch((err) => {
      console.log('POST ERROR: ', err);
    })

  }

  return (
    <form id="addWord">
      <input id="addInput" type="text" onChange={handleChange} />
      <button id="addButton" onClick={handleClick}><i className="fa-solid fa-book" /> Add word</button>
    </form>
  )
}

export default AddWord;