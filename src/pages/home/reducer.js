import { ON_MARVEL_CHAR_CHANGED, ON_MARVEL_CHARS_LOADED } from './types';

const INITIAL_STATE = {
  comics: null,
  chars: [],
  characters: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ON_MARVEL_CHAR_CHANGED:
      return {
        ...state,
        comics: action.payload,
        chars: [],
      };
    case ON_MARVEL_CHARS_LOADED:
      return {
        ...state,
        chars: action.payload,
      };
    default:
      return state;
  }
};
