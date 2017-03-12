import React from 'react';

const styles = {
  WordStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3C7BB',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007aff ',
    margin: 1,
  }
}

const Word = ({word}) => {
  return(
    <div style={styles.WordStyle}>
      <p>{word}</p>
    </div>
  )
}


export default Word;
