import React from "react";
import ReactDOM from "react-dom";
import Application from "./Data";
import { Font } from "@react-pdf/renderer";

//import fonts
import { Lato, OpenSans } from './shared/fonts';
Font.register(Lato);
Font.register(OpenSans);


const App = () => {
  return (
    <div className="App">
      <Application />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
