import React, {Component} from 'react';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: "boggle",
			board: [ 
								[ 'b', 't', 'i', 'i' ],
							  [ 'e', 'y', 'w', 'i' ],
							  [ 'e', 'l', 'e', 's' ],
							  [ 'o', 'p', 'o', 'p' ] 
							]
		}
	}
	render(){
		const name = this.state.name;
		const board = this.state.board;
		return (
			<div className="App">
				<p>hello {name}</p>
				{board.map(row=> <p>{row.join(" ")}</p>)}
			</div>
		)
	}
}

export default App;