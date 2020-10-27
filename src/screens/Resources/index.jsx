import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';

import FloatingButtonFYV from 'components/FloatingButtonFYV';
import PageHeader from 'components/PageHeader';
import Heading from 'components/Heading';
import ResourceCard from 'components/ResourceCard';

import headerImage from 'assets/headers/resources.png';

//import data from 'config/resources.json';

import colors from 'config/colors.json';
import client from '../../services/api';

const Resources = () => {
  const [resourceData, setResourceData] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "resource"] { name, content } | order(word asc)',)
      .then(response => {
        setResourceData(response);
      });
  }, []);

  //console.log('Resource: ', resourceData);

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

          {resourceData.map(object => (
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
