import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import FloatingButtonFYV from 'components/FloatingButtonFYV';
import PageHeader from 'components/PageHeader';
import Heading from 'components/Heading';
import ResourceCard from 'components/ResourceCard';

import headerImage from 'assets/headers/resources.png';

// import data from 'config/resources.json';

import colors from 'config/colors.json';
import client from 'services/api';

const Resources = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "resource"] { name, content } | order(word asc)')
      .then(response => {
        setData(response);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator animating color={colors.primary} />
    </View>
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
