'use strict';


// @ts-ignore
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::specification.specification', ({ strapi }) => ({
  async delete(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.delete('api::specification.specification', id);
    return entity;
  },
async update(ctx) {
    const { id } = ctx.params;
    const { data } = ctx.request.body;

    const updatedSpecification = await strapi.entityService.update('api::specification.specification', id, {
      data,
    });

    return updatedSpecification;
  },

  async customUpload(ctx) {
    try {
      const { files, body } = ctx.request;

      const data = JSON.parse(body.data); // parse JSON from form-data field

      const entry = await strapi.entityService.create('api::specification.specification', {
        data,
        files: {
          Image: files.Image,
        },
      });

      ctx.send(entry);
    } catch (err) {
      ctx.throw(400, 'Upload failed: ' + err.message);
    }
  },
}));
