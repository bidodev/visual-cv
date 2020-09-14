import React from "react";
import { Text, StyleSheet, View, Image } from "@react-pdf/renderer";

import { icons } from "../constants";

const iconsWidth = 22;
const iconsheight = 22;

const styles = StyleSheet.create({
  //container for the contact informations
  contact: {
    height: 105,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },

  contactItem: {
    fontSize: 11,
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "auto",
  },

  icons: {
    width: `${iconsWidth}`,
    height: `${iconsheight}`,
    marginRight: 30,
  },
});

export default function UserContact({ data }) {
  const { street, houseNumber, postCode, city, phone, email } = data;
  return (
    <View style={styles.contact}>
      <View style={styles.contactItem}>
        <Image style={styles.icons} src={icons.address} />
        <Text>{`${street} ${houseNumber}, ${postCode} ${city}`}</Text>
      </View>
      <View style={styles.contactItem}>
        <Image style={styles.icons} src={icons.phone} />
        <Text>{phone}</Text>
      </View>
      <View style={styles.contactItem}>
        <Image style={styles.icons} src="/images/letter.png" />
        <Text>{email}</Text>
      </View>
    </View>
  );
}
