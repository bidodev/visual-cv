import React from "react";
import moment from "moment";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const coverLetterStyles = StyleSheet.create({

  //head of the coverletter
  head: {
    color: "white",
    width: 600,
    height: 150,
    backgroundColor: "#232e3d",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },

  //body of the coverletter
  body: {
      color: "white",
      width: 600,
      height: 641.8,
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
  },
    
  //footer of the coverletter
  footer: {
    color: "white",
    width: 600,
    height: 50,
    backgroundColor: "#232e3d",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  footerIcons: {
    width: 32,
    height: 32,
    marginRight: 30,
  },

  //container for the name and position
  details: {
    width: 300,
    height: 150,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  heading: {
    fontSize: 25,
    color: "#fff",
    textTransform: "uppercase",
    marginBottom: 2,
  },
  subheading: {
    fontSize: 15,
    color: "#fff",
  },

  //container for the contact informations 
  contact: {
    width: 300,
    height: 120,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },

  contactItem: {
    fontSize: 12,
    color: "#fff",
    width: 250,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
});

export function PdfDocument({ data }) {
  return (
    /**
     * This component represents the PDF document itself.
     * It must be the root of your tree element structure, and under no circumstances should it be used as child of another react-pdf component.
     * In addition, it should only have children of type <Page />.
     */
    <Document>
      {/* Cover Letter */}
      <Page size="A4">
        {/* Cover Letter Head */}
        <View style={coverLetterStyles.head}>
          <View style={coverLetterStyles.details}>
            <Text style={coverLetterStyles.heading}>{data.name}</Text>
            <Text style={coverLetterStyles.subheading}>{data.position}</Text>
          </View>
          <View style={coverLetterStyles.contact}>
            <View style={coverLetterStyles.contactItem}>
              <Image style={coverLetterStyles.image} src="/images/home.png" />
              <Text>{data.address}</Text>
            </View>
            <View style={coverLetterStyles.contactItem}>
              <Image style={coverLetterStyles.image} src="/images/phone.png" />
              <Text>{data.phone}</Text>
            </View>
            <View style={coverLetterStyles.contactItem}>
              <Image style={coverLetterStyles.image} src="/images/letter.png" />
              <Text>{data.email}</Text>
            </View>
          </View>
        </View>

        {/* Cover Letter Body */}
        <View style={coverLetterStyles.body}>
        </View>

        {/* Cover Letter Footer */}
        <View style={coverLetterStyles.footer}>
          <Image style={coverLetterStyles.footerIcons} src="/images/github.png" />
          <Image style={coverLetterStyles.footerIcons} src="/images/linkedin.png" />
          <Image style={coverLetterStyles.footerIcons} src="/images/www.png" />
        </View>
      </Page>

      {/* Curriculum Vitae */}
      <Page size="A4">
        <View>
        <Text>{data.address}</Text>
        </View>
      </Page>
    </Document>
  );
}
