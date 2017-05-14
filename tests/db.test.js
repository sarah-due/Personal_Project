
var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../db')


test('showCategories lists all categories', (t)=> {
    return db.showCategories(t.context.connection)
    .then(function(results) {
      t.is(9, results.length)
    })
  })

  test('viewRecipe shows a recipe by id', (t)=> {
    return db.viewRecipe(99901, t.context.connection)
    .then(function(result) {
      t.is(result.recipe_name, 'Chocolate Layer Cake');
    })
  })

  test('getRecipes gets all recipes', (t)=> {
      return db.getRecipes(t.context.connection)
      .then(function(results) {
        t.is(1, results.length)
      })
    })

  test('listRecipes lists all recipes by category', (t)=> {
    return db.listRecipesByCat(2201, t.context.connection)
    .then(function(results) {
      t.is(1, results.length)
    })
  })
