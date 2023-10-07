var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Employee Management portal' });
});
// router.post('/', function(req, res, next) {
//   res.render('tfvar', { title: 'Welcome to tfvar page' });
// });

module.exports = router;
