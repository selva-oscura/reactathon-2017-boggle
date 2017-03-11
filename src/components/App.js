import React, {Component} from 'react';

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
				{board.map((row, i) => <p key={i}>{row.join(" ")}</p>)}
			</div>
		)
	}
}

export default App;