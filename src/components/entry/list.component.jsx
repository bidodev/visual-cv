import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";
import List, { Item } from "./item.component";

import { sharedStyles } from "../../helpers/shared/global.styles";

//call the function to generate the sharedStyles.
const { paragraph, sectionTitle } = sharedStyles;

const styles = StyleSheet.create({
  work: {
    marginTop: 20,
    height: "auto",
  },
  wrapper: {},
  headerContainer: {},
  position: {
    fontSize: 10,
    marginTop: 10,
    fontFamily: "Open Sans",
    fontStyle: "bold",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    textTransform: "uppercase",
    fontSize: 8.5,
    fontFamily: "Poppins",
    marginTop: "2",
    marginBottom: 10,

  },
  date: {
    textTransform: "uppercase",
    fontSize: 7,
  },
});

const ExperienceEntry = ({ company, details, position, date, city }) => {
  const title = `${company},  ${city}`;
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContainer}>
        <View style={styles.position}>
          <Text>{position}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <List style={{ marginBottom: 15 }}>
        {details.map((detail, i) => (
          <Item key={i} style={styles.detailContainer}>
            {detail}
          </Item>
        ))}
      </List>
    </View>
  );
};

const Career = ({ data, title }) => {
  return (
    <View style={styles.work}>
      <Text style={sectionTitle}>{title}</Text>
      {data.map(({ ...entry }) => (
        <ExperienceEntry {...entry} />
      ))}
    </View>
  );
};

export default Career;
