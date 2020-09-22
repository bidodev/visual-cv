import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";
import { sharedStyles } from "../../helpers/shared/global.styles";

//call the function to generate the sharedStyles.
const { asideSectionTitle } = sharedStyles;

const styles = StyleSheet.create({
  itensWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  item: {
    color: "#fff",
    fontSize: 10,
    marginBottom: 5,
  },
  extra: {
    color: "transparent",
    fontSize: 10,
  },
});

const SKILLS = [
  { skill: "React, Redux", extra: ", React Hooks, ReactJS", },
  { skill: "JavaScript/ES6", extra: ", OOP" },
  { skill: "HTML, CSS, SASS, Bootstrap", extra: ", Flex, Grid" },
  { skill: "Node.js, Express", extra: "React Hooks" },
  { skill: "REST, GraphQL", extra: "Rest API" },
  { skill: "MongoDB, Mongoose, Firebase", extra: "Compass" },
  { skill: "NoSQL, SQL", extra: "Json" },
  { skill: "JSON Web Token", extra: "Authentication" },
  { skill: "Git, GitHub, Heroku", extra: "Deployment" },
  { skill: "MySQL, SQLite", extra: "Phpmyadmin" },
  { skill: "Yarn, NPM", extra: "Eslint" },
  { skill: "Webpack, Babel, Parcel Bundler", extra: "React Hooks" },
  { skill: "Linux, Terminal, Visual Code", extra: ", Servers, Windows" },
];

export const TechnicalSkills = () => (
  <View>
    <Text style={asideSectionTitle}>Tools & Technologies</Text>
    {SKILLS.map(({ skill, extra }) => (
      <View style={styles.itensWrapper}>
        <Text style={styles.item}>{skill}</Text>
      </View>
    ))}
  </View>
);

export default TechnicalSkills;
