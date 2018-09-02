import React from 'react';
import { editPost } from './actions/actions';
import { connect } from 'react-redux';

class Edit extends React.Component {

  handleEdit = (e) => {
    e.preventDefault();
    const newTitle = e.target.elements.newTitle.value;
    const newMessage = e.target.elements.newMessage.value;
    const data = {
      newTitle,
      newMessage
    }
    console.log(data);
    this.props.dispatch(editPost(this.props.key, data))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleEdit}>
          <input defaultValue={this.props.title} placeholder='Enter the title' name='newTitle'/>
          <textarea required defaultValue={this.props.message} placeholder='Enter the message' rows='5' cols='28' name='newMessage'/>
        </form>
      </div>
    );
  }
}

export default connect()(Edit);