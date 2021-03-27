import {createStackNavigator} from 'react-navigation-stack';

import {IndexScreen} from '../screens';

const Navigator = createStackNavigator(
  {
    Index: {
      screen: IndexScreen,
      navigationOptions: ({navigation}) => ({
        header: null,
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
