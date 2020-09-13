import React from "react";
import ReactDOM from "react-dom";
import Application from "./Data";
import { Font } from "@react-pdf/renderer";

//import fonts
Font.register({ family: 'Lato', fonts: [
  { src: './fonts/Lato/Lato-Regular.ttf' }, // font-style: normal, font-weight: normal
  { src: './fonts/Lato/Lato-Bold.ttf', fontStyle: 'bold'},
 ]},
 );

 //import fonts
Font.register({ family: 'Open Sans', fonts: [
  { src: './fonts/Open_Sans/OpenSans-Regular.ttf' }, // font-style: normal, font-weight: normal
  { src: './fonts/Open_Sans/OpenSans-Bold.ttf', fontStyle: 'bold'},
 ]});

const App = () => {
  return (
    <div className="App">
      <Application />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
