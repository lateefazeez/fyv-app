import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

import localData from 'config/localData.json';
import client from 'services/api';

const fetchAndStoreContent = async () => {
  const isConnected = await NetInfo.fetch();
  const storedItems = await AsyncStorage.getAllKeys();

  if (!storedItems && !isConnected) {
    const knowYourRights = JSON.stringify(
      localData.filter(item => item._id === 'knowYourRights'),
    );

    const ohs = JSON.stringify(localData.filter(item => item._id === 'ohs'));

    const resources = JSON.stringify(
      localData.filter(item => item._type === 'resource'),
    );

    const glossary = JSON.stringify(
      localData.filter(item => item._type === 'glossary'),
    );

    const disclaimer = JSON.stringify(
      localData.filter(item => item._id === 'disclaimer'),
    );
    const covidInfo = JSON.stringify(
      localData.filter(item => item._id === 'covidInfo'),
    );
    const employmentStandards = JSON.stringify(
      localData.filter(item => item._id === 'employmentStandards'),
    );
    const humanRights = JSON.stringify(
      localData.filter(item => item._id === 'humanRights'),
    );
    const introSlides = JSON.stringify(
      localData.filter(item => item._id === 'introSlides'),
    );

    const typesOfHazards = JSON.stringify(
      localData.filter(item => item._id === 'typesOfHazards'),
    );

    const basicRights = JSON.stringify(
      localData.filter(item => item._id === 'basicRights'),
    );

    const wcb = JSON.stringify(localData.filter(item => item._id === 'wcb'));

    await AsyncStorage.multiSet([
      ['KNOW_YOUR_RIGHTS', knowYourRights],
      ['OHS', ohs],
      ['RESOURCES', resources],
      ['GLOSSARY', glossary],
      ['DISCLAIMER', disclaimer],
      ['COVID_INFO', covidInfo],
      ['EMPLOYMENT_STANDARDS', employmentStandards],
      ['HUMAN_RIGHTS', humanRights],
      ['INTRO_SLIDES', introSlides],
      ['TYPES_OF_HAZARDS', typesOfHazards],
      ['BASIC_RIGHTS', basicRights],
      ['WCB', wcb],
    ]);
  }

  if (isConnected) {
    const fetchedKnowYourRights = await client
      .fetch('*[_id == "knowYourRights"]')
      .then(response => {
        return JSON.stringify(response[0]);
      });

    const fetchedOhs = await client.fetch('*[_id == "ohs"]').then(response => {
      return JSON.stringify(response[0]);
    });

    const fetchedResources = await client
      .fetch('*[_type == "resource"] | order(name asc)')
      .then(response => {
        return JSON.stringify(response);
      });

    const fetchedGlossary = await client
      .fetch('*[_type == "glossary"] | order(word asc)')
      .then(response => {
        return JSON.stringify(response);
      });

    const fetchedDisclaimer = await client
      .fetch('*[_id == "disclaimer"]')
      .then(response => {
        return JSON.stringify(response[0]);
      });
    const fetchedCovidInfo = await client
      .fetch('*[_id == "covidInfo"]')
      .then(response => {
        return JSON.stringify(response[0]);
      });
    const fetchedEmploymentStandards = await client
      .fetch('*[_type == "employmentStandards"][0]{..., resourceCard->}')
      .then(response => {
        return JSON.stringify(response);
      });
    const fetchedHumanRights = await client
      .fetch('*[_id == "humanRights"]')
      .then(response => {
        return JSON.stringify(response[0]);
      });
    const fetchedIntroSlides = await client
      .fetch('*[_id == "introSlides"]')
      .then(response => {
        return JSON.stringify(response[0]);
      });

    const fetchedTypesOfHazards = await client
      .fetch('* [ _id == "typesOfHazards" ][ 0 ]{ ..., resourceCard->}')
      .then(response => {
        return JSON.stringify(response);
      });

    const fetchedBasicRights = await client
      .fetch('*[_id == "basicRights"]')
      .then(response => {
        return JSON.stringify(response[0]);
      });

    const fetchedWcb = await client
      .fetch('*[_id == "wcb"][0]{..., resourceCard->}')
      .then(response => {
        return JSON.stringify(response);
      });

    await AsyncStorage.multiSet([
      ['INTRO_SLIDES', fetchedIntroSlides],
      ['KNOW_YOUR_RIGHTS', fetchedKnowYourRights],
      ['OHS', fetchedOhs],
      ['DISCLAIMER', fetchedDisclaimer],
      ['GLOSSARY', fetchedGlossary],
      ['RESOURCES', fetchedResources],
      ['COVID_INFO', fetchedCovidInfo],
      ['EMPLOYMENT_STANDARDS', fetchedEmploymentStandards],
      ['HUMAN_RIGHTS', fetchedHumanRights],
      ['TYPES_OF_HAZARDS', fetchedTypesOfHazards],
      ['BASIC_RIGHTS', fetchedBasicRights],
      ['WCB', fetchedWcb],
    ]);
  }
};

export default fetchAndStoreContent;
