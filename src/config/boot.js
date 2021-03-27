import OneSignal from 'react-native-onesignal';
import {store} from './store';

global.store = store;

global.config = {};

export const initialize = () => {
  OneSignal.setAppId('77b9b1b4-3663-4c3d-a2b7-e1df9ba48dc4');
};
