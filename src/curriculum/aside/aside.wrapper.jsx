import React from "react";
import { StyleSheet, View } from "@react-pdf/renderer";

//import sections
import Avatar from "./avatar.component";
import Career from './career.component';
import Contact from "./contact.component";
import TechnicalSkills from "./technical.skills.component";
import SoftSkills from "./soft.skills.component";
import Languages from "./languages.component";
import Social from "./social.component";

const Aside = ({ primaryColor }) => {
  const styles = StyleSheet.create({
    aside: {
      backgroundColor: `${primaryColor}`,
      height: "830",
      width: "210",
      color: '#fff',
    },
  });

  return (
    <View style={styles.aside}>
      <Avatar />
      <View
        style={{
          paddingHorizontal: 15,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Career />
        <TechnicalSkills />
        <SoftSkills />
        <Languages />
        <Contact />
        <Social />
      </View>
    </View>
  );
};

export default Aside;
