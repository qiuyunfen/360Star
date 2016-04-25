'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async loginAction() {
  	if(this.isGet()) {
  		return this.display();
  	} else {
  		
  		let username = this.post('username');
  		let password = this.post('password');
  		let usernameConf = this.config('username');
  		let passwordConf = this.config('password');

  		if(username == usernameConf && password == passwordConf) {
  			await this.session('userInfo', {
  				username: username
  			});
  			return this.success();
  		} else {
  			return this.fail(1000, '账号或密码错误');
  		}
  	}
  }
}