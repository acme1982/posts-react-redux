import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import postsReducer from '../reducers/postsReducer';

export default combineReducers({
	posts: postsReducer,
	form: formReducer
});
