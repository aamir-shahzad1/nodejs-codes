var express = require('express');

const pageRouter = express.Router();
pageRouter.get('/', function(req, res) {
    res.redirect('/home')            
  });
pageRouter.get('/home', function(req, res) {
    const data = {
      hello: 'world',
      foo: 'bar'
    };
    return res.render('../../src/views/index.html', data);
  });

  module.exports = pageRouter;