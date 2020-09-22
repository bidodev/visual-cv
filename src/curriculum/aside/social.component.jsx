import React from "react";
import { Text, StyleSheet, View, Image } from "@react-pdf/renderer";
import { icons } from "../../constants";

import { sharedStyles } from "../../helpers/shared/global.styles";

//call the function to generate the sharedStyles.
const { asideSectionTitle } = sharedStyles;

const styles = StyleSheet.create({
  iconsWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icons: {
    width: 22,
    height: 22,
  },
});

export const Social = () => (
  <View>
    <Text style={asideSectionTitle}>Social</Text>
    <View style={styles.iconsWrapper}>
      <Image style={styles.icons} src={icons.github} />
      <Image style={styles.icons} src={icons.linkedin} />
      <Image style={styles.icons} src={icons.website} />
    </View>
  </View>
);

export default Social;
