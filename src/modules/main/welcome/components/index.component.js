import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
  StatusBar,
} from 'react-native';
import Swiper from 'react-native-swiper';

import marvelLogo from '../../../../img/marvel-logo.png';
import carolDanvers from '../img/carol-danvers.jpg';

export default class IndexComponent extends Component {
  slide1Render = () => (
    <View style={styles.slide1container}>
      <Image
        source={marvelLogo}
        style={{resizeMode: 'center', width: 200, height: 100}}
      />
      <View>
        <Text style={{fontSize: 26, color: '#FFF', fontWeight: '700'}}>
          Homeguru React native Test
        </Text>
      </View>
    </View>
  );

  slide2Render = () => (
    <ImageBackground source={carolDanvers} style={styles.slide2container}>
      <View style={{alignSelf: 'center'}}>
        <Text style={{fontSize: 30, color: '#FFF', fontWeight: '700'}}>
          Capitã Marvel Comics
        </Text>
      </View>
      <View style={{paddingBottom: 40}}>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          color={'#2f2e96'}
          title={'Começar agora'}
        />
      </View>
    </ImageBackground>
  );

  render() {
    return (
      <Swiper showsButtons={false} style={styles.wrapper}>
        {this.slide1Render()}
        {this.slide2Render()}
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  slide1container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ec1d24',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2container: {
    flex: 1,
    padding: 20,

    justifyContent: 'space-between',
  },
  wrapper: {
    // padding: 20,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
