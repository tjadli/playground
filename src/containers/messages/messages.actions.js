import MessagesApi from './messages.api';
import * as types from './messages.vars';



// 
export const getMessagesAction = () =>
  (dispatch) => {
    dispatch({
      type: types.CLEAR_GET_MESSAGES_ERROR
    });
    MessagesApi.getMessages().then((resp) => {
      dispatch({
        type: types.SET_MESSAGES,
        data: resp.data
      });
    }).catch((err) => {
      dispatch({
        type: types.GET_MESSAGES_ERROR,
        error: err
      });
    });
  };

export const addMessageAction = (message) =>
  (dispatch) => {
    dispatch({
      type: types.ADD_MESSAGE,
      data: message
    });
    // MessagesApi.addMessage().then...
  };