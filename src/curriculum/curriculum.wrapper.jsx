import React from "react";
import { Page, StyleSheet } from "@react-pdf/renderer";

/**
 * Layout
 * Import Main and Aside component to compouse the design
 */
import Main from "./main/sections.component";
import Aside from "./aside/aside.wrapper";

const Curriculum = ({ colors }) => {
  const { primaryColor } = colors;

  const styles = StyleSheet.create({
    page: {
      backgroundColor: `${primaryColor}`,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  });

  return (
    <Page style={styles.page}>
      <Aside {...colors} />
      <Main {...colors} />
    </Page>
  );
};

export default Curriculum;
