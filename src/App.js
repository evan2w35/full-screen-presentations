import React, { useState } from "react";
import logo from "./logo.svg";
import Fullscreen from "react-full-screen";
import "./App.css";

function App() {
  const [isFull, goFull] = useState(false);

  return (
    <div className="App">
      <Fullscreen enabled={isFull} onChange={full => goFull(full)}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {!isFull ? (
            <button onClick={() => goFull(true)}>Go Fullscreen</button>
          ) : null}
        </header>
      </Fullscreen>
    </div>
  );
}

export default App;
