import React from 'react';
import {
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {ListItem, Icon, Text, Avatar} from 'react-native-elements';

import {MainModule} from '../modules';

const drawerItems = [];

export default class Navigator extends React.Component {
  render() {
    const MainNavigator = createSwitchNavigator(
      {
        Home: {screen: MainModule.HomeFeature.config.Navigator},
        Welcome: {screen: MainModule.WelcomeFeature.config.Navigator},
      },
      {
        initialRouteName: 'Welcome',
        lazyLoad: true,
        swipeEnabled: false,
        defaultNavigationOptions: {tabBarVisible: false},
      },
    );

    const ContainerNavigator = createAppContainer(MainNavigator);

    return <ContainerNavigator />;
  }
}
