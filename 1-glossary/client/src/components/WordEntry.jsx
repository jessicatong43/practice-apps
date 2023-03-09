import React from "react";


var WordEntry = ({wordObj}) => {

  return (
    <div className="wordEntry">
      <h3 className="word">{wordObj.word}</h3>
      <div className="editDeleteBtns">
        <button className="editBtn">Edit</button>
        <button className="deleteBtn">Delete</button>
      </div>
      <p>{wordObj.definition}</p>
    </div>
  )

}

export default WordEntry;