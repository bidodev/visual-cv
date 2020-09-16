import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";
import { sharedStyles } from "../../helpers/shared/global.styles";

//call the function to generate the sharedStyles.
const { asideSectionTitle } = sharedStyles;

const styles = StyleSheet.create({
  item: {
    color: "#fff",
    fontSize: 10,
    marginBottom: 5,
  },
});

const SKILLS = [
  "React, Redux",
  "JavaScript",
  "HTML, CSS, SASS, Bootstrap",
  "Node.js, Express",
  "NoSQL, SQL",
  "Git, GitHub, Heroku",
  "Yarn, NPM",
  "Webpack, Babel, Parcel Bundler",
];

export const TechnicalSkills = () => (
  <View>
    <Text style={asideSectionTitle}>Tools & Technologies</Text>
    {SKILLS.map((skill) => (
      <Text style={styles.item}>{skill}</Text>
    ))}
  </View>
);

export default TechnicalSkills;
