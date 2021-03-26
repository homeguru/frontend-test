export const loginState = {
  loginStatus: state => {
    const {isSubmitting, isSubmitted, failure} = state.loginReducerPersisted;
    return {isSubmitting, isSubmitted, failure};
  },
  loginResult: state => {
    const {resource} = state.loginReducerPersisted;
    return resource;
  },
};
