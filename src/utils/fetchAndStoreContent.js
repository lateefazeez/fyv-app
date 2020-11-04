import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

import localData from 'config/localData.json';
import client from 'services/api';

const fetchAndStoreContent = async () => {
  const isConnected = await NetInfo.fetch();
  const storedItems = await AsyncStorage.getAllKeys();

  if (!storedItems && !isConnected) {
    const appSettings = JSON.stringify(
      localData.filter(item => item._id === 'appSettings'),
    );

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

    await AsyncStorage.multiSet([
      ['APP_SETTINGS', appSettings],
      ['KNOW_YOUR_RIGHTS', knowYourRights],
      ['OHS', ohs],
      ['RESOURCES', resources],
      ['GLOSSARY', glossary],
      ['DISCLAIMER', disclaimer],
      ['COVID_INFO', covidInfo],
      ['EMPLOYMENT_STANDARDS', employmentStandards],
      ['HUMAN_RIGHTS', humanRights],
      ['INTRO_SLIDES', introSlides],
    ]);
  }

  if (isConnected) {
    const fetchedAppSettings = await client
      .fetch('*[_id == "appSettings"]')
      .then(response => {
        return JSON.stringify(response);
      });

    const fetchedKnowYourRights = await client
      .fetch('*[_id == "knowYourRights"]')
      .then(response => {
        return JSON.stringify(response);
      });

    const fetchedOhs = await client.fetch('*[_id == "ohs"]').then(response => {
      return JSON.stringify(response);
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
        return JSON.stringify(response);
      });
    const fetchedCovidInfo = await client
      .fetch('*[_id == "covidInfo"]')
      .then(response => {
        return JSON.stringify(response);
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

    await AsyncStorage.multiSet([
      ['APP_SETTINGS', fetchedAppSettings],
      ['KNOW_YOUR_RIGHTS', fetchedKnowYourRights],
      ['OHS', fetchedOhs],
      ['DISCLAIMER', fetchedDisclaimer],
      ['GLOSSARY', fetchedGlossary],
      ['RESOURCES', fetchedResources],
      ['COVID_INFO', fetchedCovidInfo],
      ['EMPLOYMENT_STANDARDS', fetchedEmploymentStandards],
      ['HUMAN_RIGHTS', fetchedHumanRights],
      ['INTRO_SLIDES', fetchedIntroSlides],
    ]);
  }
};

export default fetchAndStoreContent;
