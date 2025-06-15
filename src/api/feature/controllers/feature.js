'use strict';


// @ts-ignore
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::feature.feature', ({ strapi }) => ({
  async delete(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.delete('api::feature.feature', id);
    return entity;
  },
async update(ctx) {
    const { id } = ctx.params;
    const { data } = ctx.request.body;

    const updatedfeature = await strapi.entityService.update('api::feature.feature', id, {
      data,
    });

    return updatedfeature;
  },

}));
