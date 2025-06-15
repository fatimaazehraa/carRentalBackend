
'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/category',
      handler: 'category.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/category/:id',
      handler: 'category.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/categories',
      handler: 'category.create',
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
  path: '/categories/:id',
  handler: 'category.update',  // must match your controller method name
},

    {
      method: 'DELETE',
      path: '/categories/:id',
      handler: 'category.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};