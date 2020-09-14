import React from "react";
import { Text, StyleSheet, View, Image } from "@react-pdf/renderer";
import { icons } from "../../constants";

const styles = StyleSheet.create({
  avatarWrapper: {
    width: 50,
    height: 50,
  },
  avatar: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export const Avatar = () => (
  <View style={styles.avatarWrapper}>
    <Image style={styles.avatar} src={icons.address} />
  </View>
);

export default Avatar;
