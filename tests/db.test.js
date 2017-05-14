// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../db')

test('testFunc returns a string', function(t) {
      var expected = 'I am a working function!'
      var actual = db.testFunc()
      console.log(actual)
      t.is(expected, actual)
})

test('showCategories lists all categories', function(t){
    return db.showCategories(t.context.connection)
    .then(function(results) {
      t.is(9, results.length)
    })
  })

  test('getRecipes gets all recipes', function(t){
      return db.getRecipes(t.context.connection)
      .then(function(results) {
        t.is(1, results.length)
      })
    })

  test('listRecipes lists all recipes by category', function(t) {
    return db.listRecipesByCat(2201, t.context.connection)
    .then(function(results) {
      t.is(1, results.length)
    })
  })
