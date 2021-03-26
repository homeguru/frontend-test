import React from 'react';

import {IndexContainer} from '../containers';

export default class IndexScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return <IndexContainer navigation={navigation} />;
  }
}
