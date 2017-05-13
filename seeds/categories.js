exports.seed = function (knex, Promise) {
  return knex('categories').del()
    .then(function () {
      return Promise.all([
        knex('categories').insert({id:2201, category_name: 'Cakes and Tortes', image_url: './public/images/cake.jpg'}),
        knex('categories').insert({id:2202, category_name: 'Pies, Crumbles, and Tarts', image_url: './public/images/pie.jpg'}),
        knex('categories').insert({id:2203, category_name: 'Cookies and Bars', image_url: './public/images/cookies.jpeg'}),
        knex('categories').insert({id:2204, category_name: 'Custard, Mousse, and Pudding', image_url: './public/images/pudding.jpeg'}),
        knex('categories').insert({id:2205, category_name: 'Candy and Confectioneries', image_url: './public/images/confectionery.jpg'}),
        knex('categories').insert({id:2206, category_name: 'Bread', image_url: './public/images/bread.jpeg'}),
        knex('categories').insert({id:2207, category_name: 'Muffins and Breakfast Pastries', image_url: './public/images/pastries.jpeg'}),
        knex('categories').insert({id:2208, category_name: 'Ice Cream and Frozen Desserts', image_url: './public/images/icecream.jpeg'}),
        knex('categories').insert({id:2209, category_name: 'Frosting, Glazes, and Sauces', image_url: './public/images/frosting.jpg'})
      ]);
    });
};
