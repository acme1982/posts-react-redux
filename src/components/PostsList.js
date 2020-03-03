import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostsList extends React.Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderList = () => {
		//lodash map function maps over the objects.
		return _.map(this.props.posts, post => {
			return (
				<div key={post.id} className="ui middle aligned divided list">
					<div className="item">
						<div className="right floated content">
							<Link
								style={{ marginTop: '3px' }}
								to={`/posts/${post.id}`}
								className="ui button"
							>
								View Post
							</Link>
						</div>
						<hr />
						<div className="content">{post.title}</div>
					</div>
				</div>
			);
		});
	};

	render() {
		return (
			<div>
				<div className="ui container">
					<div className="ui center aligned container">
						<h3>List Of all Posts</h3>
					</div>
					<div
						style={{ marginTop: '-25px', marginBottom: '50px' }}
						className="ui right aligned container"
					>
						<Link className="ui primary button" to="/posts/new">
							New Post
						</Link>
					</div>
					<div className="ui container">{this.renderList()}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts
	};
};

export default connect(mapStateToProps, { fetchPosts })(PostsList);
