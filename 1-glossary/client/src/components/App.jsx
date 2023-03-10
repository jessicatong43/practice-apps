import React, { useState, useEffect } from "react";
import WordList from "./WordList.jsx";
import AddWord from "./AddWord.jsx";
import Search from "./Search.jsx";
import Axios from "axios";

var initWords = [
  {word: 'react', definition: 'respond or behave in a particular way in response to something'},
  {word: 'word', definition: 'a single distinct meaningful element of speech or writing, used with others (or sometimes alone) to form a sentence and typically shown with a space on either side when written or printed.'},
  {word: 'glossary', definition: 'An alphabetical list of terms or words found in or relating to a specific subject, text, or dialect, with explanations; a brief dictionary.'},
  {word: 'galvanize', definition: 'shock or excite (someone) into taking action. Coat (iron or steel) with a protective layer of zinc.'},
  {word: 'list', definition: 'a number of connected items or names written or printed consecutively, typically one below the other.'}
];

var App = () => {

    const [allWords, setAllWords] = useState(initWords);
    const [wordList, setWordList] = useState(initWords);

    useEffect(() => {
      Axios.get('/glossary')
      .then((resData) => {
        console.log('GET SUCCESS: ', resData);
        setAllWords(resData.data);
        setWordList(resData.data);
      })
      .catch((err) => {
        console.log('FINAL ERROR: ', err);
      });
    }, []);


  return (
    <div id="app">
      <h1>myGlossary</h1>
      <AddWord allWords={allWords} setAllWords={setAllWords} setWordList={setWordList}/>
      <Search allWords={allWords} setWordList={setWordList} />
      <div id="wordlist">
        <WordList wordList={wordList} setWordList={setWordList} setAllWords={setAllWords} />
      </div>
    </div>
  );

}

export default App;


