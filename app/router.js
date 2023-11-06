'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/demo', controller.oneCon.demoone);
  // 自由传参
  router.get('/getquery', controller.oneCon.getCat);
  // 严格传参
  router.get('/getstr/:name/:age', controller.oneCon.getstrict);
  // service
  router.get('/service',controller.oneCon.getSer)
  // ejs
  router.get('/ejs',controller.ejsd.index)
};
