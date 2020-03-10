import React, { useState } from "react";
import Fullscreen from "react-full-screen";
import { AiOutlineFullscreen } from "react-icons/ai";
import { GoScreenFull } from "react-icons/go";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isFull, goFull] = useState(false);

  const style = {
    width: "100px",
    height: "100px"
  };

  return (
    <div className="App">
      <header className="App-header">
        <Fullscreen enabled={isFull} onChange={value => goFull(value)}>
          <img
            src={logo}
            className={isFull ? "selected" : "App-logo"}
            alt="logo"
          />
        </Fullscreen>
        {/* {!isFull ? ( */}
        <button onClick={() => goFull(true)}>Go Fullscreen</button>
        {/* ) : null} */}
        <br />
        {/* {!isFull ? ( */}
        <button onClick={() => goFull(true)}>
          <AiOutlineFullscreen style={style} />
        </button>
        {/* ) : null} */}
        <br />
        {/* {!isFull ? ( */}
        <button onClick={() => goFull(true)}>
          <GoScreenFull style={style} />
        </button>
        {/* ) : null} */}
      </header>
    </div>
  );
}

export default App;
