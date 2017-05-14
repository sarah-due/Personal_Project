
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
    .where('recipe_id', recipe_id).first()
  }

function addRecipe(category_id, recipe_name, chef_name, recipe_image_url, recipe_ingredients, recipe_text, recipe_comments, connection) {
  return connection('recipes')
  .insert({category_id, recipe_name, chef_name, recipe_image_url, recipe_ingredients, recipe_text, recipe_comments})
}
