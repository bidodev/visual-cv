import React from "react";
import { StyleSheet, View } from "@react-pdf/renderer";

/**
 * @Import
 * Sections inside the main Curriculum -> Main
 */

import Career from "./sections/career.component";
import Education from "./sections/education.component";
import Work from "./sections/work.component";

const Main = () => {

  //const sectionsOrders = [];
  const styles = StyleSheet.create({
    main: {
      paddingRight: 30,
      paddingLeft: 20,
      width: "390",
      height: "795",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      borderColor: "green",
    },
  });

  const { main } = styles;
  return (
    <View style={main}>
      <Career />
      <Education />
      <Work />
    </View>
  );
};

export default Main;
