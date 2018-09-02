// Post Reducer 

const postReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return state.concat(action.name)
  }
}

export default postReducer;