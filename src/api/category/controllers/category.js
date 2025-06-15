'use strict';

/**
 *  category controller
 

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category');

*/

//'use strict';

// @ts-ignore


const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category', ({ strapi }) => ({
  async delete(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.delete('api::category.category', id);
    return entity;
  },
async update(ctx) {
    const { id } = ctx.params;
    const { data } = ctx.request.body;

    const updatedCategory = await strapi.entityService.update('api::category.category', id, {
      data,
    });

    return updatedCategory;
  },

}));
