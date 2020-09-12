import { StyleSheet } from "@react-pdf/renderer";
import colors from "./colors.js";

const sharedStyles = () => {
  const styles = StyleSheet.create({
      
    sectionTitle: {
      fontSize: 13,
      color: `${colors.primaryColor}`,
      fontStyle: "bold",
      textTransform: "uppercase",
      marginBottom: 10,
      borderColor: "teal",
    },
    paragraph: {
      color: `${colors.textColor}`,
      lineHeight: 1.4,
      fontSize: 11,
      borderColor: "brown",
    },
  });

  return styles;
};
export default sharedStyles;
