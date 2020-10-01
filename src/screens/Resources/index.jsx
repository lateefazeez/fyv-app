import React from 'react';
import { View, ScrollView } from 'react-native';

import FloatingButtonFYV from 'components/FloatingButtonFYV';
import PageHeader from 'components/PageHeader';
import Heading from 'components/Heading';
import ResourceCard from 'components/ResourceCard';

import headerImage from 'assets/headers/resources.png';
import data from 'config/resources.json';

import colors from 'config/colors.json';

const Resources = () => {
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
          <Heading>Resources</Heading>

          {data.map(object => (
            <ResourceCard
              key={object.name}
              title={object.name}
              content={object.content}
            />
          ))}
        </View>
      </ScrollView>
      <FloatingButtonFYV />
    </>
  );
};

export default Resources;
