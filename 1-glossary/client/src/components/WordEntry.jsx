import React from "react";
import Axios from "axios";


var WordEntry = ({wordObj, setWordList, setAllWords}) => {

  var deleteHandler = (e) => {
    console.log('e.target.value: ', e.target.value);
    Axios.delete('/glossary', {data: {word: e.target.value}})
    .then(() => {
      console.log('DELETE SUCCESSFUL');
      return Axios.get('/glossary');
    })
    .then((resData) => {
      console.log('DELETE-GET DATA: ', resData);
      setWordList(resData.data);
      setAllWords(resData.data);
    })
  }

  return (
    <div className="wordEntry">
      <h3 className="word">{wordObj.word}</h3>
      <div className="editDeleteBtns">
        <button className="editBtn" value={wordObj.word}>Edit</button>
        <button className="deleteBtn" value={wordObj.word} onClick={deleteHandler}>Delete</button>
      </div>
      <p>{wordObj.definition}</p>
    </div>
  )

}

export default WordEntry;