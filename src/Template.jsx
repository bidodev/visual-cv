import React from "react";
import moment from "moment";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Link,
} from "@react-pdf/renderer";

const primaryColor = "#232e3d";

//Create a red border in all the elements
const debug = false;
const debugProps = debug ? { borderWidth: 1, borderColor: 'red', borderStyle: "solid" } : ''

const coverLetterStyles = StyleSheet.create({
  //head of the coverletter
  head: {
    color: "white",
    width: 600,
    height: 150,
    backgroundColor: `${primaryColor}`,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 20,
    ...debugProps
  },

  //---- Start styles rules for the name and position ----//
  details: {
    width: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    ...debugProps
  },

  heading: {
    fontSize: 25,
    color: "#fff",
    textTransform: "uppercase",
    marginBottom: 2,
    ...debugProps
  },
  subheading: {
    fontSize: 15,
    color: "#fff",
    ...debugProps
  },
  //---- End styles rules for the name and position ----//

  //container for the contact informations
  contact: {
    width: 350,
    height: 120,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-around",
    ...debugProps
  },

  contactItem: {
    fontSize: 12,
    color: "#fff",
    width: 250,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    ...debugProps
  },

  image: {
    width: 24,
    height: 24,
    marginRight: 30,
    ...debugProps
  },

  //body of the coverletter
  body: {
    color: "white",
    width: 600,
    height: 641.8,
    display: "flex",
    paddingRight: 20,
    paddingLeft: 20,
    ...debugProps
  },

  bodyHead: {
    height: 100,
    ...debugProps
  },

  bodySubject: {
    height: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: `${primaryColor}`,
    fontStyle: "bold",
    ...debugProps
  },

  bodyText: {
    height: 485.9,
    color: "#666",
    fontSize: 12,
    ...debugProps
  },

    //footer of the coverletter
    footer: {
      color: "white",
      width: 600,
      height: 50,
      backgroundColor: `${primaryColor}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      ...debugProps
    },
  
    footerIcons: {
      width: 32,
      height: 32,
      marginRight: 30,
      ...debugProps
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
      {/* Default page size is A4 */}
      <Page>
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
          <View style={coverLetterStyles.bodyHead}>
            <Text>{data.email}</Text>
          </View>

          <View style={coverLetterStyles.bodySubject}>
            <Text>{"Subject: " + data.subject}</Text>
          </View>

          <View style={coverLetterStyles.bodyText}>
            <Text>{data.email}</Text>
          </View>
        </View>

        {/* Cover Letter Footer */}
        <View style={coverLetterStyles.footer}>
          <Link src={data.github}>
            <Image
              style={coverLetterStyles.footerIcons}
              src="/images/github.png"
            />
          </Link>
          <Link src={data.linkedin}>
            <Image
              style={coverLetterStyles.footerIcons}
              src="/images/linkedin.png"
            />
          </Link>
          <Link src={data.website}>
            <Image
              style={coverLetterStyles.footerIcons}
              src="/images/www.png"
            />
          </Link>
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
