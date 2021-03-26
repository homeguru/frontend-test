import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';

export default class ComicDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.comic = this.props.navigation.getParam('comic');
  }

  header = () => {
    const comic = this.props.navigation.getParam('comic');
    const path = comic?.images[0]?.path;
    const extension = comic?.images[0]?.extension;
    const uriImage = `${path}.${extension}`;

    return (
      <View style={styles.imageContainer}>
        {path ? (
          <Image
            source={{uri: uriImage}}
            style={{flex: 1, resizeMode: 'contain'}}
          />
        ) : (
          <View style={{flex: 1, backgroundColor: '#ec1d24'}}></View>
        )}
      </View>
    );
  };

  leftContentDivider = title => {
    return (
      <View
        style={{
          width: '90%',
          padding: 5,
          paddingLeft: 10,
          height: 40,
          backgroundColor: '#2f2e96',
          borderTopEndRadius: 30,
          borderBottomEndRadius: 30,
          marginVertical: 5,
        }}>
        <Text style={{fontSize: 22, color: '#FFF', flex: 1}}>{title}</Text>
      </View>
    );
  };

  rightContentDivider = title => {
    return (
      <View
        style={{
          alignSelf: 'flex-end',
          width: '90%',
          padding: 5,
          paddingLeft: 15,
          height: 40,
          backgroundColor: '#2f2e96',
          borderTopLeftRadius: 30,
          borderBottomLeftRadius: 30,
          marginVertical: 5,
        }}>
        <Text style={{fontSize: 22, color: '#FFF', flex: 1}}>{title}</Text>
      </View>
    );
  };

  description = () => {
    const description = this.comic.description;
    return (
      <>
        {this.leftContentDivider('Description')}
        <View style={styles.letftContentContainer}>
          <Text style={{color: 'black', fontSize: 16}}>{description}</Text>
        </View>
      </>
    );
  };

  characters = () => {
    const characters = this.comic.characters.items;
    return (
      <>
        {this.rightContentDivider('Characters')}
        <View style={styles.rightContentContainer}>
          {characters.map(character => {
            return (
              <Text style={{color: 'black', fontSize: 16}}>
                {character.name}
              </Text>
            );
          })}
        </View>
      </>
    );
  };

  creators = () => {
    const creators = this.comic.creators.items;
    return (
      <>
        {this.leftContentDivider('Creators')}
        <View style={styles.letftContentContainer}>
          {creators.map(character => {
            return (
              <Text style={{color: 'black', fontSize: 16}}>
                {character.name}
              </Text>
            );
          })}
        </View>
      </>
    );
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.header()}
        {this.description()}
        {this.characters()}
        {this.creators()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    borderWidth: 1,
    elevation: 1,
    borderColor: 'transparent',
    flexGrow: 1,
    paddingTop: 10,
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
  imageContainer: {
    height: 400,
    width: 320,
    borderColor: 'transparent',
    alignSelf: 'center',
    marginBottom: 10,
  },
  letftContentContainer: {
    padding: 5,
    paddingLeft: 10,
    backgroundColor: '#FFF',
    elevation: 1,
    width: '90%',
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
    marginBottom: 5,
  },
  rightContentContainer: {
    padding: 5,
    paddingLeft: 15,
    alignSelf: 'flex-end',
    backgroundColor: '#FFF',
    elevation: 1,
    width: '90%',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    marginBottom: 5,
  },
});
