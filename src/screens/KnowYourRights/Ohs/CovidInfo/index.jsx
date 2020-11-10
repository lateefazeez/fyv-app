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
          <Paragraph>{data.mainParagraph}</Paragraph>
          <Subheading>{data.subHeading}</Subheading>
          <View style={{ paddingLeft: 16 }}>
            {data.covidSteps.map(step => (
              <Unorderedlist key={step.description}>
                <Paragraph style={step.bold ? { fontWeight: 'bold' } : null}>
                  {step.description}
                </Paragraph>
              </Unorderedlist>
            ))}
          </View>
          <Paragraph>{data.finalParagraph}</Paragraph>

          {data.buttons.map(button => (
            <ExternalRefButton
              icon={button.type}
              onPress={async () => {
                await WebBrowser.openBrowserAsync(button.url);
              }}
            >
              {button.label}
            </ExternalRefButton>
          ))}
        </View>
      </ScrollView>
      <FloatingButtonFYV />
    </>
  );
};

export default CovidInfo;
