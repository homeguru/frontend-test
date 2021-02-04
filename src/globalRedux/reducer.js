import { ON_LOADING, ON_LOADED } from './types';

const INITIAL_STATE = {
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ON_LOADING:
            return { ...state, loading: true };
        case ON_LOADED:
            return { ...state, loading: false };
        default:
            return state;
    }
};