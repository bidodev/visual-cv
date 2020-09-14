import React from "react";
import { Text, StyleSheet, View, Image } from "@react-pdf/renderer";
import { sharedStyles } from "../../shared/global.styles";

//call the function to generate the sharedStyles.
const { asideSectionTitle } = sharedStyles

const styles = StyleSheet.create({});

export const Languages = () => (
  <View>
    <Text style={asideSectionTitle}>Languages</Text>
  </View>
);

export default Languages;
