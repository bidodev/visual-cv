import React from "react";
import { Text, StyleSheet, View, Image } from "@react-pdf/renderer";
import { icons } from "../../constants";

import UserDetails from '../../coverletter/UserDetails'

const styles = StyleSheet.create({
  avatarWrapper: {
    marginTop: 20,
    height: 100,
    backgroundColor: '#232e3d',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const user = {name: "Claudinei Bido", position: "Software Engineer"}

export const Avatar = () => (
  <View style={styles.avatarWrapper}>
    <UserDetails {...user}/>
  </View>
);

export default Avatar;
