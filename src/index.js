import React from "react";
import ReactDOM from "react-dom";
import Application from "./Data";
import { PDFViewer } from '@react-pdf/renderer';

import "./index.css";

function App() {
  const handleClick = () => {
    return (
    <PDFViewer>
      <Application />
    </PDFViewer>
    )

  }
  return (
    <div className="App">
      <button onClick={()=> handleClick()}>View Online</button>
      <Application />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
