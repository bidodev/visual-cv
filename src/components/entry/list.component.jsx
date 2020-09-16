import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";
import List, { Item } from "./item.component";

import {sharedStyles} from "../../helpers/shared/global.styles";

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
    fontSize: 12,
    marginTop: 17,
    fontFamily: "Open Sans",
    fontStyle: "bold",
  },
  title: {
    textTransform: "uppercase",
    fontSize: 10,
    marginTop: "9",
    marginBottom: 2,
  },
  date: {
    textTransform: "uppercase",
    fontSize: 8,
    marginBottom: 10,
  },
});

const ExperienceEntry = ({ company, details, position, date, city }) => {
  const title = `${company},  ${city}`;
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContainer}>
        <Text style={styles.position}>{position}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
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
