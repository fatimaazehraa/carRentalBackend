
'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/article',
      handler: 'article.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/article/:id',
      handler: 'article.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/articles',
      handler: 'article.create',
      config: {
        policies: [],
        middlewares: [],
      },
    }, 

    {
  method: 'PUT',
  path: '/articles/:id',
  handler: 'article.update',  // must match your controller method name
},

    {
      method: 'DELETE',
      path: '/articles/:id',
      handler: 'article.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};