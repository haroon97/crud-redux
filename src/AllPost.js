import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import Edit from './Edit';

class AllPost extends React.Component {
  render() {
    return (
      <div>
        <h1>All Posts</h1>
        {this.props.posts.map((post) => (
          <div key={post.data.id}>
              {post.data.isEditing ? <Edit title={post.data.title} message={post.data.message} key={post.data.id} /> :
                  <Post key={post.data.id} title={post.data.title} message={post.data.message} />}
          </div>
      ))}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    posts: state
  }
}

export default connect(mapStateToProps)(AllPost);