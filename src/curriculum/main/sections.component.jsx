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
        "Taught students best code structuring and coding practices using design patterns such as MVC and FLUX",
        "Instructed how to find and solve problems in the code using debuggers and tools like Google and React Developer Tools",
        "Planned lessons and prepared learning modules for tutoring sessions according to students' needs and goals"
      ],
      position: "Web Development Tutor",
      city: "Berlin",
    },
    {
        company: "Arvato - Bertelsmann",
        date: "Sep 2017 - Oct 2019",
        details: [
          "Investigated a daily basis of 200 customer queries, solving 98% successfully",
          "Achieved the highest performance in the company as part of a team of 80, reviewing twice the requested amount of tickets, with an accuracy of 99%",
          "Frequently attended educational training to improve knowledge and performance levels. Concluded more than 20 courses in the E-learning platform"
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
          "Designed performant, maintainable, and scalable servers and services using low-cost solutions, reducing the costs up to 50%",
        ],
        position: "Systems Administrator",
        city: "Soledade (Brazil)",
    },
    {
      company: "SMO Internet Provider",
      date: "Jan 2012 - Nov 2013",
      details: [
        "Worked together with clients to create servers and clouds (VMWARE/ AWS) to deliver solutions according to theirs' needs",
        "Maintained hardware and networks, updated components, corrected errors, providing Customer Service",
        "Proposed the complete replacement of paid systems by Open-Source, solutions, generating savings of over 20% of the budget"
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
        "One year intensive-full-time training including technologies from MERN stack",
        "Conceptualized and developed over 25 projects individually and 3 Full Stack projects in group",
        "Successfully led 2 group projects using Agile Methodologies",
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
