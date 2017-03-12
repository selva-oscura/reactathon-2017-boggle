import React from 'react';
import Word from './Word';
const styles = {
	playerWordsStyle: {
	}
}

const PlayerWords = ({name, words}) => {
  console.log('player name', name, 'words', words)
  return(
    <div className="PlayerWords" style={styles.playerWordsStyle}>
      <h4>{name}</h4>
      {words.map((word, i) => <Word key={i} word={word} />)}
    </div>
  );
}

export default PlayerWords;
