var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const x= req.query.x || getRandomArbitrary(0, 60);
  var y1 = Math.atan2(x);
  var y2 = Math.atanh(x);
  var y3 = Math.cbrt(x);
  function getRandomArbitrary(min, max) {
    return Math.cbrt(Math.random() * (max - min) + min);
  }
  res.send(`Math.atan2(${x}) is ${y1} ; Math.atanh(${x}) is ${y2} ; Math.;cbrt(${x}) is ${y3}\n`);
});

module.exports = router;
