'use strict';

/**
 *  category controller
 

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category');

*/

//'use strict';

// @ts-ignore


const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async delete(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.delete('api::article.article', id);
    return entity;
  },
async update(ctx) {
    const { id } = ctx.params;
    const { data } = ctx.request.body;

    const updatedArticle = await strapi.entityService.update('api::article.article', id, {
      data,
    });

    return updatedArticle;
  },

}));
