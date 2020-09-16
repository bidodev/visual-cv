import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";

import {sharedStyles} from "../../helpers/shared/global.styles";

//call the function to generate the sharedStyles.
const { paragraph, sectionTitle } = sharedStyles;

const styles = StyleSheet.create({
  career: {
    marginTop: 20,
    height: 100,
    display: "flex",
    justifyContent: "center",
    //fontFamily: "Lato Italic",
  },
});

const Career = () => {
  return (
    <View style={styles.career}>
      <Text style={sectionTitle}>Career Objective</Text>
      <Text style={paragraph}>
        Curabitur vel erat eget turpis tempor sodales in sit amet velit.
        Curabitur et porttitor lorem, et ultricies ipsum. Nulla justo ipsum,
        auctor volutpat odio sit amet, fringilla blandit eros. Duis sed magna a
        condimentum. Ut id auctor urna, in sagittis lacus. Vestibulum rutrum
      </Text>
    </View>
  );
};

export default Career;
