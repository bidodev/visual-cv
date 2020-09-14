import React from "react";
import { StyleSheet, View } from "@react-pdf/renderer";

//import sections
import Avatar from './avatar.component';
import Contact from './contact.component';
import TechnicalSkills from './technical.skills.component';
import SoftSkills from './soft.skills.component';
import Languages from "./languages.component";
import Social from "./social.component";

const Aside = ({ primaryColor }) => {
  const styles = StyleSheet.create({
    aside: {
      backgroundColor: `${primaryColor}`,
      height: "795",
      width: "200",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }
  });

  return (
    <View style={styles.aside}>
      <Avatar />
      <Contact />
      <TechnicalSkills />
      <SoftSkills />
      <Languages />
      <Social />
    </View>
  );
};

export default Aside;
