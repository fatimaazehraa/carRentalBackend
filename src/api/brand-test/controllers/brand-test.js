'use strict';

/**
 *  category controller
 

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category');

*/

//'use strict';

// @ts-ignore


const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::brand-test.brand-test', ({ strapi }) => ({
  async delete(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.delete('api::brand-test.brand-test', id);
    return entity;
  },
async update(ctx) {
    const { id } = ctx.params;
    const { data } = ctx.request.body;

    const updatedbrand = await strapi.entityService.update('api::brand-test.brand-test', id, {
      data,
    });

    return updatedbrand;
  },

}));