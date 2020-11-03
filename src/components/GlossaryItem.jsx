import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { IconButton, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Paragraph from 'components/Paragraph';

import colors from 'config/colors.json';

const GlossaryItem = ({ handleOnExpand, object, currentWord }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View
      style={{
        borderColor: colors.mediumGrey,
        borderStyle: 'solid',
        borderWidth: 0.5,
      }}
    >
      <View>
        <TouchableRipple
          style={{ backgroundColor: colors.white }}
          onPress={() => {
            handleOnExpand(object);
            setExpanded(!expanded);
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 24,
              paddingVertical: 16,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              {object.word}
            </Text>

            <Icon
              name={expanded ? 'chevron-down' : 'chevron-up'}
              size={24}
              color={colors.darkGrey}
            />
          </View>
        </TouchableRipple>

        {expanded && (
          <View
            style={{
              paddingHorizontal: 24,
              paddingVertical: 16,
              backgroundColor: colors.lightGrey,
              borderColor: colors.mediumGrey,
              borderStyle: 'solid',
              borderWidth: 0.5,
            }}
          >
            <View
              style={{
                // TODO: verify what is happening with this view styling
                flexDirection: 'row-reverse',
                alignItems: 'center',
              }}
            >
              <IconButton
                style={{
                  marginLeft: 8,
                }}
                icon="volume-high"
                size={24}
                color={colors.darkGrey}
                onPress={() =>
                  Speech.speak(object.word, { pitch: 0.9, rate: 0.6 })
                }
              />
              <Paragraph
                style={{
                  color: colors.primary,
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  marginBottom: 0,
                  marginTop: 0,
                  paddingLeft: 0,
                }}
              >
                {object.phonetics}
              </Paragraph>
            </View>

            <Paragraph
              style={{
                fontSize: 14,
                color: colors.darkGrey,
                marginBottom: 0,
                marginTop: 0,
              }}
            >
              {object.category}
            </Paragraph>

            <Paragraph style={{ marginBottom: 0 }}>
              {object.description}
            </Paragraph>
          </View>
        )}
      </View>
    </View>
  );
};

export default GlossaryItem;
