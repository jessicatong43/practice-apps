import React from "react";
import WordList from "./WordList.jsx";
import AddWord from "./AddWord.jsx";

var App = () => {

  return (
    <div id="app">
      <h1>myGlossary</h1>
      <AddWord />
      <form id="searchbar">
        <input type="search" />
        <button>
          <i className="fa-solid fa-magnifying-glass" />
        </button>
      </form>
      <div id="wordlist">
        <WordList />
      </div>
    </div>
  );

}

export default App;


