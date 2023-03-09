import React, { useState } from "react";
import WordEntry from "./WordEntry.jsx";

var initWords = [
  {word: 'react', definition: 'respond or behave in a particular way in response to something'},
  {word: 'word', definition: 'a single distinct meaningful element of speech or writing, used with others (or sometimes alone) to form a sentence and typically shown with a space on either side when written or printed.'},
  {word: 'glossary', definition: 'An alphabetical list of terms or words found in or relating to a specific subject, text, or dialect, with explanations; a brief dictionary.'},
  {word: 'galvanize', definition: 'shock or excite (someone) into taking action. Coat (iron or steel) with a protective layer of zinc.'},
  {word: 'list', definition: 'a number of connected items or names written or printed consecutively, typically one below the other.'}
];

var WordList = () => {

  const [wordList, setWordList] = useState(initWords);

  return (
    <div>
      {wordList.map((wordObj) => (
        <WordEntry wordObj={wordObj} />
      ))}
    </div>
  );

}

export default WordList;