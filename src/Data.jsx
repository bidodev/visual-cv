import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "./Template";

export default function Data() {
  const [cvDetails, setDetails] = useState({
    name: "Claudinei Bido",
    position: "Software Engineer",
    address: "Landgrafenstr 19",
    phone: "+49 179 1037171",
    subject: "Application Internship Full-Stack Developer at",
    email: "claudinei.bido@gmail.com",
    github: "https://github.com/bidodev",
    linkedin: "https://www.linkedin.com/in/bidoc/",
    website: "https://bido.dev/",
    regards: "Best Regards",
    recruiterName: "Oliver Kuhn",
    greetings: "Dear",
    companyName: "Tillhub GmbH",

    //each object will render one paragraph
    contentCoverLetter: [
      { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a aliquet diam, eget accumsan erat. Aliquam sit amet tempor ligula. Ut erat libero, fringilla eget lectus a, ultrices semper elit. Sed efficitur venenatis lectus, quis laoreet eros sodales a. Mauris nec ipsum accumsan, tristique mauris in, faucibus lorem. Vestibulum rhoncus finibus consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." },
      { id: 2, text: "Aenean mollis vehicula sem vitae mattis. Ut ac odio in ipsum lobortis blandit. Nulla facilisi. Aliquam vel nisi consequat, tincidunt justo ut, suscipit ligula. Phasellus at elementum lorem. In risus nunc, interdum sit amet accumsan blandit, egestas sed ligula. Sed pellentesque, sem nec bibendum euismod, turpis augue interdum urna, quis eleifend ipsum urna id quam. Vestibulum enim sem, porta eu sollicitudin vitae, ullamcorper eget augue. Aenean suscipit ipsum vitae vehicula lobortis. Etiam sem nisi, tincidunt eu leo quis, auctor pharetra arcu. Sed tincidunt lacus odio, a mollis dolor efficitur a. Sed velit lacus, maximus quis nisl lacinia, vehicula egestas arcu. Mauris vitae suscipit dolor. Vivamus et dui condimentum, bibendum libero id, rhoncus velit. Nulla facilisi. Integer convallis lacus et volutpat egestas." },
      { id: 3, text: "Duis pharetra sapien ut sodales volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur vel erat eget turpis tempor sodales in sit amet velit. Curabitur et porttitor lorem, et ultricies ipsum. Nulla justo ipsum, auctor volutpat odio sit amet, fringilla blandit eros. Duis sed magna vitae enim maximus facilisis. Curabitur eu enim nunc. Sed dapibus dui arcu, in malesuada leo consequat quis. Maecenas eleifend dictum lorem a condimentum. Ut id auctor urna, in sagittis lacus. Vestibulum rutrum elit in lectus pretium lobortis. Aenean molestie fringilla nunc, at eleifend arcu vehicula ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam interdum felis sed magna molestie, quis ullamcorper lorem pretium. Pellentesque consectetur erat nec nulla imperdiet ultrices." },
    ],
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
