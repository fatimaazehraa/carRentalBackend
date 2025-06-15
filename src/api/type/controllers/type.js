'use strict';

/**
 *  category controller
 

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category');

*/

//'use strict';

// @ts-ignore


const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::type.type', ({ strapi }) => ({
  async delete(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.delete('api::type.type', id);
    return entity;
  },
async update(ctx) {
    const { id } = ctx.params;
    const { data } = ctx.request.body;

    const updatedtype = await strapi.entityService.update('api::type.type', id, {
      data,
    });

    return updatedtype;
  },

}));
