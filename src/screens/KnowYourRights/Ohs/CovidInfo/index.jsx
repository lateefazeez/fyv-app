import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import * as WebBrowser from 'expo-web-browser';

import PageHeader from 'components/PageHeader';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import Subheading from 'components/Subheading';
import ExternalRefButton from 'components/ExternalRefButton';
import FloatingButtonFYV from 'components/FloatingButtonFYV';

import headerImage from 'assets/hazards.png';
// import headerImage from 'assets/covid.png';
import colors from 'config/colors.json';

const CovidInfo = () => {
  const [setResult] = useState(null);

  const handlePressCovidButtonAsync = async () => {
    const result = await WebBrowser.openBrowserAsync(
      'https://www.canada.ca/en/government/publicservice/covid-19/rights-responsibilities.html',
    );
    setResult(result);
  };
  const handlePressCovidLeaveButtonAsync = async () => {
    const result = await WebBrowser.openBrowserAsync(
      'https://www.alberta.ca/covid-19-leave.aspx',
    );
    setResult(result);
  };
  const handlePressCovidFactSheetButtonAsync = async () => {
    await WebBrowser.openBrowserAsync(
      'https://www.wcb.ab.ca/assets/pdfs/workers/WFS_COVID-19.pdf',
    );
  };

  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: colors.lightGrey,
        }}
      >
        <PageHeader source={headerImage} />
        <View
          style={{
            paddingHorizontal: 24,
            paddingBottom: 80,
          }}
        >
          <Heading>COVID-19 Information</Heading>

          <Paragraph>
            Due to COVID-19, there is a pandemic in Canada that can affect
            workers' safety.
          </Paragraph>

          <Paragraph>
            As a workplace hazard, it is called a biological hazard. Although
            employers must make work safe for workers during this time, many
            workers, such as health care aides, are at more risk because of
            workplace contact and poor safety rules.
          </Paragraph>
          <ExternalRefButton
            icon="link-variant"
            onPress={handlePressCovidButtonAsync}
            style={{ marginBottom: 24 }}
          >
            Read More
          </ExternalRefButton>

          <Subheading>What if I test positive for COVID-19?</Subheading>
          <View style={{ paddingHorizontal: 24 }}>
            <Unorderedlist>
              <Paragraph style={{ fontWeight: 'bold' }}>
                You cannot lose your job because of COVID-19.
              </Paragraph>
            </Unorderedlist>

            <Unorderedlist>
              <Paragraph>
                If you have COVID-19, you should tell your manager.
              </Paragraph>
            </Unorderedlist>

            <Unorderedlist>
              <Paragraph>
                You should also stay home and follow the advice of Alberta
                Health Services by calling 811.
              </Paragraph>
            </Unorderedlist>

            <Unorderedlist>
              <Paragraph>You must also isolate for 14 days.</Paragraph>
            </Unorderedlist>

            <Unorderedlist>
              <Paragraph>
                Depending on your work, you might get paid leave during this
                time.
              </Paragraph>
            </Unorderedlist>
          </View>

          <Paragraph>
            If you are exposed to COVID-19 while at work, please refer this fact
            sheet.
          </Paragraph>
          <ExternalRefButton
            icon="file-download"
            onPress={async () => {
              await WebBrowser.openBrowserAsync(
                'https://www.wcb.ab.ca/assets/pdfs/workers/WFS_COVID-19.pdf',
              );
            }}
          >
            COVID-19 Fact Sheet
          </ExternalRefButton>
          <Paragraph style={{ marginTop: 20 }}>
            More information on COVID-19 leave in Alberta and pay can be found
            below.
          </Paragraph>
          <ExternalRefButton
            icon="link-variant"
            onPress={async () => {
              await WebBrowser.openBrowserAsync(
                'https://www.alberta.ca/covid-19-leave.aspx',
              );
            }}
          >
            COVID-19 Leave in Alberta
          </ExternalRefButton>
        </View>
      </ScrollView>
      <FloatingButtonFYV />
    </>
  );
};

export default CovidInfo;
