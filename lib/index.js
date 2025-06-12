const Alipay = require('./providers/Alipay');
const Wechat = require('./providers/Wechat');
const Unipay = require('./providers/Unipay');
const Douyin = require('./providers/Douyin');
const Jsb = require('./providers/Jsb');

class Pay {
  constructor(config) {
    this.config = config || require('../config/pay');
  }

  alipay() {
    return new Alipay(this.config.alipay?.default);
  }

  wechat() {
    return new Wechat(this.config.wechat?.default);
  }

  unipay() {
    return new Unipay(this.config.unipay?.default);
  }

  douyin() {
    return new Douyin(this.config.douyin?.default);
  }

  jsb() {
    return new Jsb(this.config.jsb?.default);
  }
}

module.exports = Pay;
