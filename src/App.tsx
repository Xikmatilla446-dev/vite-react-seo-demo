import React, { useState } from "react";
import "normalize.css";
import "sakura.css";
import "./App.css";


import Routes from "./routes";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import {Router} from "@reach/router";


function App() {
  return (
      <Router>
          <Home path="/" />
          <Video path="/video" />
      </Router>
  );
}

export default App;
