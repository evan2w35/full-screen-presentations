import React, { useState } from "react";
import logo from "./logo.svg";
import Fullscreen from "react-full-screen";
import { AiOutlineFullscreen } from "react-icons/ai";
import { GoScreenFull } from "react-icons/go";
import "./App.css";

function App() {
  const [isFull, goFull] = useState(false);

  const style = {
    width: "100px",
    height: "100px"
  };

  return (
    <div className="App">
      <Fullscreen enabled={isFull} onChange={value => goFull(value)}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {!isFull ? (
            <button onClick={() => goFull(true)}>Go Fullscreen</button>
          ) : null}
          <br />
          {!isFull ? (
            <button onClick={() => goFull(true)}>
              <AiOutlineFullscreen style={style} />
            </button>
          ) : null}
          <br />
          {!isFull ? (
            <button onClick={() => goFull(true)}>
              <GoScreenFull style={style} />
            </button>
          ) : null}
        </header>
      </Fullscreen>
    </div>
  );
}

export default App;
