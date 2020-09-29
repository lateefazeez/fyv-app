import React from 'react';
import { View, StyleSheet } from 'react-native';

import Subheading from 'components/Subheading';
import Paragraph from 'components/Paragraph';

import RoundButton from 'components/RoundButton';

import colors from 'config/colors.json';

const ResourceCard = ({ title, content }) => {
  return (
    <View style={styles.container}>
      <Subheading>{title}</Subheading>

      <Paragraph>{content.description}</Paragraph>

      <View style={styles.buttonsContainer}>
        {content.website && <RoundButton type="web" target={content.website} />}
        {content.website && content.phone && (
          <View
            style={{
              borderLeftWidth: 1,
              borderLeftColor: colors.mediumGrey,
            }}
          />
        )}
        {content.phone && <RoundButton type="phone" target={content.phone} />}
      </View>
    </View>
  );
};

export default ResourceCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 24,
    borderRadius: 16,
    marginBottom: 16,
    width: '100%',

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 16,
    borderTopColor: colors.mediumGrey,
    borderTopWidth: 1,
    borderStyle: 'solid',
  },
});
