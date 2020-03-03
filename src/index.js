import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom'; //Can use browserHistory instead of Router to get access to props.history and then use push.
import reduxThunk from 'redux-thunk'; //Also can use redux-promise
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import history from './history';

import PostsList from './components/PostsList';
import PostEdit from './components/PostEdit';
import PostNew from './components/PostNew';
import PostView from './components/PostView';
import reducers from './reducers';

//Compose enchancers to hook redux devtools.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //redux devtools.
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(reduxThunk))
); //Create redux store with middleware.

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<div className="ui container" style={{ marginTop: '10px' }}>
				<Switch>
					<Route path="/" exact component={PostsList} />
					<Route path="/posts/new" exact component={PostNew} />
					<Route path="/posts/edit/:id" exact component={PostEdit} />
					<Route path="/posts/:id" exact component={PostView} />
				</Switch>
			</div>
		</Router>
	</Provider>,
	document.querySelector('#root')
);
