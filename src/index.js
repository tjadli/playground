import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import MainReducer from './reducers/MainReducer'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const enhancer = compose(applyMiddleware(
  thunkMiddleware
));
console.log(MainReducer)
const store = createStore(MainReducer, { messages : []}, enhancer);


render(<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
