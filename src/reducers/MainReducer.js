import { combineReducers } from 'redux'
import * as MessagesReducers from './../containers/messages/messages.reducer';


export default combineReducers({
  ...MessagesReducers
})