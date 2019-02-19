import axios from 'axios'

const host = 'https://5c6c6800d51de300146f5b38.mockapi.io/test/'; 

export default class Api {
  static token;
  static locale;

  static headers() {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      dataType: 'json',
      'Client-ID': 'kp3v5gml78i8lqlh9nrjez9e3qcxrb',
      mode: 'no-cors'
    };
  }

  static setLocaleLanguage(lang) {
    this.locale = lang;
  }

  static get(route, params, requiresAuth) {
    return this.xhr(route, null, 'GET', requiresAuth);
  }

  static put(route, params, requiresAuth) {
    return this.xhr(route, params, 'PUT', requiresAuth);
  }

  static post(route, params, requiresAuth, blob) {
    return this.xhr(route, params, 'POST', requiresAuth, blob);
  }

  static delete(route, params, requiresAuth) {
    return this.xhr(route, params, 'DELETE', requiresAuth);
  }

  static xhr(route, params, verb, requiresAuth = false) {
    
    return new Promise((resolve, reject) => {
      const url = `${host}${route}`;
      
      const options = Object.assign(
        { url, method: verb }, params ? { body: JSON.stringify(params) } : null
      );
      options.headers = Api.headers();
      if (requiresAuth) {
        if (this.token) {
          options.headers.Authorization = `Bearer ${this.token}`;
        }
      } 

      axios.request(options).then((resp) => {
        resolve(resp);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  
}
