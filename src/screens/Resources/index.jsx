import React from 'react';
import { View, ScrollView } from 'react-native';

import FloatingButtonFYV from 'components/FloatingButtonFYV';
import PageHeader from 'components/PageHeader';
import Heading from 'components/Heading';
import ResourceCard from 'components/ResourceCard';

import headerImage from 'assets/resources_main_3x.png';
import data from 'config/resources.json';

const Resources = () => {
  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <PageHeader source={headerImage} />

        <View style={{ padding: 16 }}>
          <Heading>Resources</Heading>

          {data.map((object, index) => {
            return (
              <ResourceCard
                key={index}
                title={object.name}
                content={object.content}
              />
            );
          })}
        </View>
      </ScrollView>
      <FloatingButtonFYV />
    </>
  );
};

export default Resources;
