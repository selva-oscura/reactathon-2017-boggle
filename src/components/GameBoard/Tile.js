import React from 'react';

const styles = {
  TileStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666666',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007aff ',
    margin: 2,
    width: 25,
    height: 25
  }
}

const Tile = ({tile}) => {
  console.log("tile", tile)
  return (
    <div style={styles.TileStyle}>
      <p>{tile}</p>
    </div>
  )
}

export default Tile;
