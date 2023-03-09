import React from "react";
import WordList from "./WordList.jsx"

var App = () => {
  return (
    <div id='app'>
      <h1>myGlossary</h1>
      <button id='addButton'><i class="fa-solid fa-book"></i> Add a word</button>
      <form id='searchbar'>
        <input type='search' />
        <button>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <div id='wordlist'>
        <WordList />
      </div>
    </div>
  );
}

export default App;


