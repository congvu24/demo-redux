import {compose, createStore} from 'redux';

const initialState = {
  message: '',
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'app/setMessage':
      return {message: action.payload};
    case 'app/clearMessage':
      return {message: ''};
    default:
      return state;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(appReducer, composeEnhancers());

export default store;
