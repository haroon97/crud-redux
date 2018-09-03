import React from 'react';
import { connect } from 'react-redux';
import { addPost } from './actions/actions';

class PostForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const message = e.target.elements.message.value;
    const data = {
      id: new Date(),
      title,
      message
    }
    this.props.dispatch(addPost(data))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' required placeholder='Enter the title' name='title'/> <br />
          <textarea type='text' required placeholder='Enter your message' name='message'/> <br />
          <button>Post</button>
        </form>
      </div>
    );
  }
};

export default connect()(PostForm);