class Unipay {
  constructor(config) {
    this.config = config || {};
  }

  scan(order) {
    return this.process('scan', order);
  }

  process(action, order) {
    console.log(`unipay ${action}`, order);
    return Promise.resolve({ provider: 'unipay', action, order });
  }
}

module.exports = Unipay;
