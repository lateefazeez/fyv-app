import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as WebBrowser from 'expo-web-browser';
import ParsedText from 'react-native-parsed-text';
import { testAlert } from 'utils';

import FloatingButtonFYV from 'components/FloatingButtonFYV';
import Paragraph from 'components/Paragraph';
import Heading from 'components/Heading';
import ExternalRefButton from 'components/ExternalRefButton';
import PageHeader from 'components/PageHeader';
import ContentSlider from 'components/ContentSlider';

import headerImage from 'assets/headers/basicrights.png';

import colors from 'config/colors.json';
import slides from './slides';

const BasicRights = () => {
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: colors.lightGrey }}>
        <PageHeader source={headerImage} />
        <View style={{ paddingHorizontal: 24 }}>
          <Heading>Basic Rights</Heading>
          <Paragraph>
            In Alberta, workers have 4 basic rights that relate to health
            safety:
          </Paragraph>
        </View>

        <ContentSlider showsButtons slides={slides} />

        <View
          style={{
            paddingHorizontal: 24,
            paddingBottom: 64,
          }}
        >
          <Paragraph>
            As workers, we must follow the health and safety rules. We must not
            cause or participate in harassment, bullying, or violence, and we
            must report unsafe work conditions. This is part of Canadian law.
          </Paragraph>
          <Paragraph>
            It is not always easy to do so, but if we do not follow these rules
            there can be serious consequences (such as [undocumented] injuries,
            or workplaces that remain unsafe).
          </Paragraph>

          <View style={styles.card}>
            <Icon
              name="alert-circle"
              size={30}
              color={colors.red}
              style={styles.icon}
            />
            <Paragraph style={{ color: colors.white }}>
              Workplaces in Alberta have been affected by COVID-19. This has
              left many workers wondering how they can protect themselves from
              the virus.
            </Paragraph>
            <Paragraph style={{ color: colors.white }}>
              Workers continue to have the Rights to refuse dangerous work and
              be free from reprisal, but it is important to follow the correct
              process under OHS law.
            </Paragraph>
          </View>

          <ExternalRefButton
            icon="web"
            onPress={async () => {
              await WebBrowser.openBrowserAsync(
                'https://workershealthcentre.ca/4-health-and-safety-rights/',
              );
            }}
            style={{ marginBottom: 24 }}
          >
            Health & Safety Rights
          </ExternalRefButton>
        </View>
      </ScrollView>
      <FloatingButtonFYV />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.darkerGrey,
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 24,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  icon: {
    alignSelf: 'center',
    margin: 24,
  },
});

export default BasicRights;
