import React, {Component} from 'react';
import {format, parseISO} from 'date-fns';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import marvelLogo from '../../../../../../img/marvel-logo.png';

export default class Comic extends React.PureComponent {
  constructor(props) {
    super(props);
    this.path = this.props.comic?.images[0]?.path;
    this.extension = this.props.comic?.images[0]?.extension;
    this.uriImage = `${this.path}.${this.extension}`;
    FastImage.preload([
      {
        uri: this.uriImage,
      },
    ]);
  }

  header = () => {
    return (
      <View style={styles.headerContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {this.props.comic?.title}
        </Text>
      </View>
    );
  };

  content = () => {
    return (
      <View style={styles.contentContainer}>
        {this.path ? (
          <FastImage
            source={{uri: this.uriImage}}
            style={{width: 325, height: 500}}
            resizeMode={FastImage.resizeMode.contain}
          />
        ) : (
          <View style={styles.redBanner}>
            <Image
              source={marvelLogo}
              style={{resizeMode: 'center', width: 200, height: 100}}
            />
          </View>
        )}
      </View>
    );
  };

  footer = () => {
    const releaseDate = parseISO(this.props.comic?.dates[0]?.date);
    const releaseDateFriendly = releaseDate
      ? format(releaseDate, "dd'-'MM'-'yyyy")
      : 'indisponível';
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.dateStyle}>{releaseDateFriendly}</Text>
      </View>
    );
  };

  render() {
    const {navigation, comic} = this.props;
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ComicDetails', {comic, title: comic.title})
        }
        style={styles.container}>
        {this.header()}
        {this.content()}
        {this.footer()}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    borderRadius: 5,
    width: 300,
    backgroundColor: '#2f2e96',
    borderWidth: 1,
    elevation: 10,
    borderColor: 'transparent',

    alignItems: 'center',
  },
  redBanner: {
    flex: 1,
    backgroundColor: '#ec1d24',
    justifyContent: 'center',
    alignItems: 'center',
    width: 325,
    height: 500,
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
  },
  footerContainer: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: 325,
    height: 500,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  headerContainer: {
    paddingVertical: 15,
    paddingHorizontal: 7,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dateStyle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '700',
  },
  desciption: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
