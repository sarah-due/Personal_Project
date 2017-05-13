
module.exports = {
  testFunc,
  showCategories,
  listRecipes
}

function testFunc() {
  return('I am a working function!')
}

function showCategories(connection) {
  return connection('categories').select()
}

function listRecipes(category_id, connection) {
  return connection('recipes')
  .where('category_id', category_id)
  }
