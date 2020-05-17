import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Title";

function App() {
  return (
    <div className="App">
      <main>
        <Title />
      </main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Welcome to Codai sseur
        </a>
      </header>
    </div>
  );
}

export default App;
