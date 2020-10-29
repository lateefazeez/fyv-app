import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'zwem8fyp',
  dataset: 'app-content',
  // TODO: change useCdn to true
  useCdn: false,
});

export default client;
