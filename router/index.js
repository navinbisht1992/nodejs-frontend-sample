/*jshint multistr: true, node: true, esversion: 6, undef: true, unused: true, varstmt: true*/
"use strict";

// Internal modules
const user                    = require('./user');

module.exports = function(app) {

  app.get('/', (req, res) => {
    res.render('login');
  });

  app.post('/login', user.checkLogin);

  app.post('/v1/detail', user.postDetail);

  //app.put('/v1/detail', service.apiInfo, user.getDetail, user.putDetail, service.response);

};
