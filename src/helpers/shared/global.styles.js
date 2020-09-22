import { StyleSheet } from "@react-pdf/renderer";
import colors from "./colors.js";

export const sharedStyles = StyleSheet.create({
  sectionTitle: {
    fontSize: 16,
    color: `${colors.primaryColor}`,
    textTransform: "uppercase",
    fontFamily: "Open Sans",
    fontStyle: "bold",
  },
  paragraph: {
    color: `${colors.textColor}`,
    lineHeight: 1.4,
    fontSize: 11,
    marginTop: 17,
    fontFamily: "Poppins"
  },
  asideSectionTitle: {
    color: `${colors.secondaryColor}`,
    fontSize: 13,
    textTransform: "uppercase",
    fontFamily: "Open Sans",
    fontStyle: "bold",
    marginBottom: 7,
    marginTop: 10,
  },
});
