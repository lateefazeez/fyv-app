import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import * as WebBrowser from 'expo-web-browser';

import getData from 'utils/getData';

import Loading from 'components/Loading';
import PageHeader from 'components/PageHeader';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import Subheading from 'components/Subheading';
import ExternalRefButton from 'components/ExternalRefButton';
import FloatingButtonFYV from 'components/FloatingButtonFYV';

import headerImage from 'assets/headers/covid.png';
import colors from 'config/colors.json';

const CovidInfo = ({ navigation }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData('COVID_INFO').then(response => {
      if (response) {
        setData(response);
        setIsLoading(false);
      } else {
        Alert.alert(
          'Data not found',
          'Something went wrong. Please try again.',
        );
        navigation.goBack();
      }
    });
  }, [navigation]);

  return isLoading ? (
    <Loading />
  ) : (
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
          <Heading />
          <Paragraph>
            Due to COVID-19, there is a pandemic in Canada. COVID-19 affects
            worker safety.
          </Paragraph>
          <Paragraph>
            As a workplace hazard, it is called a biological hazard. Although
            employers must make work safe for workers during this time, many
            workers, such as health care aides, are at more risk because of
            workplace contact and poor safety rules.
          </Paragraph>
          <Subheading>What if I test positive for COVID-19?</Subheading>
          <View style={{ paddingLeft: 16 }}>
            <Unorderedlist>
              <Paragraph style={{ fontWeight: 'bold' }}>
                You cannot lose your job because of COVID-19.
              </Paragraph>
            </Unorderedlist>

            <Unorderedlist>
              <Paragraph>
                If you have COVID-19, you should tell your employer because it
                affects the safety of other people you work with.
              </Paragraph>
            </Unorderedlist>

            <Unorderedlist>
              <Paragraph>
                You should stay home and follow the advice of Alberta Health
                Services by calling 811.
              </Paragraph>
            </Unorderedlist>

            <Unorderedlist>
              <Paragraph>You must isolate for 14 days.</Paragraph>
            </Unorderedlist>

            <Unorderedlist>
              <Paragraph>
                Depending on your work, you might get paid leave during this
                time.
              </Paragraph>
            </Unorderedlist>
          </View>
          <Paragraph>
            If you were exposed to COVID-19 while at work, you may file WCB
            paperwork and apply for paid leave.
          </Paragraph>
          <Paragraph>
            For more information, please refer to the following fact sheet and
            additional documentation:
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
          <ExternalRefButton
            icon="web"
            onPress={async () => {
              await WebBrowser.openBrowserAsync(
                'https://www.canada.ca/en/government/publicservice/covid-19/rights-responsibilities.html',
              );
            }}
          >
            Rights and Responsibilities
          </ExternalRefButton>
          <ExternalRefButton
            icon="web"
            onPress={async () => {
              await WebBrowser.openBrowserAsync(
                'https://www.alberta.ca/covid-19-leave.aspx',
              );
            }}
          >
            COVID-19 Leave and Pay
          </ExternalRefButton>
        </View>
      </ScrollView>
      <FloatingButtonFYV />
    </>
  );
};

export default CovidInfo;
