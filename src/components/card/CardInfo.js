import React from 'react'

  const card = {
    'height': 180,
    'backgroundPosition': 'center center',
    'backgroundSize': 'cover',
    'border': 0,
    'flexGrow': 1,
    'position': 'relative',
    'overflow': 'hidden',
    'borderRadius': 4,
    'cursor': 'pointer',
    'transform': 'perspective(500px) translateZ(1px)',
    'zIndex': 1,
  };

  const comics = {
    fontSize: 12,
  };
  const textContainer = {
    position: 'absolute',
    zIndex: 3,
    bottom: 0,
    left: 0,
    textAlign: 'left',
    margin: (spacing.unit * 2),
  };
  const overlay = {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 1,
    backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))',
  };


const CardInfo = ({ classes, item, onPress }) => {
  const image = `${item.thumbnail.path}/standard_fantastic.${item.thumbnail.extension}`

  // eslint-disable-next-line
  return (
    <button
      onClick={(e) => onPress(e)}
      style={card}
      style={ backgroundImage:`url(${image})` }
    >
    </button>
  )
}

CardInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object,
  onPress: PropTypes.func,
}

export default (CardInfo)
