import React from 'react';

import {ComicDetailsContainer} from '../containers';

export default class ComicDetailsScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return <ComicDetailsContainer navigation={navigation} />;
  }
}
