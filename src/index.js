import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Font, PDFDownloadLink } from "@react-pdf/renderer";
import { CoverLetter } from "./app";

//import data
import { EXPERIENCE, COLORS, USER_DATA } from "./data.js";

//register fonts
import { Lato, OpenSans } from "./shared/fonts";
Font.register(Lato);
Font.register(OpenSans);

const App = () => {
  //pieces of state
  const [experienceData, setExperienceData] = useState(EXPERIENCE);
  const [colors, setColors] = useState(COLORS);
  const [cvDetails, setDetails] = useState(USER_DATA);
  
  return (
    <div className="container">
      <label htmlFor="cv">UI CV</label>
      <PDFDownloadLink
        document={
          <CoverLetter
            data={cvDetails}
            colors={colors}
            cvData={experienceData}
          />
        }
        // fileName should be optmi
        fileName={`${cvDetails.name.toLowerCase().split(' ').join('_')}_${cvDetails.position.toLowerCase().split(' ').join('_')}`}
        style={{
          textDecoration: "none",
          padding: "10px",
          color: "#4a4a4a",
          backgroundColor: "#f2f2f2",
          border: "1px solid #4a4a4a",
        }}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download"
        }
      </PDFDownloadLink>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
