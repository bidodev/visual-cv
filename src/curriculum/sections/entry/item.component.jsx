import React from 'react';
import { Text, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
    color: '#666'
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