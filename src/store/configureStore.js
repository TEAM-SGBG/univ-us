import { createStore } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { devToolsEnhancer } from 'redux-devtools-extension';

import rootReducer from '../reducers';

export default () => {
  const store = createStore(rootReducer, undefined, devToolsEnhancer());

  return store;
};
