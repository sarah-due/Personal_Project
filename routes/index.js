var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  req.app.get('connection')
  res.redirect('/home')
})

router.get('/home', function (req, res) {
  db.showCategories(req.app.get('connection'))
    .then(function(categories) {
      res.render('index', {categories})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})



module.exports = router
