
module.exports = {
  showCategories,
  listRecipesByCat,
  addRecipe,
  getRecipes,
  viewRecipe
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

function viewRecipe(recipe_id, connection) {
    return connection('recipes')
    .where('recipe_id', recipe_id)
  }

function addRecipe(form_inputs, connection) {
  return connection('recipes')
  .insert({form_inputs})
}
