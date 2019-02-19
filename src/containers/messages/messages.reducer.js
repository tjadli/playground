import createReducer from '../../lib/createReducer';
import * as types from './messages.vars';

export const messages = createReducer([], {
  [types.SET_MESSAGES]: (state, action) => {
    return action.data
  },
  [types.ADD_MESSAGE]: (state, action) => {
    return [action.data, ...state]
  },
  [types.GET_MESSAGES_ERROR]: () => []
});
