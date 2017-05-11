var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  req.app.get('connection')
  res.render('index')
})

module.exports = router
