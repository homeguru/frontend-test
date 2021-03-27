import * as actions from './actions';
import * as services from '../services';

export const login = userCredentials => dispatch => {
  // return new Promise((resolve, reject) => {
  //   dispatch(actions.loginAction.submit());
  //   services.Api.login(userCredentials)
  //     .then(async res => {
  //       if (res.ok) {
  //         const response = await res.json();
  //         resolve(response);
  //         dispatch(actions.loginAction.success(response));
  //       } else {
  //         reject(res);
  //         dispatch(actions.loginAction.failure(res));
  //       }
  //     })
  //     .catch(err => {
  //       reject(err);
  //       dispatch(actions.loginAction.failure(err));
  //     });
  // });
};
