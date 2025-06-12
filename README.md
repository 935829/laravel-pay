# Node Pay

This project provides a light‑weight Node.js wrapper inspired by the original `yansongda/laravel-pay` package. It exposes payment providers with a similar API so that Nuxt.js or other Node applications can integrate payments easily.

## Install

```bash
npm install node-pay
```

## Usage

```js
const Pay = require('node-pay');
const pay = new Pay();

const order = {
  out_trade_no: Date.now(),
  total_amount: '1',
  subject: 'test subject'
};

// Alipay web payment
pay.alipay().web(order).then(result => {
  console.log(result);
});

// WeChat JSAPI payment
pay.wechat().mp(order).then(result => {
  console.log(result);
});
```

### Nuxt integration

To use this library in a Nuxt 3 project, create a plugin that exposes a `pay`
instance:

```js
// plugins/pay.js
import Pay from 'node-pay'

export default defineNuxtPlugin(() => {
  const pay = new Pay()
  return {
    provide: { pay }
  }
})
```

You can then access it via `$pay` in server routes or composables:

```js
const order = { out_trade_no: Date.now(), total_amount: '1', subject: 'test' }
const result = await $pay.alipay().web(order)
```

Configuration options are located in `config/pay.js` and mirror the structure of the original PHP version.

## License

MIT
