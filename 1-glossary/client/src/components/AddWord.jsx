import React, { useState } from "react";
import Axios from "axios";

var AddWord = ({allWords, setAllWords, setWordList}) => {

const [wordToAdd, setWordToAdd] = useState('');

  var handleChange = (e) => {
    e.preventDefault();
    console.log('Add word input: ', e.target.value);
    setWordToAdd(e.target.value);
  }

  var handleClick = (e) => {
    e.preventDefault();
    var newDef = prompt("Add a definition:", "Type definition here...");
    console.log('newDef: ', newDef);

    var newWordObj = {word: wordToAdd, definition: newDef};
    console.log('newWordObj: ', newWordObj);

    var allWordsCopy = allWords.slice();
    allWordsCopy.push(newWordObj);
    console.log('allWordsCopy: ', allWordsCopy);

    setAllWords(allWordsCopy);
    setWordList(allWordsCopy);

    // Axios.post('/glossary', {
    //   wordToAdd: wordToAdd,
    //   defToAdd: newDef
    // })
    // .then((res) => {
    //   console.log('POST SUCCESS: ', res);
    // })
    // .catch((err) => {
    //   console.log('POST ERROR: ', err);
    // })

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