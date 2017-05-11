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
    var expected = 9
    return db.showCategories(t.context.connection)
    .then(function(results) {
      var actual = results.length
      t.is(expected, actual)
    })
  })
