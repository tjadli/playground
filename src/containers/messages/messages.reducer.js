import createReducer from '../../lib/createReducer';
import * as types from './messages.vars';
import { messagesEntity, messageEntity } from './messages.entity'

export const messages = createReducer([], {
  [types.SET_MESSAGES]: (state, action) => {
    return messagesEntity(action.data)
  },
  [types.ADD_MESSAGE]: (state, action) => {
    return [ messageEntity(action.data), ...state]
  },
  [types.GET_MESSAGES_ERROR]: () => []
});
