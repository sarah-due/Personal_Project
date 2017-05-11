var test = require('ava')
var request = require('supertest')
var cheerio = require('cheerio')

var createServer = require('../server')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test, createServer)

test('GET /home', (t) => {
  return request(t.context.app)
    .get('/home')
    .expect(200)
    .then((res) => {
      const $ = cheerio.load(res.text)
      console.log($('li').first().text());
      t.is($('h2').first().text(), 'Cakes and Tortes')
    })
})
