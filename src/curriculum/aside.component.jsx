import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";

const Aside = ({ primaryColor }) => {
  const styles = StyleSheet.create({
    aside: {
      backgroundColor: `${primaryColor}`,
      height: "795",
      width: "200",
    },
  });

  return (
    <View style={styles.aside}>
      <Text>Hello Aside</Text>
    </View>
  );
};

export default Aside;
