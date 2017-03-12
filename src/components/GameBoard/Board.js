import React from 'react';
import Row from './Row';
const styles = {
  BoardStyle: {
    height: 100,
    width: 100,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 50
  }
}

const Board = ({board}) => {
  console.log("board", board)
    return (
      <div className="Board" style={styles.BoardStyle}>
        {board.map((row, i) => <Row key={i} row={row} />)}
     </div>
   )
}

export default Board;