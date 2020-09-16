import React from "react";
import { Text, StyleSheet, View, Image } from "@react-pdf/renderer";

import { sharedStyles } from "../../helpers/shared/global.styles";

//call the function to generate the sharedStyles.
const { asideSectionTitle } = sharedStyles;

const styles = StyleSheet.create({
  item: {
    color: '#fff',
    fontSize: 10,
    marginBottom: 5,
  }
});

export const Contact = () => (
  <View>
    <Text style={asideSectionTitle}>Contact</Text>
    <Text style={styles.item}>+49 179 1037171</Text>
    <Text style={styles.item}>claudinei.bido@gmail.com</Text>
    <Text style={styles.item}>Berlin, Germany</Text>
  </View>
);

export default Contact;
