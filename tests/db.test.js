// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../db')

test('testFunc prints a message to console', function(t) {
  var expected = 'I am a working function!'
  return db.testFunc(t.context.connection)
    .then(function(result) {
      var actual = testFunc()
      t.is(expected, actual)
    })
})
