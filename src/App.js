import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Navigator, store, persistor, initialize} from './config';

export default class App extends Component {
  componentDidMount() {
    initialize();
  }
  render() {
    return (
      <>
        <StatusBar backgroundColor={'#ec1d24'} animated />
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Navigator />
            </PersistGate>
          </Provider>
        </SafeAreaView>
      </>
    );
  }
}
