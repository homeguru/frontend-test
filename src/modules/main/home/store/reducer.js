import * as types from './types';
import storage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

const GET_COMICS_INITIAL_STATE = {
  isLoading: false,
  isLoaded: false,
  failure: null,
  isLoadingMore: false,
  isLoadedMore: false,
  failureLoadMore: false,
  resource: null,
};

export const getComicsReducer = (state = GET_COMICS_INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_COMICS.LOAD:
      return {
        ...GET_COMICS_INITIAL_STATE,
        isLoading: true,
        resource: state.resource,
      };
    case types.GET_COMICS.SUCCESS:
      return {
        ...GET_COMICS_INITIAL_STATE,
        isLoaded: true,
        resource: action.payload.resource,
      };
    case types.GET_COMICS.FAILURE:
      return {
        ...GET_COMICS_INITIAL_STATE,
        failure: action.payload.error,
        resource: state.resource,
      };
    case types.GET_COMICS.LOAD_MORE:
      return {
        ...GET_COMICS_INITIAL_STATE,
        isLoadingMore: true,
      };
    case types.GET_COMICS.LOAD_MORE_SUCCESS:
      return {
        ...GET_COMICS_INITIAL_STATE,
        isLoadedMore: true,
        resource: action.payload.resource,
      };
    case types.GET_COMICS.LOAD_MORE_FAILURE:
      return {
        ...GET_COMICS_INITIAL_STATE,
        failureLoadMore: action.payload.error,
        resource: state.resource,
      };
    default:
      return state;
  }
};

const STORE_COMICS_INITIAL_STATE = {
  comics: [],
};

const storeComicsReducer = (state = STORE_COMICS_INITIAL_STATE, action) => {
  switch (action.type) {
    case types.STORE_COMICS.STORE:
      return {
        comics: action.payload.resource,
      };
    case types.STORE_COMICS.RESET:
      return {
        ...STORE_COMICS_INITIAL_STATE,
      };

    default:
      return state;
  }
};

export const storeComicsReducerPersisted = persistReducer(
  {key: 'storeComicsReducer', storage},
  storeComicsReducer,
);
