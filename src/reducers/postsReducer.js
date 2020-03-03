import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../types';
import _ from 'lodash';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_POSTS:
			return { ...state, ..._.mapKeys(action.payload.data, 'id') };
		case FETCH_POST:
			//es5 syntax to add a post to existing object.
			// const post = action.payload.data;
			// 	const newState = { ...state };
			// 	newState[post.id] = post;
			// 	return post;
			return { ...state, [action.payload.data.id]: action.payload.data };
		case DELETE_POST:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
