import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';
import sadDeadpool from '../../../img/sad-deadpool.png';
export default class ComicFailure extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {getComicsByCharacterAppearance, capitanMarvel} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Falha ao carregar quadrinhos :'(</Text>
        <View
          style={{
            width: 200,
            height: 200,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
          }}>
          <Image
            source={sadDeadpool}
            style={{resizeMode: 'contain', flex: 1}}
          />
        </View>

        <Button
          onPress={() => getComicsByCharacterAppearance(capitanMarvel?.id)}
          color={'#ec1d24'}
          title={'Tentar novamente'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#A9A9A9',
  },
});
