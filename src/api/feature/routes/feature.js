
'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/feature',
      handler: 'feature.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/feature/:id',
      handler: 'feature.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/features',
      handler: 'feature.create',
      config: {
        policies: [],
        middlewares: [],
      },
    }, 

    {
  method: 'PUT',
  path: '/features/:id',
  handler: 'feature.update',  // must match your controller method name
},

    {
      method: 'DELETE',
      path: '/features/:id',
      handler: 'feature.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};