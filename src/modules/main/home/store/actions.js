import * as types from './types';

export const getComicsAction = {
  load: () => ({type: types.GET_COMICS.LOAD}),
  success: resource => ({
    type: types.GET_COMICS.SUCCESS,
    payload: {resource},
  }),
  failure: error => ({
    type: types.GET_COMICS.FAILURE,
    payload: {error},
  }),
  loadMore: () => ({type: types.GET_COMICS.LOAD_MORE}),
  loadMoreSuccess: resource => ({
    type: types.GET_COMICS.LOAD_MORE_SUCCESS,
    payload: {resource},
  }),
  loadMorefailure: error => ({
    type: types.GET_COMICS.LOAD_MORE_FAILURE,
    payload: {error},
  }),
};

export const storeComicsAction = {
  store: resource => ({
    type: types.STORE_COMICS.STORE,
    payload: {resource},
  }),
  reset: () => ({
    type: types.STORE_COMICS.RESET,
  }),
};
