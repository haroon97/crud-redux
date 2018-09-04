// ADD_ITEMS

export const addPost = (data) => {
  return {
    type: 'ADD_POST',
    data
  }
}

export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    id
  }
}

export const editPost = (id) => {
  return {
    type: 'EDIT_POST',
    id
  }
}

export const updatePost = ({id, data}) => {
  return {
    type: 'UPDATE_POST',
    id,
    data
  }
}

export const likePost = (id) => {
  return {
    type: 'LIKE_POST',
    id
  }
}