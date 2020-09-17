import React from "react";
import { StyleSheet, View } from "@react-pdf/renderer";

/**
 * @Import
 * Sections inside the main Curriculum -> Main
 */

import Section from "../../components/entry/list.component";

const Main = () => {
  //const sectionsOrders = [];
  const styles = StyleSheet.create({
    main: {
      paddingRight: 20,
      paddingLeft: 15,
      width: "390",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
    },
  });

  const experienceData = [
    {
      company: "DCI - Digital Career Institute GmbH",
      date: "Jan 2020 - Present",
      details: [
        "Tutored more than 15 students using React, Node.js, JavaScript, CSS, SASS, and other technologies from MERN Stack, such as express and MongoDB",
        "Taught students best code structuring and coding practices using design partners such as MVC and FLUX",
        "Instructed how to find and solve problems in the code using debuggers and tools like Google and React Developer Tools",
      ],
      position: "Web Development Tutor",
      city: "Berlin",
    },
    {
        company: "Arvato - Bertelsmann",
        date: "Sep 2017 - Oct 2019",
        details: [
          "Investigated and resolved customer queries, resolving 98% successfully",
          "Reached the defined targets, reviewed twice the requested amount of tickets",
          "Achieved the highest performance in the company as part of a team, ending the backlog with an accuracy of 99%",
        ],
        position: "Social Media Moderator",
        city: "Berlin",
      },
      {
        company: "Sontag Commercial Automation",
        date: "Feb 2014 - Dec 2016",
        details: [
          "Monitored more than 1000 servers among a team of 10, efficiently delivered a stable and reliable product, assuring our customers a fast response in case of software/hardware failures",
          "Automated the daily routines of the Datacenter by developing scripts using technologies such as JavaScript, PHP, Lua, Shell Script, and SQL",
          "Designed servers and clouds (AWS) according to the software (LAMP, Node JS) and customers' needs",
        ],
        position: "Systems Administrator",
        city: "Soledade (Brazil)",
    },
    {
      company: "SMO Internet provider",
      date: "Jan 2012 - Nov 2013",
      details: [
        "Worked together with clients to create servers and clouds (VMWARE) to deliver solutions according to their's needs",
        "Designed performant, maintainable, and scalable servers and services using low-cost solutions, reducing the costs up to 50%",
        "Maintained hardware and networks, updated components, corrected errors, providing Customer Service",
      ],
      position: "Systems Administrator",
      city: "Sao Miguel do Oeste (Brazil)",
    },
  ];

  const educationData = [
    {
      company: "DCI Digital Career Institute GmbH, Berlin",
      date: "Set 2019 - Jan 2021",
      details: [
        "Accomplishing a one-year-full-time training with technologies from MERN stack",
        "Completing more than 5 complete projects and serveral small projects to practice the learned technologies",
        "Taking C1 German course as part of the training.",
      ],
      position: "Certificate, Full Stack Web Development Course",
      city: "Berlin",
      },
      {
        company: "UFFS - Universidade Federal da Fronteira Sul",
        date: "Feb 2010 - Nov 2012",
        details: [],
        position: "Bachelor's degree not graduated, Computer Science  ",
        city: "Chapeco",
    },
            {
        company: "SENAI - SERVICO Nacional de Aprendizagem Industrial",
        date: "Feb 2007 - Jan 2010",
        details: [],
        position: "Professional Diploma, IT Computer Technician",
        city: "Sao Miguel do Oeste",
      },
  ];

  const { main } = styles;
  return (
    <View style={main}>
      {/* <Career /> */}
      <Section data={experienceData} title={"Work Experience"} />
      <Section data={educationData} title={"Education"} />
    </View>
  );
};

export default Main;
