import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";

//Create a red border in all the elements
const debug = true;

const debugProps = debug
  ? { borderWidth: 1, borderColor: "red", borderStyle: "solid" }
  : "";

const Main = ({ primaryColor, secondaryColor, textColor }) => {
  const sectionsOrders = [];

  const styles = StyleSheet.create({
    main: {
      paddingRight: 30,
      paddingLeft: 20,
      width: "390",
      height: "795",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      ...debugProps,
      borderColor: "green",
    },
    sectionTitle: {
      fontSize: 13,
      color: `${primaryColor}`,
      fontStyle: "bold",
      textTransform: "uppercase",
      marginBottom: 10,
      ...debugProps,
      borderColor: "teal",
    },
    paragraph: {
      color: `${textColor}`,
      lineHeight: 1.4,
      fontSize: 11,
      ...debugProps,
      borderColor: "brown",
    },
    career: {
      marginTop: 20,
      height: "auto",
      ...debugProps,
      borderColor: "rose",
    },
    education: {
      marginTop: 20,
      height: "auto",
      ...debugProps,
      borderColor: "red",
    },
    work: {
      marginTop: 20,
      height: "auto",
      ...debugProps,
      borderColor: "#666",
    },
  });
  const { main, career, sectionTitle, paragraph } = styles;
  return (
    <View style={main}>
      <View style={career}>
        <Text style={sectionTitle}>Career Objective</Text>
        <Text style={paragraph}>
          Curabitur vel erat eget turpis tempor sodales in sit amet velit.
          Curabitur et porttitor lorem, et ultricies ipsum. Nulla justo ipsum,
          auctor volutpat odio sit amet, fringilla blandit eros. Duis sed magna
          a condimentum. Ut id auctor urna, in sagittis lacus. Vestibulum rutrum
          elit in lectus pretium lobortis. Aenean molestie fringilla nunc, at
          eleifend arcu vehicula ut. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Nullam interdum felis sed
          magna molestie, quis ullamcorper lorem pretium
        </Text>
      </View>
      <View style={styles.education}>
        <Text style={sectionTitle}>Education Background</Text>
        <Text style={paragraph}>
          Curabitur vel erat eget turpis tempor sodales in sit amet velit.
          Curabitur et porttitor lorem, et ultricies ipsum. Nulla justo ipsum,
          auctor volutpat odio sit amet, fringilla blandit eros. Duis sed magna
        </Text>
        <Text style={paragraph}>
          Curabitur vel erat eget turpis tempor sodales in sit amet velit.
          Curabitur et porttitor lorem, et ultricies ipsum. Nulla justo ipsum,
          auctor volutpat odio sit amet, fringilla blandit eros. Duis sed magna
        </Text>
        <Text style={paragraph}>
          Curabitur vel erat eget turpis tempor sodales in sit amet velit.
          Curabitur et porttitor lorem, et ultricies ipsum. Nulla justo ipsum,
          auctor volutpat odio sit amet, fringilla blandit eros. Duis sed magna
        </Text>
      </View>
      <View style={styles.work}>
        <Text style={sectionTitle}>Work Experience</Text>
        <Text style={paragraph}>
          Curabitur vel erat eget turpis tempor sodales in sit amet velit.
          Curabitur et porttitor lorem, et ultricies ipsum. Nulla justo ipsum,
          auctor volutpat odio sit amet, fringilla blandit eros. Duis sed magna
        </Text>
        <Text style={paragraph}>
          Curabitur vel erat eget turpis tempor sodales in sit amet velit.
          Curabitur et porttitor lorem, et ultricies ipsum. Nulla justo ipsum,
          auctor volutpat odio sit amet, fringilla blandit eros. Duis sed magna
        </Text>
      </View>
    </View>
  );
};

export default Main;
