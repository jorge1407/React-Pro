import React from "react";
import "./App.css";
import HolaMundo from "./components/Holamundo";
import Adios from "./components/Adios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HolaMundo />
        <Adios />
      </header>
    </div>
  );
}

export default App;
