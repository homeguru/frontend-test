import {compose, combineReducers, createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import {MainModule} from '../modules';

export const store = createStore(
  combineReducers({
    ...MainModule.HomeFeature.store.reducers,
  }),
  {},
  compose(applyMiddleware(thunk, logger)),
);

export const persistor = persistStore(store);
