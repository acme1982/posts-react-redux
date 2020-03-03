import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import _ from 'lodash';

import PostsForm from './PostsForm';

class PostEdit extends React.Component {
	componentDidMount() {
		this.props.fetchPost(this.props.match.params.id);
	}
	onSubmit = () => {
		console.log('Deleted');
	};

	render() {
		if (!this.props.post) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<h3>Edit Post</h3>
				<PostsForm
					initialValues={_.pick(
						this.props.post,
						'title',
						'categories',
						'content'
					)}
					onSubmit={this.onSubmit}
					buttonLabel="Edit Post"
				/>
			</div>
		);
	}
}

const mapStateToProps = ({ posts }, ownProps) => {
	return {
		post: posts[ownProps.match.params.id]
	};
};

export default connect(mapStateToProps, { fetchPost })(PostEdit);
