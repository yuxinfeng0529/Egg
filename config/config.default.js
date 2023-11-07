/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.view={
    mapping:{
      '.html':'ejs',
    }
  };

  // 关闭安全策略
  config.security={
    csrf:{
      enable:false,
    }
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1699268372546_1378';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
