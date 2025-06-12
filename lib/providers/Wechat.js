class Wechat {
  constructor(config) {
    this.config = config || {};
  }

  mp(order) {
    return this.process('mp', order);
  }

  process(action, order) {
    console.log(`wechat ${action}`, order);
    return Promise.resolve({ provider: 'wechat', action, order });
  }
}

module.exports = Wechat;
