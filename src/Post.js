import React from 'react';
import { connect } from 'react-redux';
import { removePost } from './actions/actions';

class Post extends React.Component {

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h2>{this.props.message}</h2>
        <button>Edit</button>
        <button onClick={() => this.props.dispatch(removePost(this.props.key))}>Delete</button>
      </div>
    );
  }
}

export default connect()(Post);