import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import postReducer from './reducers/postReducer';
import { addPost } from './actions/actions';

const store = createStore(postReducer);
store.dispatch(addPost('haroon'));
console.log(store.getState());


ReactDOM.render(<App />, document.getElementById('root'));
