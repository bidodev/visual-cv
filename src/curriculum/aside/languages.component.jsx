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

const LANGUAGES = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Full professional proficiency" },
  { name: "German", level: "Professional working proficiency" },
  { name: "Italian", level: "Professional working proficiency" },
];

export const Languages = () => (
  <View>
    <Text style={asideSectionTitle}>Languages</Text>
    {LANGUAGES.map((language) => (
      <Text style={styles.langItem}>{`${language.name} - ${language.level}`}</Text>
    ))}
  </View>
);

export default Languages;
