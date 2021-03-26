import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class ComicFailure extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Falha ao carregar quadrinhos</Text>
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
