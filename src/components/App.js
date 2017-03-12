import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as boardActions from '../actions/boardActions.js';
import Button from './Button.js';
import Board from './GameBoard/Board.js';
import WordLists from './WordLists/WordLists';
import { database } from '../firebase';

class App extends Component {
	constructor(props) {
		super(props);
		// this.state = {
		// board: null,
		// roomId: 12345,
		// };
this.state = {
  board: [
      [ 'b', 't', 'i', 'i' ],
    [ 'e', 'y', 'w', 'i' ],
    [ 'e', 'l', 'e', 's' ],
    [ 'o', 'p', 'o', 'p' ]
  ],
  wordLists: [
      {
          name: "player1",
          words: ['bat', 'cat', 'tad']
      },{
          name: "player2",
          words:['bat', 'dog', 'whatever']
      }
  ]
}
		this.dataRef = database.ref();
		this.boardsRef = database.ref('boards');
		this.newGame = this.newGame.bind(this);
	};
	newGame () {
		console.log('new game clicked')
		const dies = [ 
			[ 'a', 'c', 'd', 'e', 'p', 'm' ],
			[ 'g', 'i', 'v', 'e', 'n', 't' ],
			[ 'v', 'e', 'n', 'd', 'a', 'z' ],
			[ 'qu', 'j', 'a', 'm', 'o', 'b' ],
			[ 'r', 'a', 'h', 'm', 'o', 's' ],
			[ 'f', 'e', 'e', 'h', 'i', 'y' ],
			[ 'd', 'o', 'w', 's', 'n', 'e' ],
			[ 'p', 'i', 's', 'n', 'e', 'h' ],
			[ 's', 'e', 'p', 'l', 'u', 't' ],
			[ 't', 'a', 'l', 'b', 'i', 'y' ],
			[ 'b', 'i', 'r', 'x', 'o', 'f' ],
			[ 'o', 'k', 'n', 't', 'u', 'd' ],
			[ 'g', 'l', 'u', 'w', 'i', 'r' ],
			[ 'u', 'k', 'g', 'e', 'l', 'y' ],
			[ 'l', 'e', 's', 'r', 'a', 'c' ],
			[ 'o', 'a', 't', 'c', 'i', 'a' ] 
			];

		let board, boardHashMap, diesCopy;

		const shakeBoard = () => {
			board = [];
			boardHashMap = {};
			diesCopy = JSON.parse(JSON.stringify(dies));
			for(let row = 0; row<4; row++){
				let r = [];
				for(let col=0; col<4; col++){
					let die = Math.floor(Math.random()*diesCopy.length);
					let face = Math.floor(Math.random()*6);
					let faceValue = diesCopy[die][face];
					r.push(faceValue);
					diesCopy = diesCopy.slice(0, die).concat(diesCopy.slice(die+1));
					if(boardHashMap[faceValue]){
						boardHashMap[faceValue].push([row, col, true]);
					}else{
						boardHashMap[faceValue] = [[row, col, true]];
					}
				}
				board.push(r);
			}
		}
		shakeBoard();
		console.log('board from app',board);
		console.log('LOOOOOKKKKKK  thisnewGame', this)
		console.log('this.props', this.props, '\nthis.props.actions', this.props.actions)
		let roomId = 12345;
		console.log('this.props in newGame', this.props)
		this.props.actions.saveBoard(board, roomId)
			.then(() => {
				console.log('should have just succeeded at saveBoard from call in newGame in App.js')
			}).catch((error) => {
				console.log('error from newGame in App', error);
			});
	}
  componentWillMount() {
    this.dataRef.on('child_added', (snapshot) => console.log('child_added', snapshot.val()));
    this.dataRef.on('child_removed', (snapshot) => console.log('child_removed', snapshot.val()));
    this.dataRef.on('child_changed', (snapshot) => console.log('child_changed', snapshot.val()));

    this.dataRef.on('value', (snapshot) => {
      const data = Object.entries(snapshot.val())
                         .map(([ key, value ]) => ({ key, value }));
      this.setState({ data });
    });
  }
	render(){
		console.log("this.props from render in App.js", this.props);
		console.log("this.props.board",this.props.board, "this.props.children", this.props.children);
		return (
			<div className="App">
				{this.state.board && <Board board={this.state.board} />}
				<div name="Buttons">
					<Button name={'delete'} />
					<Button name={'submit'} />
					<Button name={'new game'} newGame={this.newGame} />
				</div>
				<WordLists wordLists={this.state.wordLists} />
			</div>
		)
	}
};
				// {this.props.board && <Board board={this.props.board} />}
// App.propTypes = {
// 	board: PropTypes.array.isRequired,
// };
const mapStateToProps = (state, ownProps) => {
	console.log('mappingStateToProps')
	console.log('state', state, "ownProps", ownProps)
	return {
		board: state.boards
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(boardActions, dispatch)
	}
}
// export default connect(mapStateToProps, mapDispatchToProps)(App);



		//		<WordLists wordlists={wordLists} />
		// const board = this.state.board;
		// const wordLists = this.state.wordLists;

// export default App;

// 			// board: [ 
// 			// 					[ 'b', 't', 'i', 'i' ],
// 			// 				  [ 'e', 'y', 'w', 'i' ],
// 			// 				  [ 'e', 'l', 'e', 's' ],
// 			// 				  [ 'o', 'p', 'o', 'p' ] 
// 			// 				],

// class App extends React.Component {
// 	render() {
// 		return (
// 			<div className="container-fluid">
// 				<Header
// 					loading={this.props.loading}
// 				/>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// }

// App.propTypes = {
// 	children: PropTypes.object.isRequired,
// 	loading: PropTypes.bool.isRequired
// };

// function mapStateToProps(state, ownProps) {
// 	return {
// 		loading: state.ajaxCallsInProgress > 0
// 	};
// }

// export default connect(mapStateToProps)(App);

export default App;