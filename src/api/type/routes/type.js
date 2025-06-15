
'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/type',
      handler: 'type.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/type/:id',
      handler: 'type.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/types',
      handler: 'type.create',
      config: {
        policies: [],
        middlewares: [],
      },
    }, 

    {
  method: 'PUT',
  path: '/types/:id',
  handler: 'type.update',  // must match your controller method name
},

    {
      method: 'DELETE',
      path: '/types/:id',
      handler: 'type.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};