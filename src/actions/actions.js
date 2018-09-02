// ADD_ITEMS

export const addPost = (data) => {
  return {
    type: 'ADD_POST',
    data
  }
}

export const removePost = (id) => {
  return {
    type: 'REMOVE_POST',
    id
  }
}