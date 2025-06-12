const Pay = require('./lib');
const pay = new Pay();

(async () => {
  const order = { out_trade_no: Date.now(), total_amount: '1', subject: 'test' };
  await pay.alipay().web(order);
  await pay.wechat().mp(order);
})();
