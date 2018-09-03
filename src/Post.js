import React from 'react';
import { deletePost } from './actions/actions';
import { connect } from 'react-redux'

class Post extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.post.title}</h2>
        <h2>{this.props.post.message}</h2>
        <button>Edit</button>
        <button onClick={() => this.props.dispatch(deletePost(this.props.post.id))}>Del</button>
      </div>
    );
  }
};

export default connect()(Post);