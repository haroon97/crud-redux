import React from 'react';

class PostForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <form>
          <input type='text' placeholder='Enter post title' /><br />
          <textarea required rows='5' cols='28' placeholder='Enter post'/><br />
          <button>Post</button>
        </form>
      </div>
    );
  }
};

export default PostForm;