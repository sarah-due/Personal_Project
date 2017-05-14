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
      t.is($('h1').first().text(), 'Get Baked Wellington! or Bake It til you Make It')
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

test('GET /add-recipe', (t) => {
  return request(t.context.app)
  .get('/add-recipe')
  .expect(200)
  .then((res) => {
    const $ = cheerio.load(res.text)
    t.is($('h2').first().text(), 'Submit your recipe: ')
    })
})
