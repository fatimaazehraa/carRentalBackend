'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/specifications',
      handler: 'specification.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/specifications/:id',
      handler: 'specification.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/specifications',
      handler: 'specification.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/specifications/custom-upload',
      handler: 'specification.customUpload',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/specifications/:id',
      handler: 'specification.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/specifications/:id',
      handler: 'specification.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
