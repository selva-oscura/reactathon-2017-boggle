import React, {Component} from 'react';
import Button from './Button.js';
import Board from './GameBoard/Board.js'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			board: [ 
								[ 'b', 't', 'i', 'i' ],
							  [ 'e', 'y', 'w', 'i' ],
							  [ 'e', 'l', 'e', 's' ],
							  [ 'o', 'p', 'o', 'p' ] 
							]
		}
	}
	render(){
		const board = this.state.board;
		return (
			<div className="App">
				<Board board={board} />
				<div name="Buttons">
					<Button name={'delete'}>Delete</Button>
					<Button name={'submit'}>Submit</Button>
				</div>
				<div name="Words">
					<h4>Player 1</h4>
					<p>words galore</p>
					<h4>Player 2</h4>
					<p>even more words galore</p>
					</div>
			</div>
		)
	}
}

export default App;

