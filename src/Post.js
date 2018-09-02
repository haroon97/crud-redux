import React from 'react';

const Post = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h2>{props.message}</h2>
      <button>Edit</button>
      <button></button>
    </div>
  );
}

export default Post;