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
  router.get('/service', controller.oneCon.getSer)
  // ejs
  router.get('/ejs', controller.ejsd.index)
  //cookie路由
  router.get('/cookie', controller.cookie.viewindex)
  router.post('/addcookie', controller.cookie.addCookie)
  router.post('/delcookie', controller.cookie.delCookie)
  router.post('/querycookie', controller.cookie.queryCookie)
  router.post('/editcookie', controller.cookie.editCookie)
  //session
  router.get('/session', controller.session.sessionIndex)
  router.post('/addsession', controller.session.addSession)
};
