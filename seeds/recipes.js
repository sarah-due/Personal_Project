exports.seed = function (knex, Promise) {
  return knex('recipes').del()
    .then(function () {
      return Promise.all([
        knex('recipes').insert({id:99901, category_id: 2201, recipe_name: '', chef_name:'', recipe_image_url: '', recipe_text: '', recipe_comments:''}),
        knex('recipes').insert({id:99902, category_id: 2201, recipe_name: '', chef_name:'', recipe_image_url: '', recipe_text: '', recipe_comments:''}),
        knex('recipes').insert({id:99903, category_id: 2201, recipe_name: '', chef_name:'', recipe_image_url: '', recipe_text: '', recipe_comments:''}),
        knex('recipes').insert({id:99904, category_id: 2201, recipe_name: '', chef_name:'', recipe_image_url: '', recipe_text: '', recipe_comments:''}),
        knex('recipes').insert({id:99905, category_id: 2201, recipe_name: '', chef_name:'', recipe_image_url: '', recipe_text: '', recipe_comments:''}),
        knex('recipes').insert({id:99906, category_id: 2201, recipe_name: '', chef_name:'', recipe_image_url: '', recipe_text: '', recipe_comments:''}),
        knex('recipes').insert({id:99907, category_id: 2201, recipe_name: '', chef_name:'', recipe_image_url: '', recipe_text: '', recipe_comments:''}),
        knex('recipes').insert({id:99908, category_id: 2201, recipe_name: '', chef_name:'', recipe_image_url: '', recipe_text: '', recipe_comments:''}),
        knex('recipes').insert({id:99909, category_id: 2201, recipe_name: '', chef_name:'', recipe_image_url: '', recipe_text: '', recipe_comments:''}),
        knex('recipes').insert({id:99910, category_id: 2201, recipe_name: '', chef_name:'', recipe_image_url: '', recipe_text: '', recipe_comments:''})
      ]);
    });
};
