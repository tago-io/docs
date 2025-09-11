import React from 'react';
import { Provider } from 'react-redux';

// Import the store creation function from the OpenAPI theme
const { createStoreWithoutState } = require('docusaurus-theme-openapi-docs/lib/theme/ApiItem/store');

// Create the store using the OpenAPI theme's store creator
const store = createStoreWithoutState(undefined, []);

export default function Root({ children }) {
  return <Provider store={store}>{children}</Provider>;
}