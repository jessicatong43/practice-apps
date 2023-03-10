import React, { useState } from "react";
import WordEntry from "./WordEntry.jsx";

var WordList = ({wordList}) => {

  // console.log('WORDLIST: ', wordList);

  return (
    <div>
      {wordList?.map((wordObj) => (
        <WordEntry wordObj={wordObj} key={wordObj.word} />
      ))}
    </div>
  );

}

export default WordList;