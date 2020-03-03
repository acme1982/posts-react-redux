import { FETCH_POSTS, FETCH_POST, ADD_POST, DELETE_POST } from '../types';
import herokuApi from '../apis/herokuApi';
import history from '../history';

const API_KEY = 'BILENKAS123';
//create an action to send it to reducer to fetch all posts from API.

export const fetchPosts = () => async dispatch => {
	const response = await herokuApi.get('/api/posts', {
		params: {
			key: API_KEY
		}
	});

	dispatch({
		type: FETCH_POSTS,
		payload: response
	});
};

//delete post with ID.
export const deletePost = id => async dispatch => {
	await herokuApi.delete(`/api/posts/${id}`, {
		params: {
			key: API_KEY
		}
	});

	dispatch({
		type: DELETE_POST,
		payload: id
	});
	history.push('/');
};
// export const fetchPosts = () => {
// 	const response = herokuApi.get('/api/posts', {
// 		params: {
// 			key: API_KEY
// 		}
// 	});
// 	return {
// 		type: FETCH_POSTS,
// 		payload: response
// 	};
// };

//create action for creating a new post. Post will receive values from redux form.

export const createPost = values => async dispatch => {
	const response = await herokuApi.post(
		'/api/posts',
		{ ...values },
		{
			params: {
				key: API_KEY
			}
		}
	);
	dispatch({
		type: ADD_POST,
		payload: response
	});
	history.push('/');
};

//Example using redux-promise
// export const createPost = (values, callBack) => {
// 	const response = herokuApi
// 		.post('/api/posts', values, {
// 			params: {
// 				key: API_KEY
// 			}
// 		})
// 		.then(() => callBack());

// 	return {
// 		type: ADD_POST,
// 		payload: response
// 	};
// };

export const fetchPost = id => async dispatch => {
	const response = await herokuApi.get(`/api/posts/${id}`, {
		params: {
			key: API_KEY
		}
	});

	dispatch({
		type: FETCH_POST,
		payload: response
	});
};
