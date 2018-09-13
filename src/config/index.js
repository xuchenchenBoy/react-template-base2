const settings = {
  'production': {
    apiRoot: `${window.location.protocol}//restapi.xuanwonainiu.com`,
  },
  'development': {
    apiRoot: 'http://restapi.xuanwonainiutest.com',
  },
  'default': {
    apiRoot: 'http://restapi.xuanwonainiutest.com',
  }
};

const INTERFACE_ENV = process.env.REACT_APP_CUSTOM_ENV || process.env.NODE_ENV; // 接口环境
console.log('env=', [INTERFACE_ENV]);

function getSetting (name) {
  const setting = settings[INTERFACE_ENV] || settings['default'];
  return setting[name] || settings['default'][name];
}

module.exports = {
  getSetting,
};
