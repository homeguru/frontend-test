import {IndexComponent} from '../components';
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectors, operations} from '../store';

const mapStateToProps = state => ({
  isLoading: selectors.getComicsState.getComicsStatus(state).isLoading,
  isLoaded: selectors.getComicsState.getComicsStatus(state).isLoaded,
  failure: selectors.getComicsState.getComicsStatus(state).failure,
  comics: selectors.storeComicsState.getComicsStored(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getComicsByCharacterAppearance: operations.getComicsByCharacterAppearance,
      loadMoreComicsByCharacterAppearance:
        operations.loadMoreComicsByCharacterAppearance,
    },
    dispatch,
  );

class IndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.capitaMarvel = {
      id: 1010338,
    };
  }

  componentDidMount() {
    this.props.getComicsByCharacterAppearance(this.capitaMarvel.id);
  }

  render() {
    return <IndexComponent capitaMarvel={this.capitaMarvel} {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
