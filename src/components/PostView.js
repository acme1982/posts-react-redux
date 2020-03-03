import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostView extends React.Component {
	componentDidMount() {
		this.props.fetchPost(this.props.match.params.id);
	}

	onClick = () => {
		this.props.deletePost(this.props.match.params.id);
	};

	render() {
		if (!this.props.post) {
			return (
				<div>
					<p>Loading...</p>
				</div>
			);
		}
		const { title, categories, content } = this.props.post;
		return (
			<div className="ui container">
				<div className="ui right aligned container">
					<button onClick={this.onClick} className="ui button red">
						Delete post
					</button>
				</div>
				<h2 className="ui header">Title: {title}</h2>
				<h3 className="ui header">Categories: {categories}</h3>
				<hr />
				<div className="content">
					<p>{content}</p>
				</div>
				<div className="ui center aligned container">
					<Link to="/" className="ui neutral button">
						All Posts
					</Link>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ posts }, ownProps) => {
	return { post: posts[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchPost, deletePost })(PostView);
