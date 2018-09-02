// Post Reducer 

const postReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return state.concat([action.data])
    case 'REMOVE_POST':
      return state.filter((post) => post.id !== action.id)
    case 'EDIT_POST':
      return state.map((post) => post.id === action.id ? {...post, isEditing: !post.isEditing} : post);
    default:
      return state
  }
}

export default postReducer;