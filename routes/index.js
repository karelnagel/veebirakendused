var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Posts' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/singlepost', function(req, res, next) { //Todo add post id query
  res.render('singlepost', { title: 'Post' });
});
router.get('/addnewpost', function(req, res, next) { //Todo add post id query
  res.render('addnewpost', { title: 'New Post' });
});

module.exports = router;
