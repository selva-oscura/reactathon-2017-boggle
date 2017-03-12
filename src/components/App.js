import React, {Component} from 'react';
import Button from './Button.js';
import Board from './GameBoard/Board.js';
import WordLists from './WordLists/WordLists';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			board: [ 
								[ 'b', 't', 'i', 'i' ],
							  [ 'e', 'y', 'w', 'i' ],
							  [ 'e', 'l', 'e', 's' ],
							  [ 'o', 'p', 'o', 'p' ] 
							],
			wordLists: {
				player1:{
					words: ['bat', 'cat', 'tad']
				}, 
				player2:{
					words:['bat', 'dog', 'whatever']
				}
			}
		}
		this.newGame = this.newGame.bind(this);
	}
	newGame () {
		console.log('clicked for a new game!')
	}
	render(){
		const board = this.state.board;
		const wordLists = this.state.wordLists;
		return (
			<div className="App">
				<Board board={board} />
				<div name="Buttons">
					<Button name={'delete'} />
					<Button name={'submit'} />
					<Button name={'new game'} newGame={this.newGame} />
				</div>
				<WordLists wordlists={wordLists} />
			</div>
		)
	}
}

export default App;

