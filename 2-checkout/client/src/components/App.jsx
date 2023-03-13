import React, { useState, useEffect } from "react";
import Axios from "axios";

const App = () => {

  useEffect()

  Axios.post('/checkout', {req.body})
  .then((data) => {
    console.log('POST SUCCESS: ', data);
    // set states for page
  })
  .catch((err) => {
    console.log('CLIENT POST ERROR: ', err);
  });

  return (
    <div>
      <h1>Checkout</h1>
      <button>Checkout</button>
    </div>
  )

};

export default App;