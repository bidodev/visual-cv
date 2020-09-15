import React from "react";
import { Text, StyleSheet, View, Image } from "@react-pdf/renderer";
import { sharedStyles } from "../../shared/global.styles";

//call the function to generate the sharedStyles.
const { asideSectionTitle } = sharedStyles;

const styles = StyleSheet.create({
  langItem: {
    color: '#fff',
    fontSize: 10,
    marginBottom: 5,
  }
});

const SKILLS = [
  { name: "Team player, Communicative"},
  { name: "Problem Solver, Hands on, Initiative" },
  { name: "Adept, Curious, Receptive"},
  { name: "Highly organized" },
  { name: "Project Management" },
];

export const SoftSkills = () => (
  <View>
    <Text style={asideSectionTitle}>Other Skills</Text>
    {SKILLS.map((skill) => (
      <Text style={styles.langItem}>{skill.name}</Text>
    ))}
  </View>
);

export default SoftSkills;
