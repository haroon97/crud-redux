import React from 'react';
import { deletePost, editPost } from './actions/actions';
import { connect } from 'react-redux'

class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <h2 className="post_title">{this.props.post.title}</h2>
        <p className="post_message">{this.props.post.message}</p>
        <div className='control_buttons'>
          <button className='edit' onClick={() => this.props.dispatch(editPost(this.props.post.id))}>Edit</button>
          <button className='delete' onClick={() => this.props.dispatch(deletePost(this.props.post.id))}>Del</button>
        </div>
      </div>
    );
  }
};

export default connect()(Post);