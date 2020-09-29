import React from 'react';
import { View, StyleSheet } from 'react-native';

import Subheading from 'components/Subheading';
import Paragraph from 'components/Paragraph';

import RoundButton from 'components/RoundButton';

import colors from 'config/colors.json';
import { uuidv4 } from 'utils';

const ResourceCard = ({ title, content, key }) => {
  return (
    <View key={uuidv4()} style={styles.container}>
      <Subheading>{title}</Subheading>

      {content.map(item => {
        return (
          <>
            <Paragraph key={uuidv4()}>{item.description}</Paragraph>

            <View style={styles.buttonsContainer}>
              {item.website && <RoundButton type="web" target={item.website} />}
              {item.website && item.phone && (
                <View
                  style={{
                    borderLeftWidth: 1,
                    borderLeftColor: colors.mediumGrey,
                  }}
                />
              )}
              {item.phone && <RoundButton type="phone" target={item.phone} />}
            </View>
          </>
        );
      })}
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
