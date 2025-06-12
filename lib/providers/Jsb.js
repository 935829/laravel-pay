class Jsb {
  constructor(config) {
    this.config = config || {};
  }

  scan(order) {
    return this.process('scan', order);
  }

  process(action, order) {
    console.log(`jsb ${action}`, order);
    return Promise.resolve({ provider: 'jsb', action, order });
  }
}

module.exports = Jsb;
