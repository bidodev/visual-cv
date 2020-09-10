import React from "react";
import { icons } from './constants';


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

const primaryColor = "brown";
const secondaryColor = "#fff";

const textColor = "#666";

//Create a red border in all the elements
const debug = false;
const padding = 30;
const iconsWidth = 22;
const iconsheight = 22;
console.log(icons)
const debugProps = debug
  ? { borderWidth: 1, borderColor: "red", borderStyle: "solid" }
  : "";

const coverLetterStyles = StyleSheet.create({
  //head of the coverletter
  head: {
    color: `${secondaryColor}`,
    width: 600,
    height: 160,
    backgroundColor: `${primaryColor}`,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: `${padding}`,
    paddingLeft: `${padding}`,
  },

  //---- Start styles rules for the name and position ----//
  details: {
    width: "auto",
    height: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  heading: {
    fontSize: 25,
    textTransform: "uppercase",
    marginBottom: 2,
  },
  subheading: {
    fontSize: 14,
  },
  //---- End styles rules for the name and position ----//

  //container for the contact informations
  contact: {
    height: 105,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    ...debugProps,
  },

  contactItem: {
    fontSize: 11,
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "auto",
    ...debugProps,
  },

  //body of the coverletter
  body: {
    color: `${textColor}`,
    width: 600,
    minHeight: "636.8,",
    height: "auto",
    display: "flex",
    paddingRight: `${padding}`,
    paddingLeft: `${padding}`,
    
  },

  bodyHead: {
    height: 100,
    display: "flex",
    flexDirection: "row",
    ...debugProps,
  },

  bodyHeadCompany: {
    alignSelf: "flex-end",
    width: "auto",
    height: "70%",
    fontSize: 11,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    ...debugProps,
  },

  bodyHeadData: {
    width: "auto",
    flexGrow: 1,
    alignSelf: "flex-end",
    alignItems: "flex-end",
    fontSize: 11,
    ...debugProps,
  },

  bodySubject: {
    height: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: `${primaryColor}`,
    fontStyle: "bold",
  },

  bodyText: {
    height: "auto",
    lineHeight: 1.4,
    fontSize: 11,
    ...debugProps,
  },

  //footer of the coverletter
  footer: {
    color: `${secondaryColor}`,
    width: 600,
    height: 45,
    backgroundColor: `${primaryColor}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  icons: {
    width: `${iconsWidth}`,
    height: `${iconsheight}`,
    marginRight: 30,
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
              <Image style={coverLetterStyles.icons} src={icons.address} />
              <Text>{data.address}</Text>
            </View>
            <View style={coverLetterStyles.contactItem}>
              <Image style={coverLetterStyles.icons} src="/images/phone.png" />
              <Text>{data.phone}</Text>
            </View>
            <View style={coverLetterStyles.contactItem}>
              <Image style={coverLetterStyles.icons} src="/images/letter.png" />
              <Text>{data.email}</Text>
            </View>
          </View>
        </View>

        {/* Cover Letter Body */}
        <View style={coverLetterStyles.body}>
          <View style={coverLetterStyles.bodyHead}>
            <View style={coverLetterStyles.bodyHeadCompany}>
              <Text>{data.recruiterName}</Text>
              <Text>Tillhub</Text>
              <Text>Genthiner Str. 34</Text>
              <Text>10785 Berlin</Text>
            </View>
            <View style={coverLetterStyles.bodyHeadData}>
              <Text>Berlin, 10 Setember 2020</Text>
            </View>
          </View>

          <View style={coverLetterStyles.bodySubject}>
            <Text>{"Subject: " + data.subject}</Text>
          </View>

          <View style={coverLetterStyles.bodyText}>
            <Text style={{marginBottom: 10}}>{`${data.greetings} ${data.recruiterName}`}</Text>
            {/* generate paragraphs based on user input */}
            {data.contentCoverLetter.map(({ id, text }) => (
              <Text key={id} style={{marginBottom: 3}}>{text}</Text>
            ))}
            <Text style={{marginTop: 10}}>{data.regards}</Text>
            <Text>{data.name}</Text>
          </View>
        </View>

        {/* Cover Letter Footer */}
        <View style={coverLetterStyles.footer}>
          <Link src={data.github}>
            <Image
              style={coverLetterStyles.icons}
              src="/images/github.png"
            />
          </Link>
          <Link src={data.linkedin}>
            <Image
              style={coverLetterStyles.icons}
              src="/images/linkedin.png"
            />
          </Link>
          <Link src={data.website}>
            <Image
              style={coverLetterStyles.icons}
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
