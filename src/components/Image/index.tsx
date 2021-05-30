import React from 'react';

import { Container } from './styles';

interface propsUrl {
  url: string
}
const Image: React.FC<propsUrl> = ({ url }) => {
  return (
    <Container>
      <img src={`${url}.jpg`} alt="img" />
    </Container>
  )
}

export default Image;