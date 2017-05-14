
module.exports = {
  testFunc,
  showCategories,
  listRecipesByCat,
  addRecipe,
  getRecipes
}

function testFunc() {
  return('I am a working function!')
}

function showCategories(connection) {
  return connection('categories').select()
}

function getRecipes(connection) {
  return connection('recipes').select()
}

function listRecipesByCat(category_id, connection) {
  return connection('recipes')
  .where('category_id', category_id)
  }

function addRecipe(category_id, recipe_name, chef_name, recipe_image_url, recipe_ingredients, recipe_text, recipe_comments, connection) {
  return connection('recipes')
  .insert({category_id, recipe_name, chef_name, recipe_image_url, recipe_ingredients, recipe_text, recipe_comments})
}
