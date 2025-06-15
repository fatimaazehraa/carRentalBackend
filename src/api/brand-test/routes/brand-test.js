'use strict';

/**
 * category router.
 

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::category.category');
*/

'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/brand-test',
      handler: 'brand-test.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/brand-test/:id',
      handler: 'brand-test.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/brand-tests',
      handler: 'brand-test.create',
      config: {
        policies: [],
        middlewares: [],
      },
    }, 
   /*
    {
      method: 'PUT',
      path: '/categories/:id',
      handler: 'category.update',
      config: {
        policies: [],
        middlewares: [],
      },
    }, **/
    {
  method: 'PUT',
  path: '/brand-tests/:id',
  handler: 'brand-test.update',  // must match your controller method name
},

    {
      method: 'DELETE',
      path: '/brand-tests/:id',
      handler: 'brand-test.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};