import React, {Component} from 'react';
import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {Comic, ComicFailure} from './high-order-components';

export default class IndexComponent extends Component {
  constructor(props) {
    super(props);
  }

  renderActivityIndicator = () => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size={60} color={'#ec1d24'} />
    </View>
  );

  renderItem = ({item}) => (
    <Comic navigation={this.props.navigation} comic={item} />
  );

  render() {
    const {
      isLoading,
      isLoaded,
      failure,
      comics,
      capitaMarvel,
      loadMoreComicsByCharacterAppearance,
    } = this.props;

    if (failure) return <ComicFailure />;

    if (isLoading) return this.renderActivityIndicator();

    return (
      <View style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          horizontal={true}
          data={comics}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          onEndReached={() => {
            loadMoreComicsByCharacterAppearance(capitaMarvel.id);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  header: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContainer: {flexGrow: 1, alignItems: 'center'},
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
