import React from "react";
import "./App.css";
import Colourpick from "C:/Users/EQ2040AU/react-task3/src/Components/Colorpick.js";

function App() {
  return (
    <div className="background d-flex flex-row justify-content-center align-items-center">
      <h1 className="text-center h1 fw-bold">Color Picker</h1>
      <Colourpick/>
    </div>
  );
}

export default App;