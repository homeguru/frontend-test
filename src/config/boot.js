import OneSignal from 'react-native-onesignal';
//import NetInfo from '@react-native-community/netinfo';
import {store} from './store';

global.store = store;

global.config = {};

const onReceived = notification => {
  console.log('Notification received: ', notification);
};

const onOpened = openResult => {
  console.log('Message: ', openResult.notification.payload.body);
  console.log('Data: ', openResult.notification.payload.additionalData);
  console.log('isActive: ', openResult.notification.isAppInFocus);
  console.log('openResult: ', openResult);
};

const onIds = device => {
  console.log('Device info: ', device);
};

export const initialize = () => {
  // NetInfo.addEventListener(onInfo);

  OneSignal.setAppId('77b9b1b4-3663-4c3d-a2b7-e1df9ba48dc4');
};
