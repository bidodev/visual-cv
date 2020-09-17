import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";

import { sharedStyles } from "../../helpers/shared/global.styles";

//call the function to generate the sharedStyles.
const { paragraph, sectionTitle } = sharedStyles;

const styles = StyleSheet.create({
  career: {
    marginTop: 20,
    height: "auto",
    display: "flex",
    justifyContent: "center",
    color: '#fff',
    fontSize: 10,
    lineHeight: 1.4,
    letterSpacing: 0.2,
    fontFamily: "Poppins"
  },
});

const Career = () => {
  return (
    <View style={styles.career}>
      <Text>Software Engineer with 5 years of experience as a System Administrator,
        recently attended a 1-year intensive Full-stack Web development training
        to strengthen my skills and learn modern web programming.
      </Text>
      <Text>Currently seeking a position in a cooperative and creative team to
        sharpen my skills and deliver solution-oriented approaches.
      </Text>
    </View>
  );
};

export default Career;
