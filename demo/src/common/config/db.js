'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '',
      database: 'thinkjs_demo',
      user: 'root',
      password: '1111',
      prefix: 'think_',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};