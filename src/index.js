import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore} from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import reducer from './reducers';
// import initialState from './initialState';
import App from './components/App';

// // import { authActions } from './actions/auth';
// // import { userActions } from './actions/users';
// import { startListeningForBoards } from './actions/boardActions';

// const middleware = [ thunk ];
// const enhancers = [];
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
// 	reducer,
// 	initialState,
// 	composeEnhancers(
// 		applyMiddleware(...middleware),
// 		...enhancers
// 	)
// );

// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById("root")
// );

// store.dispatch(startListeningForBoards());

ReactDOM.render(<App />, document.getElementById('root'))