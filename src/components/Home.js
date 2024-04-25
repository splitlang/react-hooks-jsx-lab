import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return (
  <div id="Home">
    <h1 style={{color:"firebrick"}}>
      {name} is a web Developer from {city}
    </h1>
  </div>
  );
}

export default Home;
