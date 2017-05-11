exports.seed = function (knex, Promise) {
  return knex('categories').del()
    .then(function () {
      return Promise.all([
        knex('categories').insert({id:2201, recipe_id: 99901, name: 'Cakes and Tortes', image_url: './images/cake.jpg'}),
        knex('categories').insert({id:2202, recipe_id: 99902, name: 'Pies, Crumbles, and Tarts', image_url: './images/pie.jpg'}),
        knex('categories').insert({id:2203, recipe_id: 99903, name: 'Cookies and Bars', image_url: './images/cookies.jpeg'}),
        knex('categories').insert({id:2204, recipe_id: 99904, name: 'Custard, Mousse, and Pudding', image_url: './images/pudding.jpeg'}),
        knex('categories').insert({id:2205, recipe_id: 99905, name: 'Candy and Confectioneries', image_url: './images/confectionery.jpg'}),
        knex('categories').insert({id:2206, recipe_id: 99906, name: 'Bread', image_url: './images/bread.jpeg'}),
        knex('categories').insert({id:2207, recipe_id: 99907, name: 'Muffins and Breakfast Pastries', image_url: './images/pastries.jpeg'}),
        knex('categories').insert({id:2208, recipe_id: 99907, name: 'Ice Cream and Frozen Desserts', image_url: './images/icecream.jpeg'}),
        knex('categories').insert({id:2209, recipe_id: 99907, name: 'Frosting, Glazes, and Sauces', image_url: './images/frosting.jpg'})
      ]);
    });
};