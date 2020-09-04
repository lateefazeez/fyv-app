/* eslint-disable react/jsx-indent */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

/* eslint-disable camelcase */

/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView } from 'react-native';
import SectionTitleText from '../components/SectionTitleText';
import PageHeader from '../components/PageHeader';
import sectionIcon from '../../assets/finding_your_voice_icon.png';
import SectionDetailsText from '../components/SectionDetailsText';



const FindingYourVoice = () => {
  // const navigation = useNavigation();

  return (
    <ScrollView style={{ flex: 1 }}>
      <PageHeader source={sectionIcon} />
      <View style={{ padding: 16 }}>
      <SectionTitleText>Finding Your Voice</SectionTitleText>

     <SectionDetailsText>The following three examples are based on real life experience of worker's. The options and decisions provided will not apply to every situation you encounter in the work place, but as you work through them, they will show you how knowledge of the correct legislation and protections can help you make choices that work best for you.  </SectionDetailsText>
    
        
    
      
       
      </View>
    </ScrollView>
  
  );
};
 export default FindingYourVoice;



