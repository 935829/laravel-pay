module.exports = {
  alipay: {
    default: {
      app_id: '',
      app_secret_cert: '',
      app_public_cert_path: '',
      alipay_public_cert_path: '',
      alipay_root_cert_path: '',
      return_url: '',
      notify_url: '',
      service_provider_id: '',
      mode: 'NORMAL'
    }
  },
  wechat: {
    default: {
      mch_id: '',
      mch_secret_key_v2: '',
      mch_secret_key: '',
      mch_secret_cert: '',
      mch_public_cert_path: '',
      notify_url: '',
      mp_app_id: '',
      mini_app_id: '',
      app_id: '',
      sub_mp_app_id: '',
      sub_app_id: '',
      sub_mini_app_id: '',
      sub_mch_id: '',
      wechat_public_cert_path: {
        'CERT_SN': __dirname + '/Cert/wechatPublicKey.crt'
      },
      mode: 'NORMAL'
    }
  },
  unipay: {
    default: {
      mch_id: '',
      mch_secret_key: '979da4cfccbae7923641daa5dd7047c2',
      mch_cert_path: '',
      mch_cert_password: '000000',
      unipay_public_cert_path: '',
      return_url: '',
      notify_url: ''
    }
  },
  douyin: {
    default: {
      mch_id: '',
      mch_secret_token: '',
      mch_secret_salt: '',
      mini_app_id: '',
      thirdparty_id: '',
      notify_url: ''
    }
  },
  jsb: {
    default: {
      svr_code: '',
      partner_id: '',
      public_key_code: '00',
      mch_secret_cert_path: '',
      mch_public_cert_path: '',
      jsb_public_cert_path: '',
      notify_url: '',
      mode: 'NORMAL'
    }
  },
  http: {
    timeout: 5.0,
    connect_timeout: 5.0
  },
  logger: {
    enable: false,
    file: null,
    level: 'debug',
    type: 'single',
    max_file: 30
  }
};
