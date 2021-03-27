import {createStackNavigator} from 'react-navigation-stack';

import {IndexScreen, ComicDetailsScreen} from '../screens';

const Navigator = createStackNavigator(
  {
    Index: {
      screen: IndexScreen,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
    ComicDetails: {
      screen: ComicDetailsScreen,
      navigationOptions: ({navigation}) => ({
        headerStyle: {
          backgroundColor: '#ec1d24',
        },
        headerTitle: navigation.getParam('title')
          ? navigation.getParam('title')
          : '',
        headerTitleStyle: {
          flex: 1,
          fontFamily: 'Roboto',
          fontSize: 18,
          fontWeight: 'bold',
          fontStyle: 'normal',
          textAlign: 'left',
          color: '#f5f5f5',
        },
        headerTintColor: '#FFF',
      }),
    },
  },
  {
    initialRouteName: 'Index',
    animationEnabled: true,
    lazyLoad: true,
    swipeEnabled: false,
  },
);

export default Navigator;
