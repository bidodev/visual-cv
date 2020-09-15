import { StyleSheet } from "@react-pdf/renderer";
import colors from "./colors.js";

export const sharedStyles = StyleSheet.create({
  sectionTitle: {
    fontSize: 13,
    color: `${colors.primaryColor}`,
    textTransform: "uppercase",
    fontFamily: "Open Sans",
    fontStyle: "bold",
  },
  paragraph: {
    color: `${colors.textColor}`,
    lineHeight: 1.4,
    fontSize: 10,
    borderColor: "brown",
    marginTop: 17,
  },
  asideSectionTitle: {
    color: `${colors.secondaryColor}`,
    fontSize: 13,
    textTransform: "uppercase",
    fontFamily: "Open Sans",
    fontStyle: "bold",
    marginBottom: 16,
    marginTop: 20,
  },
});
