import React from "react";
import { icons } from "./constants";

//helpers
import generateData from "helpers/date";

//coverLetter components
import UserDetails from "./coverletter/UserDetails";
import UserContact from "./coverletter/user.contact";

//Curriculum components
import Curriculum from "./curriculum/curriculum.wrapper";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Link,
} from "@react-pdf/renderer";

export function CoverLetter({ data, colors, cvData, coverLetterData }) {
  //default by now.
  const language = "english";

  const { day, month, year } = generateData(language);

  //design variables
  const { primaryColor, secondaryColor, textColor } = colors;

  //data variables
  const { name, position } = data;

  const padding = 30;
  const iconsWidth = 22;
  const iconsheight = 22;

  //Create a red border in all the elements
  const debug = false;

  const debugProps = debug
    ? { borderWidth: 1, borderColor: "red", borderStyle: "solid" }
    : "";

  const downloadCoverLetter = true;

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
      lineHeight: 1.4,
      ...debugProps,
    },

    bodyHeadCompany: {
      alignSelf: "flex-end",
      width: "auto",
      height: "70%",
      fontSize: 11,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
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
      fontFamily: "Lato",
      fontStyle: "bold",
    },

    bodyText: {
      height: "auto",
      lineHeight: 1.4,
      fontSize: 11,
      fontFamily: "Roboto",
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

  return (
    /**
     * This component represents the PDF document itself.
     * It must be the root of your tree element structure, and under no circumstances should it be used as child of another react-pdf component.
     * In addition, it should only have children of type <Page />.
     */
    <Document>
      {/* Cover Letter */}
      {/* Default page size is A4 */}

      {downloadCoverLetter ? (
        <Page>
          {/* Cover Letter Head */}
          <View style={coverLetterStyles.head}>
            <UserDetails name={name} position={position} />
            <UserContact data={data} />
          </View>

          {/* Cover Letter Body */}
          <View style={coverLetterStyles.body}>
            <View style={coverLetterStyles.bodyHead}>
              <View style={coverLetterStyles.bodyHeadCompany}>
                <Text>{data.recruiterName}</Text>
                <Text>{data.companyName}</Text>
                <Text>{data.companyAddress}</Text>
                <Text>{`${data.companyPostCode} ${data.companyCity}`}</Text>
              </View>
              <View style={coverLetterStyles.bodyHeadData}>
                <Text>{`${data.city}, ${day} ${month} ${year}`}</Text>
              </View>
            </View>

            <View style={coverLetterStyles.bodySubject}>
              <Text>{`Subject: ${data.subject} ${data.companyName}`}</Text>
            </View>

            <View style={coverLetterStyles.bodyText}>
              <Text
                style={{ marginBottom: 10 }}
              >{`${data.greetings} ${data.recruiterName}`}</Text>
              {/* generate paragraphs based on user input */}
              {coverLetterData.map(({ id, text }) => (
                <Text key={id} style={{ marginBottom: 5 }}>
                  {text}
                </Text>
              ))}
              <Text style={{ marginTop: 10 }}>{data.regards}</Text>
              <Text>{data.name}</Text>
            </View>
          </View>

          {/* Cover Letter Footer */}
          <View style={coverLetterStyles.footer}>
            <Link src={data.github}>
              <Image style={coverLetterStyles.icons} src="/images/github.png" />
            </Link>
            <Link src={data.linkedin}>
              <Image
                style={coverLetterStyles.icons}
                src="/images/linkedin.png"
              />
            </Link>
            <Link src={data.website}>
              <Image style={coverLetterStyles.icons} src="/images/www.png" />
            </Link>
          </View>
        </Page>
      ) : null}

      {/* Curriculum Vitae */}
      <Curriculum colors={colors} />
    </Document>
  );
}
