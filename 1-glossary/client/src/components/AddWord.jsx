import React, { useState } from "react";
import Axios from "axios";

var AddWord = () => {

const [wordToAdd, setWordToAdd] = useState('');
// const [defToAdd, setDefToAdd] = useState('');

  var handleChange = (e) => {
    e.preventDefault();
    console.log('Add word input: ', e.target.value);
    setWordToAdd(e.target.value);
  }

  var handleClick = (e) => {
    e.preventDefault();
    var newDef = prompt("Add a definition:", "Type definition here...");
    // setDefToAdd(newDef);
    console.log('newDef: ', newDef);

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
  }

  return (
    <form id="addWord">
      <input type="text" onChange={handleChange} />
      <button id="addButton" onClick={handleClick}><i className="fa-solid fa-book" /> Add word</button>
    </form>
  )
}

export default AddWord;