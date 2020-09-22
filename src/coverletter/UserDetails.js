import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  //---- Start styles rules for the name and position ----//
  details: {
    width: "auto",
    height: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    color: '#fff',
  },

  heading: {
    fontSize: 23,
    textTransform: "uppercase",
    marginBottom: 2,
  },
  subheading: {
    fontSize: 14,
  },
  //---- End styles rules for the name and position ----//
});

const UserDetails = ({ name, position }) => {
  return (
    <View style={styles.details}>
      <Text style={styles.heading}>{name}</Text>
      <Text style={styles.subheading}>{position}</Text>
    </View>
  );
};

export default UserDetails;
