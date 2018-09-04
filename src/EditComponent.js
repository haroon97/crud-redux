import React from 'react';
import { connect } from 'react-redux';
import { updatePost } from './actions/actions';

class EditComponent extends React.Component {

  editHandler = (e) => {
    e.preventDefault();
    const newTitle = e.target.elements.title.value;
    const newMessage = e.target.elements.message.value;
    const data = {
      newTitle,
      newMessage
    }
    this.props.dispatch(updatePost({id: this.props.post.id, data}))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.editHandler}>
          <input defaultValue={this.props.post.title} type='text' required name='title' placeholder='Enter the title'/><br />
          <textarea defaultValue={this.props.post.message} type='text' required name='message' placeholder='Enter the message'/><br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default connect()(EditComponent);