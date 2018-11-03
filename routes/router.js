var express = require('express');
var router = express.Router();

var pubdir = './storage/';

router.get('/', function (req, res, next) {
  res.sendfile(pubdir+'index.html');
});

router.get('/carta', function (req, res, next) {
  res.sendfile(pubdir+'carta.html');
});

router.get('/contacto', function (req, res, next) {
  res.sendfile(pubdir+'contacto.html');
});

router.get('/ubereats', function (req, res, next) {
  res.sendfile(pubdir+'ubereats.html');
});

router.get('/arata', function (req, res, next) {
  res.send();
});

module.exports = router;
