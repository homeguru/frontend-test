import React from 'react';

interface propsUrl {
  url: string
}
const Image: React.FC<propsUrl> = ({url}) => {
  return <img src={`${url}.jpg`} alt="img"/>;
}

export default Image;