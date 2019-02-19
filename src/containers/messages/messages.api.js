import Api from './../../lib/api';

export default class MessagesApi {
  static getMessages() {
    return new Promise((resolve, reject) => {
      Api.get('messages', null, true)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
