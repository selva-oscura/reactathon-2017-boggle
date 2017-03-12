import React from 'react';
import PlayerWords from './PlayerWords';

const styles = {
	wordListStyle: {
		flex: 1,
    display: 'flex',
    flexDirection: 'row',
		marginTop: 10,
    marginBottom: 50,
	}
}

const WordLists = ({wordLists}) => {
		return (
			<div className="Words" style={styles.wordListStyle}>
				{wordLists.map((player, i) => <PlayerWords key={i} name={player.name} words={player.words} />)}
			</div>
		)
}

export default WordLists;
