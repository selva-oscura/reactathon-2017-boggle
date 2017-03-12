import React from 'react';
import Tile from './Tile';
const Row = ({row}) => {
  console.log('row', row)
  return(
    <div>{row.map((tile, i) => <Tile key={i} tile={tile} />)}</div>
  );
};

export default Row;
