class Douyin {
  constructor(config) {
    this.config = config || {};
  }

  mini(order) {
    return this.process('mini', order);
  }

  process(action, order) {
    console.log(`douyin ${action}`, order);
    return Promise.resolve({ provider: 'douyin', action, order });
  }
}

module.exports = Douyin;
