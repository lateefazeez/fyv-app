import React from 'react';
import { View } from 'react-native';

import Subheading from 'components/Subheading';
import Paragraph from 'components/Paragraph';

import RoundButton from 'components/RoundButton';

import colors from 'config/colors.json';

const ResourceCard = ({ title, content }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        padding: 16,
        borderRadius: 16,
        marginBottom: 16,
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}
    >
      <Subheading style={{ color: colors.black, marginBottom: 0 }}>
        {title}
      </Subheading>

      {content.map(item => {
        return (
          <View key={item.description}>
            <Paragraph style={{ color: colors.black, marginTop: 16 }}>
              {item.description}
            </Paragraph>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingTop: 16,
                borderTopColor: colors.mediumGrey,
                borderTopWidth: 1,
                borderStyle: 'solid',
              }}
            >
              {item.website && (
                <RoundButton
                  type="web"
                  target={item.website}
                  disabled={!item.website}
                />
              )}
              {item.website && item.phone && (
                <View
                  style={{
                    borderLeftWidth: 1,
                    borderLeftColor: colors.mediumGrey,
                  }}
                />
              )}
              {item.phone && (
                <RoundButton
                  type="phone"
                  target={item.phone}
                  disabled={!item.phone}
                />
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ResourceCard;
