import React from "react";
import { Text, StyleSheet, View, Image } from "@react-pdf/renderer";

import { icons } from "../../constants";

const Aside = ({ primaryColor }) => {
  const styles = StyleSheet.create({
    aside: {
      backgroundColor: `${primaryColor}`,
      height: "795",
      width: "200",
    },

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

  return (
    <View style={styles.aside}>
      <View style={styles.avatarWrapper}>
        <Image style={styles.avatar} src={icons.address} />
      </View>

      {/* COntact Me */}
      <View>
        <Text style={styles.asideSectionTitle}>Contact Me</Text>
        <Text>+49 179 103171</Text>
        <Text>claudinei.bido@gmail.com</Text>
        <Text>Berlin, Germany</Text>
      </View>

      {/* Technical Skills */}
      <View>
        <Text style={styles.asideSectionTitle}>Technical Skills</Text>
      </View>

      {/* Other Skills */}
      <View>
        <Text style={styles.asideSectionTitle}>Other Skills</Text>
      </View>

      {/* Language Skills */}
      <View>
        <Text style={styles.asideSectionTitle}>Languages</Text>
      </View>

      {/* Social */}
      <View>
        <Text style={styles.asideSectionTitle}>Social</Text>
      </View>
    </View>
  );
};

export default Aside;
