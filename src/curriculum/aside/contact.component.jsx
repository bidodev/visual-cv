import React from "react";
import { Text, StyleSheet, View, Image } from "@react-pdf/renderer";

import { sharedStyles } from "../../shared/global.styles";

//call the function to generate the sharedStyles.
const { asideSectionTitle } = sharedStyles;

const styles = StyleSheet.create({});

export const Contact = () => (
  <View>
    <Text style={asideSectionTitle}>Contact</Text>
  </View>
);

export default Contact;
