import * as types from './types';
import storage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

const LOGIN_INITIAL_STATE = {
  isSubmitting: false,
  isSubmitted: false,
  failure: null,
};

const loginReducer = (state = LOGIN_INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN.SUBMIT:
      return {
        ...LOGIN_INITIAL_STATE,
        isSubmitting: true,
      };
    case types.LOGIN.SUCCESS:
      return {
        ...LOGIN_INITIAL_STATE,
        isSubmitted: true,
        resource: action.payload.resource,
      };
    case types.LOGIN.FAILURE:
      return {
        ...LOGIN_INITIAL_STATE,
        failure: action.payload.error,
      };
    default:
      return state;
  }
};

export const loginReducerPersisted = persistReducer(
  {key: 'loginReducer', storage},
  loginReducer,
);
