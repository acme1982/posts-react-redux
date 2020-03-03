import React from 'react';
//wire up action creator
import { createPost } from '../actions';
import { connect } from 'react-redux';

import PostsForm from './PostsForm';

class PostNew extends React.Component {
	onSubmit = formValues => {
		this.props.createPost(formValues);
	};

	render() {
		return (
			<div>
				<h3>Create New Post</h3>
				<PostsForm onSubmit={this.onSubmit} buttonLabel="Create Post" />
			</div>
		);
	}
}

export default connect(null, { createPost })(PostNew);
