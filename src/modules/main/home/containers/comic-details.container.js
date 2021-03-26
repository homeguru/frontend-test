import {ComicDetailsComponent} from '../components';
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectors, operations} from '../store';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

class ComicDetailsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ComicDetailsComponent {...this.props} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComicDetailsContainer);
