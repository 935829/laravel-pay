class Alipay {
  constructor(config) {
    this.config = config || {};
  }

  web(order) {
    return this.process('web', order);
  }

  process(action, order) {
    console.log(`alipay ${action}`, order);
    return Promise.resolve({ provider: 'alipay', action, order });
  }
}

module.exports = Alipay;
