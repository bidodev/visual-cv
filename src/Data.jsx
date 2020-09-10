import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "./Template";

export default function Data() {
  const [cvDetails, setDetails] = useState({
    name: "Claudinei Bido",
    position: "Software Engineer",
    address: "Landgrafenstr 19",
    phone: "+49 1791037171",
    subject: "Application Internship Full-Stack Developer at Tillhub GmbH",
    email: "claudinei.bido@gmail.com",
    github: "https://github.com/bidodev",
    linkedin: "https://www.linkedin.com/in/bidoc/",
    website: "https://bido.dev/"
  });

  return (
    <div className="container">
      <label htmlFor="movies">UI CV</label>
      <PDFDownloadLink
        document={<PdfDocument data={cvDetails} />}
        fileName="cv.pdf"
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
}
