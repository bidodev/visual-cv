import React from "react";
import { StyleSheet, View } from "@react-pdf/renderer";

/**
 * @Import
 * Sections inside the main Curriculum -> Main
 */

import Career from "./career.component";
import Work from "../../components/entry/list.component";

const Main = () => {
  //const sectionsOrders = [];
  const styles = StyleSheet.create({
    main: {
      paddingRight: 20,
      paddingLeft: 15,
      width: "390",
      height: "795",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      borderColor: "green",
    },
  });

  const experienceData = [
    {
      company: "DCI - Digital Career Institute GmbH",
      date: "Jan 2020 - Present",
      details: [
        "Tutoring students, using React, JavaScript, CSS, focus on MERN stack",
        "Explaining how to solve problems and reviewing students completed work",
        "Helping students to develop best codes practices and organization techniques",
      ],
      position: "Web Development Tutor",
      city: "Berlin",
    },
    {
        company: "DCI - Digital Career Institute GmbH",
        date: "Jan 2020 - Present",
        details: [
          "Tutoring students, using React, JavaScript, CSS, focus on MERN stack",
          "Explaining how to solve problems and reviewing students completed work",
          "Helping students to develop best codes practices and organization techniques",
        ],
        position: "Web Development Tutor",
        city: "Berlin",
      },
      {
        company: "DCI - Digital Career Institute GmbH",
        date: "Jan 2020 - Present",
        details: [
          "Tutoring students, using React, JavaScript, CSS, focus on MERN stack",
          "Explaining how to solve problems and reviewing students completed work",
          "Helping students to develop best codes practices and organization techniques",
        ],
        position: "Web Development Tutor",
        city: "Berlin",
      },
  ];

  const educationData = [
    {
      company: "DCI Digital Career Institute GmbH, Berlin",
      date: "Set 2019 - Jan 2021",
      details: [
        "Accomplishing a one-year-full-time training with technologies from MERN stack",
        "Completing multiple projects to practice the learned skills",
        "Taking C1 German course as part of the training.",
      ],
      position: "Certificate, Full Stack Web Development Course",
      city: "Berlin",
      },
      {
        company: "UFFS - Universidade Federal da Fronteira Sul",
        date: "Feb 2010 - Nov 2012",
        details: [
          "Accomplishing a one-year-full-time training with technologies from MERN stack",
        ],
        position: "Bachelor's degree, Computer Science",
        city: "Chapeco",
      },
  ];

  const { main } = styles;
  return (
    <View style={main}>
      <Career />
      <Work data={experienceData} title={"Work Experience"} />
      <Work data={educationData} title={"Education"} />
    </View>
  );
};

export default Main;
