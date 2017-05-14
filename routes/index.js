var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', (req, res) => {
  req.app.get('connection')
  res.redirect('/home')
})

router.get('/home', (req, res) => {
  db.showCategories(req.app.get('connection'))
    .then((categories) => {
      res.render('index', {categories})
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/home/category/:id', (req, res) => {
  db.listRecipesByCat(req.params.id, req.app.get('connection'))
    .then((recipes) => {
      res.render('categories', {recipes})
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/add-recipe', (req, res) => {
  db.getRecipes(req.app.get('connection'))
    .then((recipes) => {
      res.render('add-recipe', {recipes})
    })
})

router.post('/add-recipe', (req,res) => {
  console.log(req.body);
  db.addRecipe(req.body, req.app.get('connection'))
  .then(function(recipe) {
    res.redirect('/home')
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})


module.exports = router
