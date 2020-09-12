import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";

import sharedStyles from '../../shared/global.styles';

//call the function to generate the sharedStyles.
const { paragraph, sectionTitle } = sharedStyles();

const styles = StyleSheet.create({
  work: {
    marginTop: 20,
    height: "auto",
  },
});

const Career = () => {
  return (
    <View style={styles.work}>
      <Text style={sectionTitle}>Work Experience</Text>
      <Text style={paragraph}>
        Curabitur vel erat eget turpis tempor sodales in sit amet velit.
        Curabitur et porttitor lorem, et ultricies ipsum. Nulla justo ipsum,
        auctor volutpat odio sit amet, fringilla blandit eros. Duis sed magna
      </Text>
      <Text style={paragraph}>
        Curabitur vel erat eget turpis tempor sodales in sit amet velit.
        Curabitur et porttitor lorem, et ultricies ipsum. Nulla justo ipsum,
        auctor volutpat odio sit amet, fringilla blandit eros. Duis sed magna
      </Text>
    </View>
  );
};

export default Career;
