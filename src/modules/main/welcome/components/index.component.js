import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class IndexComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>Header</View>
        <View>Image</View>
        <View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
