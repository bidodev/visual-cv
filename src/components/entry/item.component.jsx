import React from 'react';
import { Text, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    lineHeight: 1.4,
    marginBottom: 2,
  },
  bulletPoint: {
    width: 12,
    fontSize: 12,
  },
  itemContent: {
    flex: 1,
    fontSize: 9.5,
    fontFamily: "Roboto",
    color: '#333',
    letterSpacing: 0.2,
  },
});

const List = ({ children }) => children;

export const Item = ({ children }) => (
  <View style={styles.item}>
    <Text style={styles.bulletPoint}>•</Text>
    <Text style={styles.itemContent}>{children}</Text>
  </View>
);

export default List;