import { combineReducers } from 'redux';
import globalReducer from '../globalRedux/reducer';
import homeReducer from '../pages/home/reducer';
import charReducer from '../pages/charDetails/reducer';

export default combineReducers({
  global: globalReducer,
  home: homeReducer,
  charDetails: charReducer
});
