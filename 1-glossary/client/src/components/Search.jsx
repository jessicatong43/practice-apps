import React, { useState } from "react";
import Axios from "axios";

var Search = ({allWords, setWordList}) => {

const [query, setQuery] = useState('');

  var handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value.toLowerCase());
  }

  var handleClick = (e) => {
    e.preventDefault();

    if (query === '') {
      setWordList(allWords);
    }

    var filtered = allWords.filter(word => (word.word.toLowerCase()).includes(query));
    setWordList(filtered);
    setQuery('');
    document.getElementById("searchbar").value = '';

  }

  return (
    <form id="search">
      <input id="searchbar" type="search" onChange={handleChange} />
      <button onClick={handleClick}>
        <i className="fa-solid fa-magnifying-glass" />
      </button>
    </form>
  )
}

export default Search;