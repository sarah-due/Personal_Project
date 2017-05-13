
exports.up = function (knex, Promise) {
  return knex.schema.createTable('recipes', function (table) {
    table.increments('id').primary()
    table.string('category_id')
    table.string('recipe_name')
    table.string('chef_name')
    table.string('recipe_image_url')
    table.text('recipe_text')
    table.text('recipe_comments')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('recipes')
}
