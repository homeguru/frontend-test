import * as types from './types';

export const loginAction = {
  submit: () => ({type: types.LOGIN.SUBMIT}),
  success: (resource) => ({
    type: types.LOGIN.SUCCESS,
    payload: {resource},
  }),
  failure: (error) => ({
    type: types.LOGIN.FAILURE,
    payload: {error},
  }),
};
