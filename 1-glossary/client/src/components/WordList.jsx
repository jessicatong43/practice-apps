import React, { useState } from "react";
import WordEntry from "./WordEntry.jsx";

var WordList = ({wordList, setWordList, setAllWords}) => {

  // console.log('WORDLIST: ', wordList);

  return (
    <div>
      {wordList?.map((wordObj) => (
        <WordEntry wordObj={wordObj} key={wordObj.word} setWordList={setWordList} setAllWords={setAllWords} />
      ))}
    </div>
  );

}

export default WordList;