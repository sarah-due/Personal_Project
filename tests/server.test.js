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
      t.is($('h2').first().text(), 'Cakes and Tortes')
    })
})

test('GET /home/category/:id', (t) => {
  return request(t.context.app)
  .get('/home/category/2201')
  .expect(200)
  .then((res) => {
    const $ = cheerio.load(res.text)
    t.is($('h4').first().text(), 'By Chef: Ina Garten aka The Barefoot Contessa')
  })
})
