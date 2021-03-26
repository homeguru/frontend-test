import React, {Component} from 'react';
import {format, parseISO} from 'date-fns';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class Comic extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  header = () => {
    const path = this.props.comic?.thumbnail?.path;
    const extension = this.props.comic?.thumbnail?.extension;
    const UriThumbnailImage = `${path}.${extension}`;
    return (
      <View style={styles.headerContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {this.props.comic?.title}
        </Text>
      </View>
    );
  };

  content = () => {
    const path = this.props.comic?.images[0]?.path;
    const extension = this.props.comic?.images[0]?.extension;
    const uriImage = `${path}.${extension}`;

    return (
      <View style={styles.contentContainer}>
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
