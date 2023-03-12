import React, { useState, useEffect } from "react";
import Axios from "axios";


Axios.post('/checkout', {req.body})
.then((data) => {
  console.log('POST SUCCESS: ', data);
  // set states for page
})
.catch((err) => {
  console.log('CLIENT POST ERROR: ', err);
});