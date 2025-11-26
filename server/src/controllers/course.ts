import type { Core } from '@strapi/strapi';
import type { Context } from 'koa';
import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'plugin::strapi-plugin-lms.lms-course',
  ({ strapi }: { strapi: Core.Strapi }) => ({
    // Find course by slug
    async findBySlug(ctx: Context) {
      const { slug } = ctx.params;

      if (!slug) {
        return ctx.badRequest('Slug is required');
      }

      const entity = await strapi.documents('plugin::strapi-plugin-lms.lms-course').findFirst({
        filters: { slug },
      });

      if (!entity) {
        return ctx.notFound('Course not found');
      }

      return { data: entity };
    },
  })
);
